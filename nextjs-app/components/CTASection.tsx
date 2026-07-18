import { business } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blush/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5 py-20 text-center sm:px-8 md:py-28">
        <Reveal>
          <p className="eyebrow text-lilac">Ready when you are</p>
          <h2 className="font-display mx-auto mt-5 max-w-2xl text-4xl font-medium leading-tight sm:text-5xl">
            Your next set is one call away.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-cream/70">
            Call to book, or just walk in — we&apos;ll take care of the rest.
            Open Monday through Saturday, 9:30 to 7.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={business.phoneHref}
              className="rounded-full bg-cream px-8 py-4 text-sm tracking-wide text-ink transition-all hover:bg-lilac hover:shadow-xl hover:shadow-lilac/20"
            >
              Call {business.phone}
            </a>
            <a
              href={business.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/25 px-8 py-4 text-sm tracking-wide text-cream transition-all hover:border-lilac hover:text-lilac"
            >
              Get directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
