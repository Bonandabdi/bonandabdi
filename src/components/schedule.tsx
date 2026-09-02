import { SCHEDULE, WEDDING } from "@/lib/wedding";

export function Schedule() {
  return (
    <section id="schedule" className="bg-ivory px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-xs tracking-[0.3em] text-sea uppercase">
          The order of the day
        </p>
        <h2 className="mt-3 text-center font-display text-4xl text-ocean italic sm:text-5xl">
          Schedule
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-muted">
          Sunday at The Shore. Times are in Phuket — seven hours ahead of Melbourne.
        </p>
        <ol className="mt-14">
          {SCHEDULE.map((item, index) => {
            const last = index === SCHEDULE.length - 1;
            return (
              <li
                key={item.title}
                className="grid grid-cols-[5.5rem_1fr] gap-5 sm:grid-cols-[7rem_1fr]"
              >
                <div className="pt-1 text-right">
                  <span className="font-display text-lg text-sage">{item.time}</span>
                </div>
                <div
                  className={
                    last
                      ? "relative border-l border-sand pl-6"
                      : "relative border-l border-sand pb-10 pl-6"
                  }
                >
                  <span className="absolute top-2 -left-[5px] size-2.5 rounded-full bg-sea" />
                  <h3 className="font-display text-2xl text-ocean">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
                  {index === 1 ? (
                    <p className="mt-2 text-xs tracking-[0.14em] text-wax uppercase">
                      Chapel · {WEDDING.capacity} seats
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
