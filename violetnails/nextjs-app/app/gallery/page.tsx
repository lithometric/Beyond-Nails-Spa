import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { business, galleryItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Nail inspiration from Beyond Nails & Spa in Union, NJ — gel manicures, French tips, chrome, ombré, and custom acrylic sets. Follow us on Instagram @beyond_nailsbymay.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute -top-32 left-[-12%] h-96 w-96 rounded-full bg-blush/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-36 sm:px-8 md:pt-44">
          <Reveal>
            <p className="eyebrow text-violet">The Beyond edit</p>
            <h1 className="font-display mt-4 max-w-2xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
              A little inspiration.
            </h1>
            <p className="mt-5 max-w-md leading-relaxed text-ink-soft">
              Signature shades and sets our clients keep coming back for. For
              fresh work every week, follow{" "}
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet underline-offset-4 hover:underline"
              >
                {business.instagramHandle}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {galleryItems.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.08}>
              <figure className="group overflow-hidden rounded-3xl bg-white ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-violet/10">
                <div className="relative h-52 overflow-hidden sm:h-64">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={`${item.title} — ${item.tag} at Beyond Nails & Spa`}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                      style={{ background: item.gradient }}
                    />
                  )}
                </div>
                <figcaption className="px-5 py-4">
                  <p className="font-display text-base font-medium">{item.title}</p>
                  <p className="mt-0.5 text-[11px] tracking-[0.18em] uppercase text-ink-mute">
                    {item.tag}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-ink/15 px-8 py-4 text-sm tracking-wide transition-all hover:border-violet hover:text-violet"
          >
            See more on Instagram
          </a>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
