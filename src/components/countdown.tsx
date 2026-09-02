import { useEffect, useState } from "react";
import { WEDDING } from "@/lib/wedding";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function split(target: number, now: number): Parts | null {
  const delta = target - now;
  if (delta <= 0) return null;
  const days = Math.floor(delta / 86_400_000);
  const hours = Math.floor((delta % 86_400_000) / 3_600_000);
  const minutes = Math.floor((delta % 3_600_000) / 60_000);
  const seconds = Math.floor((delta % 60_000) / 1_000);
  return { days, hours, minutes, seconds };
}

const UNITS: { key: keyof Parts; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export function Countdown() {
  const target = new Date(WEDDING.ceremonyAt).getTime();
  const [parts, setParts] = useState<Parts | null>(() => split(target, Date.now()));

  useEffect(() => {
    const id = window.setInterval(() => setParts(split(target, Date.now())), 1000);
    return () => window.clearInterval(id);
  }, [target]);

  if (!parts) {
    return (
      <p className="font-display text-3xl text-ocean italic">The chapel doors are open.</p>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4">
      {UNITS.map((unit) => (
        <div
          key={unit.key}
          className="rounded-lg bg-paper/80 px-1 py-4 text-center shadow-card sm:px-3"
        >
          <div className="font-display text-3xl tabular-nums text-ocean sm:text-5xl">
            {String(parts[unit.key]).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[0.65rem] tracking-[0.18em] text-muted uppercase sm:text-xs">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
