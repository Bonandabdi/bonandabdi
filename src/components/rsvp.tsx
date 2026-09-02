import { useEffect, useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MEALS, WEDDING } from "@/lib/wedding";
import { submitRsvp, type SessionPayload } from "@/lib/wedding-api";
import { cn } from "@/lib/utils";

export function Rsvp({
  session,
  onUpdate,
  initialAttending,
}: {
  session: SessionPayload;
  onUpdate: (session: SessionPayload) => void;
  initialAttending?: boolean | null;
}) {
  const existing = session.rsvp;
  const [attending, setAttending] = useState<boolean | null>(
    existing ? existing.attending : (initialAttending ?? null),
  );
  const [partySize, setPartySize] = useState(existing?.partySize || 1);
  const [meal, setMeal] = useState(existing?.meal ?? "coastal");
  const [dietary, setDietary] = useState(existing?.dietary ?? "");
  const [note, setNote] = useState(existing?.note ?? "");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [justSaved, setJustSaved] = useState(Boolean(existing));

  const closed = !session.rsvpOpen;
  const maxParty = session.guest.maxParty;
  const first = session.guest.name.split(" ")[0] ?? session.guest.name;

  useEffect(() => {
    if (existing) return;
    if (initialAttending === true || initialAttending === false) {
      setAttending(initialAttending);
      setJustSaved(false);
    }
  }, [existing, initialAttending]);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (attending === null) {
      setError("Please tell us if you can come.");
      return;
    }
    setPending(true);
    setError(null);
    try {
      const result = await submitRsvp({
        data: {
          attending,
          partySize,
          meal: attending ? meal : null,
          dietary: dietary.trim() || null,
          note: note.trim() || null,
        },
      });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      onUpdate(result.session);
      setJustSaved(true);
    } catch {
      setError("Your reply did not send. Please try once more.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="rsvp" className="relative overflow-hidden px-4 py-24">
      <img
        src="/images/letter-mail.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover outline-none"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,239,230,0.18)_0%,rgba(244,239,230,0.55)_40%,rgba(244,239,230,0.72)_100%)]" />
      <div className="relative mx-auto max-w-xl">
        <div className="enter-letter relative rounded-xl bg-paper/95 px-5 py-10 shadow-card sm:px-10">
          <img
            src="/images/wax-seal.jpg"
            alt=""
            className="absolute -top-10 left-1/2 size-20 -translate-x-1/2 rounded-full object-cover shadow-card"
          />
          <p className="mt-6 text-center text-xs tracking-[0.3em] text-sea uppercase">
            Kindly reply
          </p>
          <h2 className="mt-2 text-center font-display text-4xl text-ocean italic">RSVP</h2>
          <p className="mt-3 text-center text-sm text-muted">
            {first}, please reply by {WEDDING.rsvpByLabel}. The chapel holds {WEDDING.capacity} —
            {" "}
            {session.remaining} place{session.remaining === 1 ? "" : "s"} still open.
          </p>

          {justSaved && session.rsvp ? (
            <div className="mt-8 rounded-lg bg-ivory p-6 text-center shadow-card">
              <span className="mx-auto flex size-11 items-center justify-center rounded-full bg-sage/20 text-sage">
                <Check className="size-5" strokeWidth={1.75} />
              </span>
              <p className="mt-4 font-display text-2xl text-ocean">
                {session.rsvp.attending ? "We have your yes." : "We have your reply."}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {session.rsvp.attending
                  ? `Thank you, ${first}. ${session.rsvp.partySize === 1 ? "A place is held for you" : `${session.rsvp.partySize} places are held`} at The Shore.`
                  : `Thank you for letting us know, ${first}. You will be missed on the day — and still very much in the room.`}
              </p>
              {closed ? null : (
                <button
                  type="button"
                  className="mt-4 min-h-11 text-sm text-ocean underline-offset-4 hover:underline"
                  onClick={() => setJustSaved(false)}
                >
                  Amend reply
                </button>
              )}
            </div>
          ) : closed ? (
            <p className="mt-8 text-center text-sm text-muted">
              Replies closed on {WEDDING.rsvpByLabel}. Please contact Bontu or Abdisa if
              your plans have changed.
            </p>
          ) : (
            <form className="mt-8 space-y-6" onSubmit={onSubmit} action="#" method="post">
              <div>
                <Label>Will you join us, {first}?</Label>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {[
                    { value: true, label: "Accept" },
                    { value: false, label: "Decline" },
                  ].map((option) => (
                    <button
                      key={String(option.value)}
                      type="button"
                      onClick={() => setAttending(option.value)}
                      className={cn(
                        "min-h-12 rounded-md px-3 py-3 font-display text-lg transition-colors duration-150",
                        attending === option.value
                          ? "bg-ocean text-ivory"
                          : "bg-ivory text-ocean shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ocean)_16%,transparent)]",
                      )}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {attending ? (
                <>
                  {maxParty > 1 ? (
                    <div>
                      <Label htmlFor="partySize">Number in your party</Label>
                      <div className="mt-3 flex gap-2">
                        {Array.from({ length: maxParty }, (_, i) => i + 1).map((n) => (
                          <button
                            key={n}
                            type="button"
                            onClick={() => setPartySize(n)}
                            className={cn(
                              "size-12 rounded-md font-display text-xl",
                              partySize === n
                                ? "bg-ocean text-ivory"
                                : "bg-ivory text-ocean shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ocean)_16%,transparent)]",
                            )}
                          >
                            {n}
                          </button>
                        ))}
                      </div>
                      <p className="mt-2 text-xs text-muted">
                        A plus-one is held for you, within the chapel’s forty seats.
                      </p>
                    </div>
                  ) : null}

                  <div>
                    <Label>Menu</Label>
                    <div className="mt-3 grid gap-2">
                      {MEALS.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setMeal(item.id)}
                          className={cn(
                            "rounded-md px-4 py-3 text-left transition-colors duration-150",
                            meal === item.id
                              ? "bg-ocean text-ivory"
                              : "bg-ivory text-ink shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-ocean)_16%,transparent)]",
                          )}
                        >
                          <span className="block font-medium">{item.name}</span>
                          <span
                            className={cn(
                              "mt-1 block text-sm",
                              meal === item.id ? "text-ivory/75" : "text-muted",
                            )}
                          >
                            {item.blurb}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dietary">Dietary notes</Label>
                    <Textarea
                      id="dietary"
                      value={dietary}
                      onChange={(event) => setDietary(event.target.value)}
                      placeholder="Allergies, or anything we should tell the kitchen."
                    />
                  </div>
                </>
              ) : null}

              <div className="space-y-2">
                <Label htmlFor="note">A note for Bontu & Abdisa</Label>
                <Textarea
                  id="note"
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  placeholder="Optional — a line we will keep."
                />
              </div>

              {error ? <p className="text-sm text-wax">{error}</p> : null}

              <Button type="submit" className="w-full" variant="wax" size="lg" disabled={pending}>
                {pending ? "Sealing…" : "Seal and send"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
