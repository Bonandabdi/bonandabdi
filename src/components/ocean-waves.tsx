import { cn } from "@/lib/utils";

function WaveLayer({
  className,
  fill,
  durationClass,
}: {
  className?: string;
  fill: string;
  durationClass: string;
}) {
  return (
    <div className={cn("absolute bottom-0 left-0 h-[38%] w-[200%]", durationClass, className)}>
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill={fill}
          d="M0 72c120 28 180-36 300-24 150 16 180 70 330 58 140-12 180-72 330-58 140 14 180 68 300 42 80-18 140-48 180-28v118H0Z"
        />
      </svg>
    </div>
  );
}

function Foam({ className }: { className?: string }) {
  const dots = [
    { left: "8%", delay: "0s", size: "size-2" },
    { left: "18%", delay: "0.8s", size: "size-1.5" },
    { left: "27%", delay: "1.4s", size: "size-2.5" },
    { left: "41%", delay: "0.3s", size: "size-1.5" },
    { left: "53%", delay: "1.1s", size: "size-2" },
    { left: "62%", delay: "1.9s", size: "size-1.5" },
    { left: "74%", delay: "0.5s", size: "size-2.5" },
    { left: "86%", delay: "1.6s", size: "size-1.5" },
    { left: "93%", delay: "0.2s", size: "size-2" },
  ];
  return (
    <div className={cn("pointer-events-none absolute inset-x-0 bottom-[22%] h-16", className)}>
      {dots.map((dot) => (
        <span
          key={dot.left}
          className={cn(
            "foam-dot absolute bottom-0 rounded-full bg-foam/80",
            dot.size,
          )}
          style={{ left: dot.left, animationDelay: dot.delay }}
        />
      ))}
      {dots.slice(0, 6).map((dot) => (
        <span
          key={`s-${dot.left}`}
          className="splash-dot absolute bottom-2 size-1 rounded-full bg-foam"
          style={{ left: `calc(${dot.left} + 3%)`, animationDelay: `calc(${dot.delay} + 0.4s)` }}
        />
      ))}
    </div>
  );
}

export function OceanWaves({
  className,
  tone = "ivory",
}: {
  className?: string;
  tone?: "ivory" | "ocean";
}) {
  const fills =
    tone === "ivory"
      ? [
          "color-mix(in oklab, #5e8a88 55%, #1a4554)",
          "color-mix(in oklab, #1a4554 72%, #5e8a88)",
          "#f4efe6",
        ]
      : [
          "color-mix(in oklab, #5e8a88 40%, transparent)",
          "color-mix(in oklab, #123640 70%, #5e8a88)",
          "#123640",
        ];

  return (
    <div
      className={cn("pointer-events-none absolute inset-x-0 bottom-0 h-40 overflow-hidden", className)}
      aria-hidden="true"
    >
      <WaveLayer fill={fills[0]} durationClass="wave-band-fast opacity-80" className="bottom-[18%]" />
      <WaveLayer fill={fills[1]} durationClass="wave-band-slow opacity-90" className="bottom-[8%]" />
      <WaveLayer fill={fills[2]} durationClass="wave-band" />
      <Foam />
    </div>
  );
}
