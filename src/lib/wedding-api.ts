import { createServerFn } from "@tanstack/react-start";
import { createHash, randomBytes, randomInt, timingSafeEqual } from "node:crypto";
import { z } from "zod";
import { getSql } from "@/lib/db";
import { WEDDING, normalizePhone } from "@/lib/wedding";

const COOKIE = "shore_session";
const SESSION_DAYS = 30;
const OTP_MINUTES = 10;

type GuestRow = {
  id: number;
  name: string;
  phone: string;
  plus_one_allowed: boolean;
  max_party: number;
};

type RsvpRow = {
  attending: boolean;
  party_size: number;
  meal: string | null;
  dietary: string | null;
  note: string | null;
  updated_at: string;
};

export type GuestProfile = {
  id: number;
  name: string;
  phone: string;
  plusOneAllowed: boolean;
  maxParty: number;
};

export type RsvpRecord = {
  attending: boolean;
  partySize: number;
  meal: string | null;
  dietary: string | null;
  note: string | null;
};

export type SessionPayload = {
  guest: GuestProfile;
  rsvp: RsvpRecord | null;
  remaining: number;
  rsvpOpen: boolean;
};

function hashCode(code: string) {
  return createHash("sha256").update(code).digest("hex");
}

function hashesMatch(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

function toGuest(row: GuestRow): GuestProfile {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    plusOneAllowed: Boolean(row.plus_one_allowed),
    maxParty: row.max_party,
  };
}

function toRsvp(row: RsvpRow | undefined): RsvpRecord | null {
  if (!row) return null;
  return {
    attending: Boolean(row.attending),
    partySize: row.party_size,
    meal: row.meal,
    dietary: row.dietary,
    note: row.note,
  };
}

async function remainingSeats(sql: Awaited<ReturnType<typeof getSql>>) {
  const rows = await sql<{ taken: number }>`
    select coalesce(sum(party_size), 0)::int as taken
    from rsvps
    where attending = true
  `;
  return Math.max(0, WEDDING.capacity - (rows[0]?.taken ?? 0));
}

async function rsvpOpenNow() {
  return Date.now() < new Date(WEDDING.rsvpBy).getTime();
}

async function cookies() {
  return import("@tanstack/react-start/server");
}

async function readGuestFromCookie(): Promise<GuestRow | null> {
  const { getCookie } = await cookies();
  const token = getCookie(COOKIE);
  if (!token) return null;
  const sql = await getSql();
  const rows = await sql<GuestRow>`
    select g.id, g.name, g.phone, g.plus_one_allowed, g.max_party
    from guest_sessions s
    join guests g on g.id = s.guest_id
    where s.token = ${token} and s.expires_at > now()
    limit 1
  `;
  return rows[0] ?? null;
}

async function issueSession(guestId: number) {
  const sql = await getSql();
  const token = randomBytes(24).toString("hex");
  await sql`
    delete from guest_sessions
    where guest_id = ${guestId} or expires_at < now()
  `;
  await sql`
    insert into guest_sessions (token, guest_id, expires_at)
    values (${token}, ${guestId}, now() + interval '30 days')
  `;
  const { setCookie } = await cookies();
  setCookie(COOKIE, token, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  });
}

async function buildSession(guest: GuestRow): Promise<SessionPayload> {
  const sql = await getSql();
  const rsvpRows = await sql<RsvpRow>`
    select attending, party_size, meal, dietary, note, updated_at::text as updated_at
    from rsvps
    where guest_id = ${guest.id}
    limit 1
  `;
  return {
    guest: toGuest(guest),
    rsvp: toRsvp(rsvpRows[0]),
    remaining: await remainingSeats(sql),
    rsvpOpen: await rsvpOpenNow(),
  };
}

export const getSession = createServerFn({ method: "GET" }).handler(async () => {
  const guest = await readGuestFromCookie();
  if (!guest) return { ok: false as const };
  return { ok: true as const, session: await buildSession(guest) };
});

export const requestCode = createServerFn({ method: "POST" })
  .validator((input: unknown) => z.object({ phone: z.string().min(6).max(24) }).parse(input))
  .handler(async ({ data }) => {
    const phone = normalizePhone(data.phone);
    if (!phone) {
      return {
        ok: false as const,
        error: "Please enter an Australian mobile number.",
      };
    }
    const sql = await getSql();
    const guests = await sql<GuestRow>`
      select id, name, phone, plus_one_allowed, max_party
      from guests
      where phone = ${phone}
      limit 1
    `;
    if (!guests[0]) {
      return {
        ok: false as const,
        error:
          "That number is not on the invitation list. Please contact Abdisa on 0411 102 853 or Bontu on 0466 618 420.",
      };
    }

    const recent = await sql<{ count: number }>`
      select count(*)::int as count
      from otps
      where phone = ${phone} and created_at > now() - interval '15 minutes'
    `;
    if ((recent[0]?.count ?? 0) >= 5) {
      return {
        ok: false as const,
        error: "Please wait a few minutes before requesting another code.",
      };
    }

    const code = String(randomInt(0, 1_000_000)).padStart(6, "0");
    await sql`delete from otps where phone = ${phone} or expires_at < now()`;
    await sql`
      insert into otps (phone, code_hash, expires_at)
      values (${phone}, ${hashCode(code)}, now() + interval '10 minutes')
    `;

    return {
      ok: true as const,
      firstName: guests[0].name.split(" ")[0] ?? guests[0].name,
      maskedPhone: `04** *** ${phone.slice(6)}`,
      code,
      expiresInMinutes: OTP_MINUTES,
    };
  });

export const verifyCode = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z.object({ phone: z.string().min(6).max(24), code: z.string().min(4).max(8) }).parse(input),
  )
  .handler(async ({ data }) => {
    const phone = normalizePhone(data.phone);
    const code = data.code.replace(/\D/g, "");
    if (!phone || code.length !== 6) {
      return { ok: false as const, error: "Enter the six-digit code from your message." };
    }
    const sql = await getSql();
    const otps = await sql<{ id: number; code_hash: string; attempts: number }>`
      select id, code_hash, attempts
      from otps
      where phone = ${phone} and expires_at > now()
      order by created_at desc
      limit 1
    `;
    const otp = otps[0];
    if (!otp) {
      return { ok: false as const, error: "That code has expired. Please request a new one." };
    }
    if (otp.attempts >= 5) {
      return { ok: false as const, error: "Too many attempts. Request a new code." };
    }
    if (!hashesMatch(otp.code_hash, hashCode(code))) {
      await sql`update otps set attempts = attempts + 1 where id = ${otp.id}`;
      return { ok: false as const, error: "That code does not match. Please try again." };
    }

    const guests = await sql<GuestRow>`
      select id, name, phone, plus_one_allowed, max_party
      from guests
      where phone = ${phone}
      limit 1
    `;
    const guest = guests[0];
    if (!guest) {
      return { ok: false as const, error: "We could not open this invitation." };
    }

    await sql`delete from otps where phone = ${phone}`;
    await issueSession(guest.id);
    return { ok: true as const, session: await buildSession(guest) };
  });

export const signOut = createServerFn({ method: "POST" }).handler(async () => {
  const { getCookie, setCookie } = await cookies();
  const token = getCookie(COOKIE);
  if (token) {
    const sql = await getSql();
    await sql`delete from guest_sessions where token = ${token}`;
  }
  setCookie(COOKIE, "", {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    maxAge: 0,
  });
  return { ok: true as const };
});

export const submitRsvp = createServerFn({ method: "POST" })
  .validator((input: unknown) =>
    z
      .object({
        attending: z.boolean(),
        partySize: z.number().int().min(1).max(4),
        meal: z.string().max(40).nullable(),
        dietary: z.string().max(240).nullable(),
        note: z.string().max(500).nullable(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const guest = await readGuestFromCookie();
    if (!guest) return { ok: false as const, error: "Please sign in again." };
    if (!(await rsvpOpenNow())) {
      return { ok: false as const, error: "Replies closed on 4 October 2026." };
    }

    const partySize = data.attending
      ? Math.min(Math.max(1, data.partySize), guest.max_party)
      : 0;
    const meal = data.attending ? data.meal : null;

    const sql = await getSql();
    const existing = await sql<{ attending: boolean; party_size: number }>`
      select attending, party_size from rsvps where guest_id = ${guest.id} limit 1
    `;
    const already = existing[0];
    const alreadyCount =
      already && already.attending ? already.party_size : 0;
    const remaining = await remainingSeats(sql);
    if (data.attending && partySize - alreadyCount > remaining) {
      return {
        ok: false as const,
        error: `The chapel holds ${WEDDING.capacity}. Only ${remaining} place${remaining === 1 ? "" : "s"} remain.`,
      };
    }

    await sql`
      insert into rsvps (guest_id, attending, party_size, meal, dietary, note, updated_at)
      values (
        ${guest.id},
        ${data.attending},
        ${partySize},
        ${meal},
        ${data.dietary?.trim() || null},
        ${data.note?.trim() || null},
        now()
      )
      on conflict (guest_id) do update set
        attending = excluded.attending,
        party_size = excluded.party_size,
        meal = excluded.meal,
        dietary = excluded.dietary,
        note = excluded.note,
        updated_at = now()
    `;

    return { ok: true as const, session: await buildSession(guest) };
  });
