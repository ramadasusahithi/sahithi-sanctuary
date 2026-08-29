import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  te,
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  te?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Reveal className="text-center">
      <div className="mx-auto max-w-3xl">
        {eyebrow ? (
          <p
            className={`text-xs font-semibold uppercase tracking-[0.35em] ${
              tone === "light" ? "text-gold" : "text-bronze"
            }`}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={`mt-3 font-display text-3xl font-semibold uppercase tracking-[0.14em] sm:text-4xl ${
            tone === "light" ? "text-ivory" : "text-maroon-deep"
          }`}
        >
          {title}
        </h2>
        <div className="gold-rule mx-auto mt-5 w-40" />
        {te ? (
          <p
            lang="te"
            className={`mt-5 text-lg ${tone === "light" ? "text-ivory/85" : "text-brown"}`}
          >
            {te}
          </p>
        ) : null}
      </div>
    </Reveal>
  );
}
