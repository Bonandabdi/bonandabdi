import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { WEDDING } from "@/lib/wedding";
import { signOut } from "@/lib/wedding-api";

const LINKS = [
  { href: "#day", label: "The day" },
  { href: "#schedule", label: "Schedule" },
  { href: "#party", label: "Speakers" },
  { href: "#venue", label: "Venue" },
  { href: "#rsvp", label: "RSVP" },
] as const;

export function StickyNav({ guestName, onSignOut }: { guestName: string; onSignOut: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#day");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((link) => link.href.slice(1));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (nodes.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  async function leave() {
    await signOut();
    onSignOut();
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-200",
        scrolled ? "bg-paper/92 shadow-card" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6">
        <a
          href="#top"
          className={cn(
            "font-display text-xl italic tracking-tight sm:text-2xl",
            scrolled ? "text-ocean" : "text-ivory",
          )}
        >
          {WEDDING.names}
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-pill px-3 py-2 text-sm tracking-wide transition-colors duration-150",
                scrolled
                  ? active === link.href
                    ? "bg-ocean text-ivory"
                    : "text-ocean/80 hover:text-ocean"
                  : active === link.href
                    ? "bg-ivory/15 text-ivory"
                    : "text-ivory/80 hover:text-ivory",
              )}
            >
              {link.label}
            </a>
          ))}
          <p
            className={cn(
              "hidden text-xs tracking-[0.12em] lg:block",
              scrolled ? "text-muted" : "text-ivory/75",
            )}
          >
            Hello, {guestName.split(" ")[0]}
          </p>
          <button
            type="button"
            onClick={() => void leave()}
            className={cn(
              "ml-2 text-xs tracking-[0.14em] uppercase",
              scrolled ? "text-muted" : "text-ivory/70",
            )}
          >
            Sign out
          </button>
        </nav>
        <button
          type="button"
          className={cn(
            "relative size-11 rounded-pill lg:hidden",
            scrolled ? "text-ocean" : "text-ivory",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="mx-auto size-5" /> : <Menu className="mx-auto size-5" />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-sand/60 bg-paper px-4 py-4 lg:hidden">
          <p className="mb-3 text-xs tracking-[0.16em] text-muted uppercase">
            Hello, {guestName.split(" ")[0]}
          </p>
          <div className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-3 text-base text-ocean",
                  active === link.href ? "bg-ivory" : "",
                )}
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => void leave()}
              className="rounded-md px-3 py-3 text-left text-muted"
            >
              Sign out
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
