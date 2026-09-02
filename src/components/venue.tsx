import { MapPin } from "lucide-react";
import { WEDDING } from "@/lib/wedding";

const OSM = `https://www.openstreetmap.org/export/embed.html?bbox=${WEDDING.mapLng - 0.012}%2C${WEDDING.mapLat - 0.01}%2C${WEDDING.mapLng + 0.012}%2C${WEDDING.mapLat + 0.01}&layer=mapnik&marker=${WEDDING.mapLat}%2C${WEDDING.mapLng}`;

export function Venue() {
  return (
    <section id="venue" className="bg-paper px-5 py-24">
      <div className="mx-auto grid max-w-6xl items-stretch gap-8 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.3em] text-sea uppercase">Kata Noi</p>
          <h2 className="mt-3 font-display text-4xl text-ocean italic sm:text-5xl">
            The Shore Chapel
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
            Glass and white steel, set in a tropical cove above Kata Noi, looking
            over the emerald Andaman. The chapel holds forty — which is exactly
            the size of this day.
          </p>
          <div className="mt-8 overflow-hidden rounded-lg shadow-card">
            <img
              src="/images/chapel-interior.jpg"
              alt="Glass chapel looking out to tropical sea and palms"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
          <div className="mt-6 flex items-start gap-3 text-sm text-ink">
            <MapPin className="mt-0.5 size-4 text-sea" strokeWidth={1.5} />
            <div>
              <p className="font-medium text-ocean">{WEDDING.resort}</p>
              <p className="text-muted">{WEDDING.address}</p>
              <p className="mt-2 text-muted">
                About fifty-five minutes from Phuket International. Stay on the
                Kata Noi side if you can — the path to the chapel is short and
                steep with a view worth the climb.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-lg shadow-card">
            <img
              src="/images/dinner-table.jpg"
              alt="Coastal dinner table at dusk overlooking the Andaman Sea"
              className="aspect-[3/2] w-full object-cover"
            />
          </div>
          <div className="relative min-h-72 overflow-hidden rounded-lg shadow-card">
            <iframe
              title="Map of The Shore Chapel, Katathani Phuket"
              src={OSM}
              className="absolute inset-0 size-full border-0"
              loading="lazy"
            />
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(WEDDING.mapQuery)}`}
            className="text-sm text-ocean underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
