import { reviews } from "@/lib/data";
import Stars from "@/components/Stars";

export default function ReviewsMarquee() {
  const doubled = [...reviews, ...reviews];
  return (
    <div className="marquee overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee-track gap-5 pr-5">
        {doubled.map((r, i) => (
          <figure
            key={i}
            className="w-80 shrink-0 rounded-3xl bg-white p-7 ring-1 ring-ink/5 transition-shadow hover:shadow-xl hover:shadow-violet/10"
          >
            <Stars count={r.stars} />
            <blockquote className="mt-4 text-sm leading-relaxed text-ink-soft">
              “{r.quote}”
            </blockquote>
            <figcaption className="mt-5 flex items-baseline justify-between border-t border-ink/8 pt-4">
              <span className="text-sm font-medium">{r.name}</span>
              <span className="text-xs tracking-wide text-ink-mute">{r.service}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
