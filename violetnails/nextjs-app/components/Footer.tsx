import Link from "next/link";
import { business } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink/8 bg-shell">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">Beyond Nails &amp; Spa</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-mute">
            A neighborhood nail atelier in Union, NJ — manicures, pedicures,
            custom nail art, lashes, and brows.
          </p>
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm text-violet transition-colors hover:text-violet-deep"
          >
            Instagram {business.instagramHandle}
          </a>
        </div>

        <div>
          <p className="eyebrow mb-4 text-ink-mute">Visit</p>
          <address className="text-sm not-italic leading-relaxed text-ink-soft">
            {business.address.street}
            <br />
            {business.address.city}, {business.address.state} {business.address.zip}
          </address>
          <a
            href={business.phoneHref}
            className="mt-3 inline-block text-sm text-violet transition-colors hover:text-violet-deep"
          >
            {business.phone}
          </a>
          <ul className="mt-4 space-y-1 text-sm text-ink-soft">
            {business.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-6 max-w-xs">
                <span>{h.days}</span>
                <span className={h.time === "Closed" ? "text-ink-mute" : ""}>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4 text-ink-mute">Explore</p>
          <ul className="space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/services" className="transition-colors hover:text-violet">
                Service Menu
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="transition-colors hover:text-violet">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition-colors hover:text-violet">
                Hours &amp; Directions
              </Link>
            </li>
            <li>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-violet"
              >
                Reviews on Google · {business.rating}★
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink/8 py-5 text-center text-xs tracking-wide text-ink-mute">
        © {new Date().getFullYear()} Beyond Nails &amp; Spa · {business.address.city},{" "}
        {business.address.state} · Walk-ins welcome
      </div>
    </footer>
  );
}
