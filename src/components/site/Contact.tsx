import { Clock, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { org, socials, whatsappUrl } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="surface-maroon relative overflow-hidden py-24">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, oklch(0.79 0.14 84 / 0.18), transparent 55%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Get in touch" title="Contact" tone="light" />

        <div className="mt-16 grid gap-6 [perspective:1400px] md:grid-cols-3">
          <Reveal>
            <a
              href={`tel:${org.phone}`}
              className="card-3d glass-panel flex h-full flex-col rounded-2xl p-7"
              style={{ boxShadow: "var(--shadow-deep)" }}
            >
              <Phone className="text-gold" size={26} />
              <p className="mt-5 text-[0.62rem] font-bold tracking-[0.28em] text-gold/80 uppercase">
                Call Us
              </p>
              <p className="mt-3 font-display text-2xl font-semibold text-ivory">{org.phone}</p>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <a
              href={`mailto:${org.email}`}
              className="card-3d glass-panel flex h-full flex-col rounded-2xl p-7"
              style={{ boxShadow: "var(--shadow-deep)" }}
            >
              <Mail className="text-gold" size={26} />
              <p className="mt-5 text-[0.62rem] font-bold tracking-[0.28em] text-gold/80 uppercase">
                Email Us
              </p>
              <p className="mt-3 break-all text-lg font-semibold text-ivory">{org.email}</p>
            </a>
          </Reveal>

          <Reveal delay={200}>
            <div
              className="card-3d glass-panel relative h-full overflow-hidden rounded-2xl p-7"
              style={{ boxShadow: "var(--shadow-deep)" }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(oklch(0.79 0.14 84 / 0.25) 1px, transparent 1px), linear-gradient(90deg, oklch(0.79 0.14 84 / 0.25) 1px, transparent 1px)",
                  backgroundSize: "34px 34px",
                }}
                aria-hidden
              />
              <MapPin className="relative text-gold" size={26} />
              <p className="relative mt-5 text-[0.62rem] font-bold tracking-[0.28em] text-gold/80 uppercase">
                Visit Us
              </p>
              <address lang="te" className="relative mt-3 font-telugu text-base not-italic text-ivory/90">
                {org.addressTe.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="mt-10 text-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-3 rounded-full px-8 py-4 text-xs font-bold tracking-[0.2em] text-maroon-deep uppercase"
              style={{ background: "linear-gradient(140deg, #25D366, #128C7E)", color: "#fff" }}
            >
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass-panel h-full rounded-2xl p-7" style={{ boxShadow: "var(--shadow-deep)" }}>
              <div className="flex items-center gap-3">
                <Clock className="text-gold" size={22} />
                <h3 className="text-[0.68rem] font-bold tracking-[0.28em] text-gold uppercase">
                  Business Hours
                </h3>
              </div>
              <div className="mt-6 divide-y divide-gold/15">
                <div className="flex items-center justify-between gap-4 py-3">
                  <span className="text-sm font-medium text-ivory/85">Monday – Saturday</span>
                  <span className="font-display text-lg font-semibold text-gold-soft">
                    8:00 AM – 8:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 py-3">
                  <span className="text-sm font-medium text-ivory/85">Sunday</span>
                  <span className="font-display text-lg font-semibold text-gold-soft">Closed</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-panel h-full rounded-2xl p-7" style={{ boxShadow: "var(--shadow-deep)" }}>
              <h3 className="text-[0.68rem] font-bold tracking-[0.28em] text-gold uppercase">
                Follow Us
              </h3>
              <ul className="mt-6 space-y-3">
                {socials.map((s) => {
                  const Icon = s.kind === "youtube" ? Youtube : Instagram;
                  return (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-xl border border-gold/20 px-4 py-3 transition-colors hover:border-gold/60"
                      >
                        <span
                          className="grid h-10 w-10 shrink-0 place-items-center rounded-full"
                          style={{ background: "var(--gradient-gold)" }}
                        >
                          <Icon className="text-maroon-deep" size={18} />
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-semibold text-ivory">
                            {s.label}
                          </span>
                          <span className="block text-[0.6rem] tracking-[0.24em] text-gold/70 uppercase">
                            {s.kind}
                          </span>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
