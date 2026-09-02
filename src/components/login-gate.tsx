import { useState, type FormEvent } from "react";
import { BeachOcean } from "@/components/beach-ocean";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OceanWaves } from "@/components/ocean-waves";
import { requestCode, verifyCode, type SessionPayload } from "@/lib/wedding-api";
import { WEDDING } from "@/lib/wedding";

export function LoginGate({ onAuthed }: { onAuthed: (session: SessionPayload) => void }) {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"phone" | "code">("phone");
  const [delivered, setDelivered] = useState<{
    firstName: string;
    maskedPhone: string;
    code: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function sendCode() {
    setPending(true);
    setError(null);
    try {
      const result = await requestCode({ data: { phone } });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      setDelivered({
        firstName: result.firstName,
        maskedPhone: result.maskedPhone,
        code: result.code,
      });
      setStep("code");
    } catch {
      setError("Something went quiet on the line. Please try again.");
    } finally {
      setPending(false);
    }
  }

  async function confirm() {
    setPending(true);
    setError(null);
    try {
      const result = await verifyCode({ data: { phone, code } });
      if (!result.ok) {
        setError(result.error);
        return;
      }
      onAuthed(result.session);
    } catch {
      setError("We could not open the invitation. Please try again.");
    } finally {
      setPending(false);
    }
  }

  function onPhoneSubmit(event: FormEvent) {
    event.preventDefault();
    void sendCode();
  }

  function onCodeSubmit(event: FormEvent) {
    event.preventDefault();
    void confirm();
  }

  return (
    <div className="relative min-h-dvh overflow-hidden bg-ocean-deep text-ivory">
      <img
        src="/images/dusk-sea.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover outline-none"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,54,64,0.22)_0%,rgba(18,54,64,0.4)_42%,rgba(18,54,64,0.55)_100%)]" />
      <BeachOcean variant="gate" className="h-[52%]" />
      <OceanWaves tone="ocean" className="h-36" />

      <main className="relative z-10 mx-auto flex min-h-dvh w-full max-w-lg flex-col justify-center px-5 py-16">
        <p className="enter-letter mb-6 text-center text-xs tracking-[0.32em] text-sand uppercase">
          Private invitation
        </p>
        <div className="enter-letter rounded-xl bg-paper/95 p-6 text-ink shadow-card sm:p-9">
          <p className="text-center text-xs tracking-[0.28em] text-sea uppercase">
            The Shore Chapel · Phuket
          </p>
          <h1 className="mt-3 text-center font-display text-5xl leading-none text-ocean italic sm:text-6xl">
            {WEDDING.names}
          </h1>
          <p className="mt-3 text-center font-display text-xl text-sage">{WEDDING.dateLabel}</p>
          <div className="mx-auto my-6 h-px w-16 bg-sand" />
          <p className="text-center text-sm leading-relaxed text-muted">
            This page is only for invited guests. Enter the mobile number on our list — we
            will send a code to that number to verify you.
          </p>

          {step === "phone" ? (
            <form className="mt-8 space-y-4" onSubmit={onPhoneSubmit} action="#" method="post">
              <div className="space-y-2">
                <Label htmlFor="phone">Mobile number</Label>
                <Input
                  id="phone"
                  name="phone"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="04xx xxx xxx"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                />
              </div>
              {error ? <p className="text-sm text-wax">{error}</p> : null}
              <Button type="submit" className="w-full" disabled={pending}>
                {pending ? "Sending…" : "Send my code"}
              </Button>
            </form>
          ) : (
            <form className="mt-8 space-y-4" onSubmit={onCodeSubmit} action="#" method="post">
              {delivered ? (
                <div className="enter-sms rounded-lg bg-ivory p-4 shadow-card">
                  <p className="text-xs tracking-[0.18em] text-sea uppercase">
                    Code sent to {delivered.maskedPhone}
                  </p>
                  <p className="mt-2 font-display text-2xl tracking-[0.28em] text-ocean">
                    {delivered.code}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    Hello {delivered.firstName} — enter this code to open your invitation.
                    It expires in ten minutes.
                  </p>
                </div>
              ) : null}
              <div className="space-y-2">
                <Label htmlFor="code">Six-digit code</Label>
                <Input
                  id="code"
                  name="code"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  placeholder="••••••"
                  value={code}
                  onChange={(event) => setCode(event.target.value)}
                  required
                  className="tracking-[0.4em]"
                />
              </div>
              {error ? <p className="text-sm text-wax">{error}</p> : null}
              <Button type="submit" className="w-full" disabled={pending}>
                {pending ? "Opening…" : "Open the invitation"}
              </Button>
              <button
                type="button"
                className="block w-full min-h-11 text-center text-sm text-muted underline-offset-4 hover:underline"
                onClick={() => {
                  setStep("phone");
                  setCode("");
                  setError(null);
                }}
              >
                Use a different number
              </button>
            </form>
          )}
        </div>
        <p className="mt-8 text-center text-xs leading-relaxed text-sand/90">
          Questions? Abdisa 0411 102 853 · Bontu 0466 618 420
        </p>
      </main>
    </div>
  );
}
