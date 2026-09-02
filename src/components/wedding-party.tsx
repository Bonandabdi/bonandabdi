import { PARTY } from "@/lib/wedding";

export function WeddingParty() {
  return (
    <section id="party" className="relative overflow-hidden bg-ocean px-5 py-24 text-ivory">
      <img
        src="/images/botanicals.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-20 outline-none mix-blend-luminosity"
      />
      <div className="absolute inset-0 bg-ocean/80" />
      <div className="relative mx-auto max-w-6xl">
        <p className="text-center text-xs tracking-[0.3em] text-sand uppercase">Who will speak</p>
        <h2 className="mt-3 text-center font-display text-4xl italic sm:text-5xl">
          Wedding party
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-ivory/75">
          A handful of voices after dinner. No long programmes — just the people
          who carried us here.
        </p>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PARTY.map((person) => (
            <article
              key={person.name}
              className="rounded-lg bg-ivory/8 p-6 shadow-[0_0_0_1px_color-mix(in_oklab,white_12%,transparent)]"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-ivory/10 font-display text-xl text-sand italic">
                {person.initials}
              </div>
              <h3 className="mt-5 font-display text-2xl">{person.name}</h3>
              <p className="mt-1 text-xs tracking-[0.18em] text-sand uppercase">{person.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ivory/75">{person.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
