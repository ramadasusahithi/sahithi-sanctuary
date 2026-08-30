import { Link } from "@tanstack/react-router";
import { logoUrl, org, publications } from "@/data/site";

const teluguGlyphs = ["అ", "క", "మ", "ద", "సా", "హి", "త్య", "ర"];

function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {Array.from({ length: 22 }).map((_, i) => (
        <span
          key={i}
          className="animate-drift absolute block rounded-full bg-gold"
          style={{
            left: `${(i * 37) % 100}%`,
            bottom: `${(i * 13) % 60}%`,
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            animationDuration: `${9 + (i % 7)}s`,
            animationDelay: `${i * 0.7}s`,
            filter: "blur(0.4px)",
          }}
        />
      ))}
      {teluguGlyphs.map((g, i) => (
        <span
          key={g}
          lang="te"
          className="animate-float-slow absolute font-telugu text-gold/25 select-none"
          style={{
            left: `${8 + i * 11}%`,
            top: `${18 + ((i * 23) % 60)}%`,
            fontSize: `${1.6 + (i % 4) * 0.7}rem`,
            animationDelay: `${i * 1.1}s`,
          }}
        >
          {g}
        </span>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="surface-maroon relative isolate overflow-hidden">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 72% 28%, oklch(0.79 0.14 84 / 0.28), transparent 55%), radial-gradient(circle at 12% 85%, oklch(0.4 0.15 20 / 0.7), transparent 60%)",
        }}
        aria-hidden
      />
      <Particles />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-4 pt-28 pb-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pt-32">
        <div>
          <div className="glass-panel animate-sheen inline-flex items-center gap-3 rounded-full px-4 py-2"
            style={{
              backgroundImage:
                "linear-gradient(90deg, oklch(0.79 0.14 84 / 0.18), oklch(0.92 0.09 92 / 0.35), oklch(0.79 0.14 84 / 0.18))",
            }}
          >
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span lang="te" className="text-sm font-semibold text-gold-soft">
              {org.isoTe}
            </span>
          </div>

          <h1 className="mt-7 font-display text-4xl leading-[1.05] font-semibold tracking-[0.06em] text-ivory uppercase sm:text-5xl lg:text-6xl">
            {org.nameEn}
          </h1>
          <p
            lang="te"
            className="text-gold-gradient mt-4 font-telugu text-2xl font-semibold sm:text-4xl"
          >
            {org.nameTe}
          </p>

          <div className="gold-rule mt-8 w-56" />

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.7rem] font-semibold tracking-[0.3em] text-ivory/70 uppercase">
            <li>Literature</li>
            <li>Culture</li>
            <li>Art</li>
            <li>Service</li>
            <li>Recognition</li>
          </ul>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="btn-premium rounded-full px-7 py-3.5 text-xs font-bold tracking-[0.2em] text-maroon-deep uppercase"
              style={{ background: "var(--gradient-gold)" }}
            >
              Explore About Us
            </Link>
            <Link
              to="/navachitrika"
              className="btn-premium glass-panel rounded-full px-7 py-3.5 text-xs font-bold tracking-[0.2em] text-gold-soft uppercase"
            >
              Read Navachitrika
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md [perspective:1200px]">
          <div className="animate-float-slow relative">
            <div
              className="absolute -inset-10 rounded-full opacity-70 blur-3xl"
              style={{ background: "radial-gradient(circle, oklch(0.79 0.14 84 / 0.4), transparent 70%)" }}
              aria-hidden
            />
            <img
              src={logoUrl}
              alt={`${org.nameEn} official emblem`}
              className="relative mx-auto w-56 drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] sm:w-72"
            />
          </div>

          <div
            className="glass-panel mt-8 rounded-2xl p-4"
            style={{ transform: "rotateX(8deg) rotateY(-10deg)", boxShadow: "var(--shadow-deep)" }}
          >
            <p className="text-[0.65rem] font-semibold tracking-[0.28em] text-gold uppercase">
              Publications
            </p>
            <div className="mt-3 flex gap-3">
              {publications.slice(0, 3).map((p, i) => (
                <img
                  key={p.url}
                  src={p.url}
                  alt={p.alt}
                  loading="lazy"
                  className="h-28 w-auto rounded-md object-contain shadow-[0_16px_30px_-12px_rgba(0,0,0,0.7)]"
                  style={{ transform: `translateZ(${i * 12}px) rotate(${i * 2 - 2}deg)` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
