import { WEDDING } from "@/lib/wedding";
import { Button } from "@/components/ui/button";

export function WelcomeOverlay({
  name,
  onAccept,
  onDecline,
  onLater,
}: {
  name: string;
  onAccept: () => void;
  onDecline: () => void;
  onLater: () => void;
}) {
  const first = name.split(" ")[0] ?? name;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ocean-deep/55 px-4">
      <div
        role="dialog"
        aria-labelledby="welcome-title"
        className="enter-letter relative w-full max-w-md rounded-xl bg-paper px-6 py-10 text-center shadow-card sm:px-10"
      >
        <img
          src="/images/wax-seal.jpg"
          alt=""
          className="mx-auto size-16 rounded-full object-cover shadow-card"
        />
        <p className="mt-5 text-xs tracking-[0.28em] text-sea uppercase">The Shore Chapel</p>
        <h2 id="welcome-title" className="mt-3 font-display text-4xl text-ocean italic">
          Welcome, {first}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {name}, you are on the invitation list. Kindly tell us if you can join {WEDDING.names}{" "}
          on {WEDDING.dateLabel}.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Button type="button" className="w-full" onClick={onAccept}>
            Accept invitation
          </Button>
          <Button type="button" variant="secondary" className="w-full" onClick={onDecline}>
            Decline invitation
          </Button>
        </div>
        <button
          type="button"
          className="mt-5 min-h-11 text-sm text-muted underline-offset-4 hover:underline"
          onClick={onLater}
        >
          Read the invitation first
        </button>
      </div>
    </div>
  );
}
