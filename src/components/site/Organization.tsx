import { BadgeCheck, FileText, Landmark, ShieldCheck } from "lucide-react";
import { logoUrl, org } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

const cards = [
  {
    icon: Landmark,
    label: "Organization Name",
    te: org.nameTe,
  },
  {
    icon: FileText,
    label: "Registration No.",
    value: org.regNo,
  },
  {
    icon: BadgeCheck,
    label: "Head Office",
    te: "సుర్ధేపల్లి, నేలకొండపల్లి, ఖమ్మం జిల్లా, తెలంగాణ.",
  },
];

export function Organization() {
  return (
    <section id="organization" className="surface-maroon relative overflow-hidden py-24">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 85% 10%, oklch(0.79 0.14 84 / 0.2), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Institutional" title="Organization Details" tone="light" />

        <div className="mt-16 grid gap-6 [perspective:1400px] md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 100}>
              <div
                className="card-3d glass-panel h-full rounded-2xl p-7"
                style={{ boxShadow: "var(--shadow-deep)" }}
              >
                <c.icon className="text-gold" size={28} />
                <p className="mt-5 text-[0.62rem] font-semibold tracking-[0.28em] text-gold/80 uppercase">
                  {c.label}
                </p>
                {c.te ? (
                  <p lang="te" className="mt-3 font-telugu text-lg text-ivory">
                    {c.te}
                  </p>
                ) : (
                  <p className="mt-3 font-display text-3xl font-semibold text-ivory">{c.value}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 [perspective:1200px]">
            <div
              className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 overflow-hidden rounded-3xl border-2 border-gold/60 px-8 py-10 text-center sm:flex-row sm:text-left"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.3 0.11 24), oklch(0.2 0.07 22) 55%, oklch(0.33 0.13 25))",
                boxShadow: "var(--shadow-gold), var(--shadow-deep)",
              }}
            >
              <div
                className="absolute -top-24 -right-16 h-56 w-56 rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, oklch(0.79 0.14 84 / 0.35), transparent 70%)" }}
                aria-hidden
              />
              <div className="relative grid h-20 w-20 shrink-0 place-items-center rounded-full"
                style={{ background: "var(--gradient-gold)" }}
              >
                <ShieldCheck className="text-maroon-deep" size={36} />
              </div>
              <div className="relative">
                <p className="text-[0.62rem] font-bold tracking-[0.34em] text-gold uppercase">
                  Certified Institution
                </p>
                <p
                  lang="te"
                  className="text-gold-gradient mt-2 font-telugu text-2xl font-bold sm:text-3xl"
                >
                  {org.isoTe}
                </p>
              </div>
              <img
                src={logoUrl}
                alt=""
                aria-hidden
                className="relative ml-auto hidden h-20 w-20 opacity-90 sm:block"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
