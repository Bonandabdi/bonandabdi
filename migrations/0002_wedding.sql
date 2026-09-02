create table if not exists guests (
  id serial primary key,
  name text not null,
  phone text not null unique,
  plus_one_allowed boolean not null default false,
  max_party int not null default 1,
  household text
);

create table if not exists otps (
  id serial primary key,
  phone text not null,
  code_hash text not null,
  expires_at timestamptz not null,
  attempts int not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists guest_sessions (
  token text primary key,
  guest_id int not null references guests(id) on delete cascade,
  expires_at timestamptz not null
);

create table if not exists rsvps (
  id serial primary key,
  guest_id int not null unique references guests(id) on delete cascade,
  attending boolean not null,
  party_size int not null default 1,
  meal text,
  dietary text,
  note text,
  updated_at timestamptz not null default now()
);

create index if not exists otps_phone_idx on otps (phone);
create index if not exists guest_sessions_guest_id_idx on guest_sessions (guest_id);

insert into guests (name, phone, plus_one_allowed, max_party, household) values
  ('Abdisa', '411102853', true, 2, 'couple'),
  ('Bontu', '466618420', true, 2, 'couple'),
  ('Hana Bekele', '491570156', false, 1, 'bridal party'),
  ('Dawit Lemma', '491570157', true, 2, 'groom party'),
  ('Liya Tadesse', '491570158', false, 1, 'bridal party'),
  ('Samuel Mekonnen', '491570159', true, 2, 'groom party'),
  ('Aster Bekele', '491570160', true, 2, 'parents'),
  ('Kedir Bekele', '491570161', true, 2, 'parents'),
  ('Chaltu Lemma', '491570162', true, 2, 'parents'),
  ('Tadesse Lemma', '491570163', true, 2, 'parents'),
  ('Mekdes Hailu', '491570164', true, 2, 'family'),
  ('Yonas Girma', '491570165', true, 2, 'family'),
  ('Sara Ahmed', '491570166', false, 1, 'friends'),
  ('Daniel Bekele', '491570167', true, 2, 'family'),
  ('Helen Tesfaye', '491570168', true, 2, 'friends'),
  ('Ibrahim Ali', '491570169', true, 2, 'friends')
on conflict (phone) do nothing;
