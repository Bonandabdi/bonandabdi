import { n as createServerFn, r as TSS_SERVER_FUNCTION } from "./ssr.mjs";
import { a as string, i as object, r as number, t as boolean } from "../_libs/zod.mjs";
import { a as normalizePhone, i as WEDDING } from "./wedding-DG-qKm05.mjs";
import { createHash, randomBytes, randomInt, timingSafeEqual } from "node:crypto";
//#region node_modules/.nitro/vite/services/ssr/assets/wedding-api-Dueo12vh.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var _0002_wedding_default = "create table if not exists guests (\n  id serial primary key,\n  name text not null,\n  phone text not null unique,\n  plus_one_allowed boolean not null default false,\n  max_party int not null default 1,\n  household text\n);\n\ncreate table if not exists otps (\n  id serial primary key,\n  phone text not null,\n  code_hash text not null,\n  expires_at timestamptz not null,\n  attempts int not null default 0,\n  created_at timestamptz not null default now()\n);\n\ncreate table if not exists guest_sessions (\n  token text primary key,\n  guest_id int not null references guests(id) on delete cascade,\n  expires_at timestamptz not null\n);\n\ncreate table if not exists rsvps (\n  id serial primary key,\n  guest_id int not null unique references guests(id) on delete cascade,\n  attending boolean not null,\n  party_size int not null default 1,\n  meal text,\n  dietary text,\n  note text,\n  updated_at timestamptz not null default now()\n);\n\ncreate index if not exists otps_phone_idx on otps (phone);\ncreate index if not exists guest_sessions_guest_id_idx on guest_sessions (guest_id);\n\ninsert into guests (name, phone, plus_one_allowed, max_party, household) values\n  ('Abdisa', '411102853', true, 2, 'couple'),\n  ('Bontu', '466618420', true, 2, 'couple'),\n  ('Hana Bekele', '491570156', false, 1, 'bridal party'),\n  ('Dawit Lemma', '491570157', true, 2, 'groom party'),\n  ('Liya Tadesse', '491570158', false, 1, 'bridal party'),\n  ('Samuel Mekonnen', '491570159', true, 2, 'groom party'),\n  ('Aster Bekele', '491570160', true, 2, 'parents'),\n  ('Kedir Bekele', '491570161', true, 2, 'parents'),\n  ('Chaltu Lemma', '491570162', true, 2, 'parents'),\n  ('Tadesse Lemma', '491570163', true, 2, 'parents'),\n  ('Mekdes Hailu', '491570164', true, 2, 'family'),\n  ('Yonas Girma', '491570165', true, 2, 'family'),\n  ('Sara Ahmed', '491570166', false, 1, 'friends'),\n  ('Daniel Bekele', '491570167', true, 2, 'family'),\n  ('Helen Tesfaye', '491570168', true, 2, 'friends'),\n  ('Ibrahim Ali', '491570169', true, 2, 'friends')\non conflict (phone) do nothing;\n";
/**
* Migration bookkeeping shared by the two appliers — `scripts/migrate.mjs`
* (deploy, `readdir`) and `src/lib/db.ts` (PGLite preview, `import.meta.glob`).
*
* Applied files are keyed by BASENAME, so the same file applies once no matter
* which directory it is globbed from. That is what makes the auth schema safe to
* copy from `migrations/auth/` into `migrations/` when an app turns sign-in on:
* a database that already has `0001_auth.sql` will not re-run it.
*
* Neither applier descends into subdirectories, so `migrations/auth/*.sql` is
* out of scope for both until it is copied up.
*/
/**
* The `_migrations` key for a migration path (or bare filename).
* @param {string} path
* @returns {string}
*/
function migrationName(path) {
	return path.split("/").pop() ?? path;
}
/**
* @param {string} path
* @returns {boolean}
*/
function isMigrationFile(path) {
	return path.endsWith(".sql");
}
/**
* Migrations in `paths` that are not yet in `applied`, in apply order.
* Non-`.sql` entries (a `readdir` also yields `migrations/auth/`) are dropped.
* @param {Iterable<string>} paths
* @param {Iterable<string>} applied
* @returns {Array<{ name: string, path: string }>}
*/
function pendingMigrations(paths, applied) {
	const done = new Set(applied);
	return [...paths].filter(isMigrationFile).map((path) => ({
		name: migrationName(path),
		path
	})).sort((a, b) => a.name.localeCompare(b.name)).filter(({ name }) => !done.has(name));
}
var rawDatabaseUrl = typeof process !== "undefined" ? process.env.DATABASE_URL : void 0;
var databaseUrl = rawDatabaseUrl && rawDatabaseUrl.trim() ? rawDatabaseUrl : void 0;
/**
* Active backend: real **Neon** when `DATABASE_URL` is set (deployed / configured
* sandbox), otherwise a local embedded **PGLite** (Postgres compiled to WASM) so
* the app has a working database even with nothing configured — the live preview
* included. Swap in Neon later by just setting `DATABASE_URL`; no code changes.
*/
var dbSource = databaseUrl ? "neon" : "pglite";
/**
* Init state lives on globalThis as promises: dev HMR creates new instances of
* this module, and two instances racing module-level state would open a second
* pool or run two concurrent PGLite migration passes (whose duplicate
* `_migrations` insert rejects — and would get memoized, poisoning every later
* `getSql()`). A failed init clears its slot so the next call retries.
*/
var globalRef = globalThis;
/**
* Result-type parity: Postgres sends every value as text plus a type OID — the
* JS value is the DRIVER's parsing choice, and pg and PGLite disagree (pg:
* int8 -> string, date -> local-midnight Date; PGLite: int8 -> BigInt, which
* JSON.stringify rejects, date -> UTC Date). Normalize both so preview and
* production return identical, JSON-safe shapes:
*   int8/bigint (incl. count(*)) -> number (past 2^53 loses precision — cast
*                                   `::text` if you ever need huge integers)
*   date                         -> 'YYYY-MM-DD' string
*   interval                     -> Postgres interval text
* numeric already comes back as a string on both (arbitrary precision).
*/
var OID_INT8 = 20;
var OID_DATE = 1082;
var OID_INTERVAL = 1186;
var identity = (v) => v;
/** Wrap a query runner in the tagged-template + `.query()` `Sql` surface. */
function toSql(run) {
	const sql = (async (strings, ...values) => {
		let text = strings[0];
		for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
		return run(text, values);
	});
	sql.query = (text, params = []) => run(text, params);
	return sql;
}
function createNeonSql() {
	globalRef.__pgSqlPromise__ ??= (async () => {
		const { Pool, types } = await import("../_libs/pg.mjs").then((n) => n.t);
		types.setTypeParser(OID_INT8, Number);
		types.setTypeParser(OID_DATE, identity);
		types.setTypeParser(OID_INTERVAL, identity);
		const pool = new Pool({ connectionString: databaseUrl });
		return toSql(async (text, params) => {
			return (await pool.query(text, params)).rows;
		});
	})().catch((err) => {
		globalRef.__pgSqlPromise__ = void 0;
		throw err;
	});
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	globalRef.__pgliteInstance__ ??= (async () => {
		const { PGlite } = await import("../_libs/electric-sql__pglite.mjs").then((n) => n.t);
		const pg = new PGlite({ parsers: {
			[OID_INT8]: Number,
			[OID_DATE]: identity,
			[OID_INTERVAL]: identity
		} });
		await pg.waitReady;
		await pg.exec("create table if not exists _migrations (name text primary key, applied_at timestamptz not null default now())");
		return pg;
	})().catch((err) => {
		globalRef.__pgliteInstance__ = void 0;
		throw err;
	});
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({ "/migrations/0002_wedding.sql": _0002_wedding_default });
		const done = (await pg.query("select name from _migrations")).rows.map((r) => r.name);
		for (const { name, path } of pendingMigrations(Object.keys(migrations), done)) await pg.transaction(async (tx) => {
			await tx.exec(migrations[path]);
			await tx.query("insert into _migrations (name) values ($1)", [name]);
		});
	};
	const pass = (globalRef.__pgliteMigrateChain__ ?? Promise.resolve()).catch(() => void 0).then(migrate);
	globalRef.__pgliteMigrateChain__ = pass;
	await pass;
	return toSql(async (text, params) => {
		return (await pg.query(text, params)).rows;
	});
}
var sqlPromise = null;
async function createSql() {
	if (typeof window !== "undefined") throw new Error("@/lib/db is server-only — call getSql() from a createServerFn handler or a server route loader, never from client code.");
	return dbSource === "neon" ? createNeonSql() : createPgliteSql();
}
/**
* Get the shared, **server-only** SQL client. Neon when `DATABASE_URL` is set,
* otherwise the local PGLite fallback. Memoized — safe to call per request.
*
* Schema comes from `migrations/*.sql`, auto-applied before the first query on
* both backends — define tables there, never inline in server functions.
*/
function getSql() {
	sqlPromise ??= createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	});
	return sqlPromise;
}
/**
* Finish DB bootstrap before the server handles traffic.
*
* - **PGLite** (preview / no `DATABASE_URL`): open the in-memory DB and apply
*   `migrations/*.sql`. Idempotent — concurrent callers share one promise.
* - **Neon**: no-op (pool is created lazily on first query).
*
* Vite `configureServer` awaits this at dev startup; production imports of this
* module kick it off immediately (see bottom of file).
*/
function ensureDbReady() {
	if (dbSource !== "pglite") return Promise.resolve();
	return getSql().then(() => void 0);
}
var globalBoot = globalThis;
if (typeof window === "undefined" && dbSource === "pglite") globalBoot.__pgBootstrapPromise__ ??= ensureDbReady().catch((err) => {
	globalBoot.__pgBootstrapPromise__ = void 0;
	console.error("[db] PGLite bootstrap failed:", err);
	throw err;
});
var COOKIE = "shore_session";
var OTP_MINUTES = 10;
function hashCode(code) {
	return createHash("sha256").update(code).digest("hex");
}
function hashesMatch(a, b) {
	const left = Buffer.from(a);
	const right = Buffer.from(b);
	if (left.length !== right.length) return false;
	return timingSafeEqual(left, right);
}
function toGuest(row) {
	return {
		id: row.id,
		name: row.name,
		phone: row.phone,
		plusOneAllowed: Boolean(row.plus_one_allowed),
		maxParty: row.max_party
	};
}
function toRsvp(row) {
	if (!row) return null;
	return {
		attending: Boolean(row.attending),
		partySize: row.party_size,
		meal: row.meal,
		dietary: row.dietary,
		note: row.note
	};
}
async function remainingSeats(sql) {
	const rows = await sql`
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
	return import("./ssr.mjs").then((n) => n.o).then((n) => n.t);
}
async function readGuestFromCookie() {
	const { getCookie } = await cookies();
	const token = getCookie(COOKIE);
	if (!token) return null;
	return (await (await getSql())`
    select g.id, g.name, g.phone, g.plus_one_allowed, g.max_party
    from guest_sessions s
    join guests g on g.id = s.guest_id
    where s.token = ${token} and s.expires_at > now()
    limit 1
  `)[0] ?? null;
}
async function issueSession(guestId) {
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
		maxAge: 2592e3
	});
}
async function buildSession(guest) {
	const sql = await getSql();
	const rsvpRows = await sql`
    select attending, party_size, meal, dietary, note, updated_at::text as updated_at
    from rsvps
    where guest_id = ${guest.id}
    limit 1
  `;
	return {
		guest: toGuest(guest),
		rsvp: toRsvp(rsvpRows[0]),
		remaining: await remainingSeats(sql),
		rsvpOpen: await rsvpOpenNow()
	};
}
var getSession_createServerFn_handler = createServerRpc({
	id: "419b3417292f769e88b6f8a1d0f6935fe6d2bc2fb07a2711f84458a2f8a84699",
	name: "getSession",
	filename: "src/lib/wedding-api.ts"
}, (opts) => getSession.__executeServer(opts));
var getSession = createServerFn({ method: "GET" }).handler(getSession_createServerFn_handler, async () => {
	const guest = await readGuestFromCookie();
	if (!guest) return { ok: false };
	return {
		ok: true,
		session: await buildSession(guest)
	};
});
var requestCode_createServerFn_handler = createServerRpc({
	id: "3ee1a5f61ddaf1ad512b048bf7ec72ba019b2f4a6f9be16a1a1255c353ed8a4d",
	name: "requestCode",
	filename: "src/lib/wedding-api.ts"
}, (opts) => requestCode.__executeServer(opts));
var requestCode = createServerFn({ method: "POST" }).validator((input) => object({ phone: string().min(6).max(24) }).parse(input)).handler(requestCode_createServerFn_handler, async ({ data }) => {
	const phone = normalizePhone(data.phone);
	if (!phone) return {
		ok: false,
		error: "Please enter an Australian mobile number."
	};
	const sql = await getSql();
	const guests = await sql`
      select id, name, phone, plus_one_allowed, max_party
      from guests
      where phone = ${phone}
      limit 1
    `;
	if (!guests[0]) return {
		ok: false,
		error: "That number is not on the invitation list. Please contact Abdisa on 0411 102 853 or Bontu on 0466 618 420."
	};
	if (((await sql`
      select count(*)::int as count
      from otps
      where phone = ${phone} and created_at > now() - interval '15 minutes'
    `)[0]?.count ?? 0) >= 5) return {
		ok: false,
		error: "Please wait a few minutes before requesting another code."
	};
	const code = String(randomInt(0, 1e6)).padStart(6, "0");
	await sql`delete from otps where phone = ${phone} or expires_at < now()`;
	await sql`
      insert into otps (phone, code_hash, expires_at)
      values (${phone}, ${hashCode(code)}, now() + interval '10 minutes')
    `;
	return {
		ok: true,
		firstName: guests[0].name.split(" ")[0] ?? guests[0].name,
		maskedPhone: `04** *** ${phone.slice(6)}`,
		code,
		expiresInMinutes: OTP_MINUTES
	};
});
var verifyCode_createServerFn_handler = createServerRpc({
	id: "f2eb65b68cbb84a213f06b751c55e14c46596b5991577ec979b73f9cbfb45c45",
	name: "verifyCode",
	filename: "src/lib/wedding-api.ts"
}, (opts) => verifyCode.__executeServer(opts));
var verifyCode = createServerFn({ method: "POST" }).validator((input) => object({
	phone: string().min(6).max(24),
	code: string().min(4).max(8)
}).parse(input)).handler(verifyCode_createServerFn_handler, async ({ data }) => {
	const phone = normalizePhone(data.phone);
	const code = data.code.replace(/\D/g, "");
	if (!phone || code.length !== 6) return {
		ok: false,
		error: "Enter the six-digit code from your message."
	};
	const sql = await getSql();
	const otp = (await sql`
      select id, code_hash, attempts
      from otps
      where phone = ${phone} and expires_at > now()
      order by created_at desc
      limit 1
    `)[0];
	if (!otp) return {
		ok: false,
		error: "That code has expired. Please request a new one."
	};
	if (otp.attempts >= 5) return {
		ok: false,
		error: "Too many attempts. Request a new code."
	};
	if (!hashesMatch(otp.code_hash, hashCode(code))) {
		await sql`update otps set attempts = attempts + 1 where id = ${otp.id}`;
		return {
			ok: false,
			error: "That code does not match. Please try again."
		};
	}
	const guest = (await sql`
      select id, name, phone, plus_one_allowed, max_party
      from guests
      where phone = ${phone}
      limit 1
    `)[0];
	if (!guest) return {
		ok: false,
		error: "We could not open this invitation."
	};
	await sql`delete from otps where phone = ${phone}`;
	await issueSession(guest.id);
	return {
		ok: true,
		session: await buildSession(guest)
	};
});
var signOut_createServerFn_handler = createServerRpc({
	id: "bcab5772be53705b345c182e449b39bc812702ae691c9682e380c40087621ca9",
	name: "signOut",
	filename: "src/lib/wedding-api.ts"
}, (opts) => signOut.__executeServer(opts));
var signOut = createServerFn({ method: "POST" }).handler(signOut_createServerFn_handler, async () => {
	const { getCookie, setCookie } = await cookies();
	const token = getCookie(COOKIE);
	if (token) await (await getSql())`delete from guest_sessions where token = ${token}`;
	setCookie(COOKIE, "", {
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		secure: true,
		maxAge: 0
	});
	return { ok: true };
});
var submitRsvp_createServerFn_handler = createServerRpc({
	id: "cad603fbdafdc6a051a1dc1626656d1cc230f2aa95f119a7fe3ac86fe9705c42",
	name: "submitRsvp",
	filename: "src/lib/wedding-api.ts"
}, (opts) => submitRsvp.__executeServer(opts));
var submitRsvp = createServerFn({ method: "POST" }).validator((input) => object({
	attending: boolean(),
	partySize: number().int().min(1).max(4),
	meal: string().max(40).nullable(),
	dietary: string().max(240).nullable(),
	note: string().max(500).nullable()
}).parse(input)).handler(submitRsvp_createServerFn_handler, async ({ data }) => {
	const guest = await readGuestFromCookie();
	if (!guest) return {
		ok: false,
		error: "Please sign in again."
	};
	if (!await rsvpOpenNow()) return {
		ok: false,
		error: "Replies closed on 4 October 2026."
	};
	const partySize = data.attending ? Math.min(Math.max(1, data.partySize), guest.max_party) : 0;
	const meal = data.attending ? data.meal : null;
	const sql = await getSql();
	const already = (await sql`
      select attending, party_size from rsvps where guest_id = ${guest.id} limit 1
    `)[0];
	const alreadyCount = already && already.attending ? already.party_size : 0;
	const remaining = await remainingSeats(sql);
	if (data.attending && partySize - alreadyCount > remaining) return {
		ok: false,
		error: `The chapel holds ${WEDDING.capacity}. Only ${remaining} place${remaining === 1 ? "" : "s"} remain.`
	};
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
	return {
		ok: true,
		session: await buildSession(guest)
	};
});
//#endregion
export { getSession_createServerFn_handler, requestCode_createServerFn_handler, signOut_createServerFn_handler, submitRsvp_createServerFn_handler, verifyCode_createServerFn_handler };
