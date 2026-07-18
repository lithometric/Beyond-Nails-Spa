import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { business, serviceMenu } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services & Prices",
  description:
    "Full service menu at Beyond Nails & Spa in Union, NJ — manicures, pedicures, gel, acrylic sets, custom nail art, lash extensions, brows & waxing. Call (908) 810-8838 to book.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-32 right-[-12%] h-96 w-96 rounded-full bg-lilac/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-36 sm:px-8 md:pt-44">
          <Reveal>
            <p className="eyebrow text-violet">Service menu</p>
            <h1 className="font-display mt-4 max-w-2xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              Take your pick.
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              Every service includes careful prep and sanitized tools. Prices
              are starting points — your tech will confirm before beginning.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-20 px-5 pb-24 sm:px-8">
        {serviceMenu.map((category, ci) => (
          <Reveal key={category.title}>
            <div className="grid gap-8 md:grid-cols-[1fr_1.6fr]">
              <div>
                <span className="font-display text-lg text-lilac">0{ci + 1}</span>
                <h2 className="font-display mt-2 text-3xl font-medium leading-tight sm:text-4xl">
                  {category.title}
                </h2>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-mute">
                  {category.blurb}
                </p>
              </div>
              <ul className="space-y-4">
                {category.services.map((s) => (
                  <li
                    key={s.name}
                    className="group rounded-3xl bg-white p-6 ring-1 ring-ink/5 transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-violet/10 sm:p-7"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-xl font-medium">
                        {s.name}
                        {s.popular && (
                          <span className="ml-3 rounded-full bg-lilac-soft px-3 py-1 align-middle text-[10px] font-sans tracking-[0.18em] uppercase text-violet-deep">
                            Popular
                          </span>
                        )}
                      </h3>
                      <span className="shrink-0 text-sm font-medium text-violet-deep">
                        {s.price}
                      </span>
                    </div>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-mute">
                      {s.description}
                    </p>
                    {s.duration && (
                      <p className="mt-3 text-[11px] tracking-[0.18em] uppercase text-ink-mute/70">
                        ~{s.duration}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <p className="mx-auto max-w-lg text-center text-sm leading-relaxed text-ink-mute">
            Not sure what to book? Call us at{" "}
            <a href={business.phoneHref} className="text-violet underline-offset-4 hover:underline">
              {business.phone}
            </a>{" "}
            and we&apos;ll help you choose — or just walk in and browse the shade wall.
          </p>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
