"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { business } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Visit Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,22,27,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight">
            Beyond
          </span>
          <span className="eyebrow text-ink-mute transition-colors group-hover:text-violet">
            Nails &amp; Spa
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors hover:text-violet ${
                pathname === l.href ? "text-violet" : "text-ink-soft"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={business.phoneHref}
            className="rounded-full bg-ink px-5 py-2.5 text-sm tracking-wide text-cream transition-all hover:bg-violet-deep hover:shadow-lg hover:shadow-violet/20"
          >
            Book&nbsp;· {business.phone}
          </a>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-lg px-3 py-3 text-base ${
                    pathname === l.href ? "bg-lilac-soft text-violet-deep" : "text-ink-soft"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={business.phoneHref}
                className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm tracking-wide text-cream"
              >
                Book by phone · {business.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
