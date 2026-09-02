import { cn } from "@/lib/utils";

function Band({
  className,
  d,
  fill,
}: {
  className: string;
  d: string;
  fill: string;
}) {
  return (
    <div className={cn("absolute inset-x-0 bottom-0 h-full w-[220%]", className)}>
      <svg className="h-full w-full" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
        <path fill={fill} d={d} />
      </svg>
    </div>
  );
}

export function BeachOcean({
  className,
  variant = "hero",
}: {
  className?: string;
  variant?: "hero" | "gate";
}) {
  const sand = variant === "gate" ? "rgba(18, 54, 64, 0.55)" : "#f4efe6";

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 bottom-0 h-[28%] bg-[linear-gradient(180deg,transparent,rgba(212,196,168,0.55)_42%,rgba(196,174,138,0.9))]" />
      <Band
        className="wave-band-fast bottom-[38%] h-[46%] opacity-70"
        fill="rgba(94, 138, 136, 0.45)"
        d="M0 180c90 40 160-50 280-28 150 28 190 90 340 70 160-22 200-96 360-70 150 24 200 92 340 52 90-24 90-40 120-20v164H0Z"
      />
      <Band
        className="wave-band-slow bottom-[18%] h-[52%] opacity-85"
        fill="rgba(26, 69, 84, 0.62)"
        d="M0 150c110 36 190-44 320-20 170 32 210 86 370 64 150-20 210-88 350-60 150 28 190 80 300 48 70-18 80-36 100-18v166H0Z"
      />
      <Band
        className="wave-band bottom-0 h-[44%]"
        fill={sand}
        d="M0 120c100 32 170-38 300-16 160 26 200 78 350 58 150-18 190-80 340-54 140 24 190 76 310 44 80-20 100-36 140-16v180H0Z"
      />
      <div className="absolute inset-x-0 bottom-[30%] h-12">
        {["8%", "22%", "37%", "51%", "66%", "81%", "93%"].map((left, i) => (
          <span
            key={left}
            className="foam-dot absolute bottom-0 size-2 rounded-full bg-foam/80"
            style={{ left, animationDelay: `${i * 0.35}s` }}
          />
        ))}
        {["14%", "29%", "44%", "59%", "74%", "88%"].map((left, i) => (
          <span
            key={`s-${left}`}
            className="splash-dot absolute bottom-1 size-1.5 rounded-full bg-foam"
            style={{ left, animationDelay: `${0.2 + i * 0.28}s` }}
          />
        ))}
      </div>
    </div>
  );
}
