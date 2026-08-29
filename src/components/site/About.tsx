import { BookOpen } from "lucide-react";
import { org, publications } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ivory py-24">
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{ background: "linear-gradient(to bottom, oklch(0.24 0.09 22 / 0.16), transparent)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Who we are" title="About Us" />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="relative rounded-3xl border border-gold/30 bg-card p-8 sm:p-12"
              style={{ boxShadow: "var(--shadow-deep)" }}
            >
              <BookOpen className="text-gold" size={34} />
              <p lang="te" className="mt-6 font-telugu text-xl leading-[1.9] text-brown sm:text-[1.4rem]">
                {org.aboutTe}
              </p>
              <div className="gold-rule mt-8 w-full" />
              <p className="mt-6 text-[0.65rem] font-semibold tracking-[0.3em] text-bronze uppercase">
                Literary Service · Since Registration 435/2024
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="[perspective:1400px]">
              <div
                className="card-3d relative rounded-3xl border border-gold/30 bg-beige p-6"
                style={{ boxShadow: "var(--shadow-deep)" }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {publications.slice(3, 7).map((p) => (
                    <img
                      key={p.url}
                      src={p.url}
                      alt={p.alt}
                      loading="lazy"
                      className="w-full rounded-lg object-contain shadow-[0_18px_36px_-16px_rgba(60,20,10,0.45)]"
                    />
                  ))}
                </div>
                <p lang="te" className="mt-6 text-center font-telugu text-lg text-maroon">
                  సాహిత్య ప్రచురణలు
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
