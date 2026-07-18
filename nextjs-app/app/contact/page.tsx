import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hours, Location & Booking",
  description:
    "Visit Beyond Nails & Spa at 1040A Stuyvesant Ave, Union, NJ 07083. Open Mon–Sat 9:30 AM–7 PM. Call (908) 810-8838 to book — walk-ins welcome.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-32 right-[-12%] h-96 w-96 rounded-full bg-lilac/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-36 sm:px-8 md:pt-44">
          <Reveal>
            <p className="eyebrow text-violet">Visit us</p>
            <h1 className="font-display mt-4 max-w-2xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              Come say hi.
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              We&apos;re on Stuyvesant Ave in the heart of Union. Call ahead to
              book, or walk in — we&apos;ll get you seated.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-3xl bg-white p-8 ring-1 ring-ink/5">
                <p className="eyebrow text-ink-mute">Book by phone</p>
                <a
                  href={business.phoneHref}
                  className="font-display mt-3 block text-3xl font-medium text-violet-deep transition-colors hover:text-violet"
                >
                  {business.phone}
                </a>
                <p className="mt-3 text-sm leading-relaxed text-ink-mute">
                  Fastest way to lock in your time — especially Saturdays.
                </p>
                <a
                  href={business.phoneHref}
                  className="mt-6 inline-block rounded-full bg-ink px-7 py-3.5 text-sm tracking-wide text-cream transition-all hover:bg-violet-deep"
                >
                  Call now
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-white p-8 ring-1 ring-ink/5">
                <p className="eyebrow text-ink-mute">Hours</p>
                <ul className="mt-4 space-y-3 text-sm">
                  {business.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-6">
                      <span className="text-ink-soft">{h.days}</span>
                      <span className={h.time === "Closed" ? "text-ink-mute" : "font-medium"}>
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-3xl bg-white p-8 ring-1 ring-ink/5">
                <p className="eyebrow text-ink-mute">Address</p>
                <address className="mt-3 text-sm not-italic leading-relaxed text-ink-soft">
                  {business.address.street}
                  <br />
                  {business.address.city}, {business.address.state} {business.address.zip}
                </address>
                <a
                  href={business.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-violet transition-colors hover:text-violet-deep"
                >
                  Open in Google Maps →
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="min-h-[28rem]">
            <iframe
              title="Map to Beyond Nails & Spa, 1040A Stuyvesant Ave, Union NJ"
              src="https://www.google.com/maps?q=Beyond+Nails+%26+Spa,+1040A+Stuyvesant+Ave,+Union,+NJ+07083&output=embed"
              className="h-full min-h-[28rem] w-full rounded-3xl ring-1 ring-ink/5"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
