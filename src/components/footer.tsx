import { WEDDING } from "@/lib/wedding";
import { OceanWaves } from "@/components/ocean-waves";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ocean-deep px-5 pb-16 pt-20 text-ivory">
      <img
        src="/images/ocean-aerial.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-40 outline-none"
      />
      <div className="absolute inset-0 bg-ocean-deep/70" />
      <OceanWaves tone="ocean" className="h-36" />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <p className="text-xs tracking-[0.3em] text-sand uppercase">Questions</p>
        <h2 className="mt-3 font-display text-3xl italic">Find us on the phone</h2>
        <p className="mt-4 text-sm text-ivory/75">
          Anything at all — travel, dress, the climb to the chapel.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-10">
          {WEDDING.contacts.map((person) => (
            <a
              key={person.name}
              href={`tel:+61${person.phone}`}
              className="min-h-11 font-display text-2xl text-ivory"
            >
              {person.name}
              <span className="mt-1 block font-sans text-sm tracking-[0.12em] text-sand">
                {person.phoneDisplay}
              </span>
            </a>
          ))}
        </div>
        <p className="mt-12 font-display text-xl italic">
          {WEDDING.names}
        </p>
        <p className="mt-2 text-xs tracking-[0.2em] text-sand uppercase">
          {WEDDING.dateLabel} · Phuket
        </p>
      </div>
    </footer>
  );
}
