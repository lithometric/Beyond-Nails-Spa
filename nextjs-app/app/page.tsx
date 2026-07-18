import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import CTASection from "@/components/CTASection";
import { business, galleryItems, serviceMenu } from "@/lib/data";

const highlights = [
  {
    title: "Manicures & Pedicures",
    description:
      "Classic or gel, always meticulous — clean shaping, cuticle care, and a finish that lasts.",
    href: "/services",
  },
  {
    title: "Acrylics & Nail Art",
    description:
      "Sculpted sets in any shape, plus hand-painted designs — French, chrome, ombré, and more.",
    href: "/services",
  },
  {
    title: "Lashes & Brows",
    description:
      "Feather-light lash extensions and brow tinting to finish the look, done with a gentle hand.",
    href: "/services",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow text-violet">What we do</p>
          <h2 className="font-display mt-4 max-w-xl text-4xl font-medium leading-tight sm:text-5xl">
            Everything for your hands, feet &amp; face
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.12}>
              <Link
                href={h.href}
                className="group block h-full rounded-3xl bg-white p-8 ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-violet/10"
              >
                <span className="font-display text-lg text-lilac transition-colors group-hover:text-violet">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-3 text-2xl font-medium">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-mute">{h.description}</p>
                <span className="mt-6 inline-block text-xs tracking-[0.2em] uppercase text-violet opacity-0 transition-opacity group-hover:opacity-100">
                  See the menu →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-lilac-soft/60">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
          <Reveal>
            <p className="eyebrow text-violet">The Beyond experience</p>
            <h2 className="font-display mt-4 text-4xl font-medium leading-tight sm:text-5xl">
              Unhurried. Spotless. <em className="text-violet-deep">Yours.</em>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
              We&apos;re a small neighborhood studio, and we like it that way.
              Every appointment gets the time it deserves — sanitized tools,
              gentle techniques, and techs who remember your name and your
              favorite shade.
            </p>
            <div className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-ink/10 pt-8">
              <div>
                <p className="font-display text-3xl font-semibold text-violet-deep">
                  {business.rating}★
                </p>
                <p className="mt-1 text-xs tracking-wide text-ink-mute">Google rating</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-violet-deep">
                  {business.reviewCount}+
                </p>
                <p className="mt-1 text-xs tracking-wide text-ink-mute">Reviews</p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-violet-deep">6</p>
                <p className="mt-1 text-xs tracking-wide text-ink-mute">Days a week</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {galleryItems.slice(0, 4).map((item, i) => (
                <div
                  key={item.title}
                  className={`overflow-hidden rounded-3xl ring-1 ring-ink/5 ${
                    i % 2 === 1 ? "mt-8" : ""
                  }`}
                >
                  <div
                    className="h-44 transition-transform duration-700 hover:scale-105 sm:h-52"
                    style={{ background: item.gradient }}
                  />
                  <div className="bg-white px-4 py-3">
                    <p className="font-display text-sm font-medium">{item.title}</p>
                    <p className="text-[11px] tracking-wide text-ink-mute">{item.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-violet">Kind words</p>
              <h2 className="font-display mt-4 text-4xl font-medium leading-tight sm:text-5xl">
                From our Google reviews
              </h2>
            </div>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-violet transition-colors hover:text-violet-deep"
            >
              Read all {business.reviewCount}+ reviews →
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="mt-12">
          <ReviewsMarquee />
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 md:pb-28">
        <Reveal>
          <div className="grid gap-10 rounded-[2.5rem] bg-blush-soft p-10 ring-1 ring-blush/30 md:grid-cols-2 md:p-14">
            <div>
              <p className="eyebrow text-violet">Service menu</p>
              <h2 className="font-display mt-4 text-3xl font-medium leading-tight sm:text-4xl">
                Simple menu, honest prices
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
                From a quick classic mani to a full custom set — see everything
                we offer and what it costs before you come in.
              </p>
              <Link
                href="/services"
                className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 text-sm tracking-wide text-cream transition-all hover:bg-violet-deep"
              >
                Browse the full menu
              </Link>
            </div>
            <ul className="space-y-4 self-center">
              {serviceMenu.flatMap((c) => c.services.filter((s) => s.popular)).map((s) => (
                <li
                  key={s.name}
                  className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-4"
                >
                  <span className="font-display text-lg">{s.name}</span>
                  <span className="text-sm text-violet-deep">{s.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
