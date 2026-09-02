import { useState } from "react";
import { Details } from "@/components/details";
import { SiteFooter } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Rsvp } from "@/components/rsvp";
import { Schedule } from "@/components/schedule";
import { StickyNav } from "@/components/sticky-nav";
import { Venue } from "@/components/venue";
import { WeddingParty } from "@/components/wedding-party";
import { WelcomeOverlay } from "@/components/welcome-overlay";
import type { SessionPayload } from "@/lib/wedding-api";

export function WeddingPage({
  session,
  onSession,
  onSignOut,
}: {
  session: SessionPayload;
  onSession: (session: SessionPayload) => void;
  onSignOut: () => void;
}) {
  const [welcomeOpen, setWelcomeOpen] = useState(!session.rsvp);
  const [rsvpChoice, setRsvpChoice] = useState<boolean | null>(
    session.rsvp ? session.rsvp.attending : null,
  );

  function goToRsvp(choice: boolean | null) {
    setRsvpChoice(choice);
    setWelcomeOpen(false);
    window.requestAnimationFrame(() => {
      document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <div className="bg-ivory text-ink">
      {welcomeOpen ? (
        <WelcomeOverlay
          name={session.guest.name}
          onAccept={() => goToRsvp(true)}
          onDecline={() => goToRsvp(false)}
          onLater={() => setWelcomeOpen(false)}
        />
      ) : null}
      <StickyNav guestName={session.guest.name} onSignOut={onSignOut} />
      <Hero guestName={session.guest.name} />
      <Details remaining={session.remaining} />
      <Schedule />
      <WeddingParty />
      <Venue />
      <Rsvp session={session} onUpdate={onSession} initialAttending={rsvpChoice} />
      <SiteFooter />
    </div>
  );
}
