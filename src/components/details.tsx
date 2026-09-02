import { Calendar, Clock, Shirt, Users } from "lucide-react";
import { WEDDING } from "@/lib/wedding";

const ITEMS = [
  {
    icon: Calendar,
    label: "The date",
    value: WEDDING.dateLabel,
    detail: "Sunday, late-dry-season Phuket",
  },
  {
    icon: Clock,
    label: "Ceremony",
    value: "5:00 pm",
    detail: "Please be seated by 4:50",
  },
  {
    icon: Users,
    label: "An intimate day",
    value: `${WEDDING.capacity} seats`,
    detail: "Family and close friends only",
  },
  {
    icon: Shirt,
    label: "Dress",
    value: "Island evening",
    detail: "Linen, sage, cream, sea-glass. Soft shoes for sand.",
  },
];

export function Details({ remaining }: { remaining: number }) {
  return (
    <section id="day" className="relative bg-paper px-5 py-20">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <article key={item.label} className="rounded-lg bg-ivory p-6 shadow-card">
            <item.icon className="size-5 text-sea" strokeWidth={1.5} />
            <p className="mt-4 text-xs tracking-[0.2em] text-muted uppercase">{item.label}</p>
            <h3 className="mt-1 font-display text-2xl text-ocean">{item.value}</h3>
            <p className="mt-2 text-sm text-muted">{item.detail}</p>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted">
        The Shore Chapel holds forty. {remaining} place{remaining === 1 ? "" : "s"} remain
        on the list — kindly reply by {WEDDING.rsvpByLabel}.
      </p>
    </section>
  );
}
