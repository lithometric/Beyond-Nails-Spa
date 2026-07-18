export default function Stars({
  count = 5,
  className = "text-gold",
}: {
  count?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex gap-0.5 ${className}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l2.94 6.36 6.96.8-5.16 4.73 1.39 6.86L12 17.27l-6.13 3.48 1.39-6.86L2.1 9.16l6.96-.8L12 2z" />
        </svg>
      ))}
    </span>
  );
}
