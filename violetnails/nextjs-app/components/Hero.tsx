"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { business } from "@/lib/data";
import Stars from "@/components/Stars";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 * i, ease: [0.21, 0.65, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="animate-float-slow absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-lilac/40 blur-3xl" />
        <div className="animate-float-slower absolute bottom-[-20%] left-[-8%] h-[24rem] w-[24rem] rounded-full bg-blush/40 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full bg-shell blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-36 sm:px-8 md:grid-cols-[1.2fr_1fr] md:items-center md:pb-28 md:pt-44">
        <div>
          <motion.p
            className="eyebrow text-violet"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Union, NJ · Nail Atelier
          </motion.p>
          <motion.h1
            className="font-display mt-5 text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Nails, beyond
            <br />
            <em className="text-violet-deep">the ordinary.</em>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Manicures, pedicures, custom nail art, lashes, and brows — done with
            care in a calm, spotless studio on Stuyvesant Ave.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <a
              href={business.phoneHref}
              className="rounded-full bg-ink px-7 py-3.5 text-sm tracking-wide text-cream transition-all hover:bg-violet-deep hover:shadow-xl hover:shadow-violet/25"
            >
              Book an appointment
            </a>
            <Link
              href="/services"
              className="rounded-full border border-ink/15 px-7 py-3.5 text-sm tracking-wide text-ink transition-all hover:border-violet hover:text-violet"
            >
              View services
            </Link>
          </motion.div>
          <motion.p
            className="mt-6 text-xs tracking-wide text-ink-mute"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            Walk-ins welcome · Open Mon–Sat 9:30–7
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.65, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-2xl shadow-violet/15 ring-1 ring-ink/5">
            <div
              className="h-52 rounded-3xl"
              style={{
                background:
                  "linear-gradient(145deg, #efeaf6 0%, #d8cbe8 40%, #c3aed9 70%, #e8cdd9 100%)",
              }}
              aria-hidden
            />
            <div className="mt-6 flex items-start justify-between">
              <div>
                <p className="font-display text-xl font-semibold">Loved on Google</p>
                <p className="mt-1 text-xs text-ink-mute">
                  {business.reviewCount}+ reviews from Union neighbors
                </p>
              </div>
              <div className="text-right">
                <p className="font-display text-3xl font-semibold text-violet-deep">
                  {business.rating}
                </p>
                <Stars count={4} className="text-gold" />
              </div>
            </div>
            <p className="mt-4 border-t border-ink/8 pt-4 text-sm italic leading-relaxed text-ink-soft">
              “I absolutely love this place! They have the best pedicures.”
            </p>
          </div>

          <div
            className="absolute -left-6 -top-6 -z-10 h-full w-full rounded-[2rem] bg-blush-soft ring-1 ring-blush/40"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
