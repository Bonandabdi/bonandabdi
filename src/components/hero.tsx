import { BeachOcean } from "@/components/beach-ocean";
import { Countdown } from "@/components/countdown";
import { OceanWaves } from "@/components/ocean-waves";
import { WEDDING } from "@/lib/wedding";

export function Hero({ guestName }: { guestName: string }) {
  const first = guestName.split(" ")[0] ?? guestName;
  return (
    <section id="top" className="relative min-h-dvh overflow-hidden bg-ocean-deep">
      <img
        src="/images/chapel-hero.jpg"
        alt="The Shore Chapel above Kata Noi, looking out over the Andaman Sea"
        className="absolute inset-0 size-full object-cover outline-none"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,54,64,0.22)_0%,rgba(18,54,64,0.18)_38%,rgba(18,54,64,0.55)_72%,rgba(18,54,64,0.2)_100%)]" />
      <BeachOcean variant="hero" className="h-[48%]" />
      <OceanWaves tone="ivory" className="h-36" />
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-4xl flex-col items-center justify-center px-5 pb-32 pt-28 text-center">
        <p className="text-xs tracking-[0.34em] text-sand uppercase">Welcome, {first}</p>
        <h1 className="mt-5 font-display text-6xl leading-[0.9] text-ivory italic sm:text-8xl">
          {WEDDING.bride}
          <span className="mx-3 font-sans text-2xl font-normal not-italic tracking-[0.2em] text-sand sm:text-3xl">
            &
          </span>
          {WEDDING.groom}
        </h1>
        <p className="mt-6 max-w-lg font-display text-2xl text-ivory/90 sm:text-3xl">
          {guestName}, we would be honoured by your company
        </p>
        <p className="mt-4 text-sm tracking-[0.22em] text-sand uppercase">
          {WEDDING.dayLabel} · {WEDDING.dateLabel}
        </p>
        <p className="mt-2 text-sm text-ivory/80">
          Five o’clock in the afternoon · {WEDDING.venue}
        </p>
        <a
          href="#rsvp"
          className="mt-8 inline-flex min-h-11 items-center rounded-pill bg-ivory px-5 text-sm text-ocean"
        >
          RSVP now
        </a>
        <div className="mt-10 w-full max-w-lg">
          <Countdown />
        </div>
      </div>
    </section>
  );
}
