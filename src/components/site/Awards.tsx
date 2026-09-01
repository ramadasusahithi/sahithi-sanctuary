import { Trophy } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const awardSlots = [0, 1, 2];

export function Awards() {
  return (
    <section id="awards" className="relative bg-ivory py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Recognition" title="Awards" te="సాహితీ పురస్కారాలు" />

        <div className="mt-16 grid gap-8 [perspective:1400px] md:grid-cols-3">
          {awardSlots.map((i) => (
            <Reveal key={i} delay={i * 110}>
              <article
                className="card-3d group relative h-full overflow-hidden rounded-3xl border border-gold/35 bg-card p-6"
                style={{ boxShadow: "var(--shadow-deep)" }}
              >
                <div
                  className="absolute -top-20 -right-20 h-48 w-48 rounded-full blur-3xl"
                  style={{ background: "radial-gradient(circle, oklch(0.79 0.14 84 / 0.28), transparent 70%)" }}
                  aria-hidden
                />
                <div
                  className="relative grid h-14 w-14 place-items-center rounded-full"
                  style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
                >
                  <Trophy className="text-maroon-deep" size={24} />
                </div>
                <div className="relative mt-6 h-64 rounded-xl bg-beige/50" aria-hidden="true" />
                <div className="gold-rule mt-6" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

