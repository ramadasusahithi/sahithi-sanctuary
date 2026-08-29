import { ArrowUpRight, BookOpen, Clock } from "lucide-react";
import { issues, navachitrikaHighlights } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Navachitrika() {
  const feature = issues[0];

  return (
    <section id="navachitrika" className="surface-maroon relative overflow-hidden py-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, oklch(0.79 0.14 84 / 0.22), transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.4 0.15 20 / 0.6), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Monthly literary magazine"
          title="Navachitrika"
          te="నవచిత్రిక"
          tone="light"
        />
        <Reveal delay={80}>
          <p lang="te" className="mx-auto mt-4 max-w-2xl text-center font-telugu text-lg text-gold-soft">
            నెలనెలా వెలువడే సాహిత్య మాసపత్రిక
          </p>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="mx-auto w-full max-w-xs [perspective:1200px]">
              <div
                className="card-3d relative rounded-r-2xl rounded-l-md"
                style={{
                  transform: "rotateY(-16deg) rotateX(5deg)",
                  boxShadow: "var(--shadow-deep)",
                }}
              >
                <img
                  src={feature?.cover}
                  alt="Navachitrika magazine cover"
                  className="w-full rounded-r-2xl rounded-l-md object-contain"
                />
                <span
                  className="absolute inset-y-0 left-0 w-3 rounded-l-md"
                  style={{ background: "var(--gradient-gold)" }}
                  aria-hidden
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-panel rounded-3xl p-8" style={{ boxShadow: "var(--shadow-deep)" }}>
              <p lang="te" className="font-telugu text-lg leading-[1.9] text-ivory/90">
                “నవచిత్రిక” రామదాసు సాహితీ కళా సేవా సంస్థ ఆధ్వర్యంలో వెలువడే సాహిత్య మాసపత్రిక.
              </p>
              <div className="gold-rule my-7" />
              <ul className="grid gap-3 sm:grid-cols-2">
                {navachitrikaHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span lang="te" className="font-telugu text-ivory/85">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <Reveal>
            <p className="text-center text-[0.65rem] font-semibold tracking-[0.32em] text-gold uppercase">
              Monthly Issues
            </p>
          </Reveal>
          <div className="mt-8 grid gap-6 [perspective:1400px] md:grid-cols-3">
            {issues.map((issue, i) => (
              <Reveal key={issue.monthEn} delay={i * 100}>
                <article
                  className="card-3d glass-panel flex h-full flex-col rounded-2xl p-6"
                  style={{ boxShadow: "var(--shadow-deep)" }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[0.62rem] font-bold tracking-[0.26em] text-gold uppercase">
                      {issue.monthEn}
                    </span>
                    <BookOpen className="text-gold/70" size={20} />
                  </div>
                  <h3 lang="te" className="mt-4 font-telugu text-lg text-ivory">
                    {issue.titleTe}
                  </h3>
                  <div className="mt-auto pt-7">
                    {issue.url ? (
                      <a
                        href={issue.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-premium inline-flex items-center gap-2 rounded-full px-5 py-3 text-[0.65rem] font-bold tracking-[0.2em] text-maroon-deep uppercase"
                        style={{ background: "var(--gradient-gold)" }}
                      >
                        Read {issue.monthEn.split(" ")[0]} Issue
                        <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-gold/35 px-5 py-3 text-[0.65rem] font-bold tracking-[0.2em] text-gold/70 uppercase">
                        <Clock size={14} /> Coming Soon
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
