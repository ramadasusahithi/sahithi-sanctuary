import {
  Award,
  BookMarked,
  Feather,
  Heart,
  Mic,
  PenTool,
  ScrollText,
  Users,
} from "lucide-react";
import { services } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

const icons = {
  feather: Feather,
  pen: PenTool,
  scroll: ScrollText,
  award: Award,
  users: Users,
  mic: Mic,
  book: BookMarked,
  heart: Heart,
};

export function Services() {
  return (
    <section id="services" className="relative bg-beige py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="What we do" title="Services" />

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 [perspective:1400px]">
          {services.filter((service) => service.description).map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.te} delay={(i % 4) * 90}>
                <article
                  className="card-3d group rounded-2xl border border-gold/30 bg-card p-6 sm:p-8"
                  style={{ boxShadow: "0 22px 45px -28px oklch(0.24 0.09 22 / 0.45)" }}
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div
                      className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-gold/40"
                      style={{ background: "linear-gradient(140deg, oklch(0.96 0.03 85), oklch(0.9 0.06 88))" }}
                    >
                      <Icon className="text-maroon" size={24} />
                    </div>
                    <h3 lang="te" className="font-telugu text-lg font-semibold text-maroon-deep sm:text-xl">
                      {s.te}
                    </h3>
                  </div>
                  <div className="gold-rule mt-6 transition-all duration-500 group-hover:w-full" />
                  <div lang="te" className="mt-6 space-y-4 font-telugu text-sm leading-8 text-maroon/80 sm:text-base">
                    {s.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
