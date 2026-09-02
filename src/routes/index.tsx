import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LoginGate } from "@/components/login-gate";
import { WeddingPage } from "@/components/wedding-page";
import { getSession, type SessionPayload } from "@/lib/wedding-api";

export const Route = createFileRoute("/")({
  loader: () => getSession(),
  component: Home,
});

function Home() {
  const initial = Route.useLoaderData();
  const [session, setSession] = useState<SessionPayload | null>(
    initial.ok ? initial.session : null,
  );

  if (!session) {
    return <LoginGate onAuthed={setSession} />;
  }

  return (
    <WeddingPage
      session={session}
      onSession={setSession}
      onSignOut={() => setSession(null)}
    />
  );
}
