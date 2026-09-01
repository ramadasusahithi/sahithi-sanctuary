import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookMarked,
  Feather,
  Heart,
  MessageCircle,
  Mic,
  PenTool,
  ScrollText,
  Users,
} from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Reveal, SectionHeading } from "@/components/site/Reveal";
import {
  galleryPhotos,
  issues,
  navachitrikaHeroUrl,
  org,
  services,
  whatsappUrl,
} from "@/data/site";

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

function Intro() {
  return (
    <section className="relative bg-ivory py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Who we are" title="Introduction" />
        <Reveal delay={90}>
          <div
            className="mx-auto mt-12 max-w-4xl rounded-3xl border border-gold/30 bg-card p-8 text-center sm:p-12"
            style={{ boxShadow: "var(--shadow-deep)" }}
          >
            <p lang="te" className="font-telugu text-xl leading-[1.9] text-brown">
              {org.aboutTe.split("।")[0]}
            </p>
            <div className="gold-rule mx-auto mt-8 w-40" />
            <Link
              to="/about"
              className="btn-premium mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold tracking-[0.2em] text-maroon-deep uppercase"
              style={{ background: "var(--gradient-gold)" }}
            >
              Explore About Us <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="relative bg-beige py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="What we do" title="Selected Services" />
        <div className="mt-14 grid gap-6 [perspective:1400px] sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.te} delay={i * 90}>
                <article
                  className="card-3d group h-full rounded-2xl border border-gold/30 bg-card p-7"
                  style={{ boxShadow: "0 22px 45px -28px oklch(0.24 0.09 22 / 0.45)" }}
                >
                  <div
                    className="grid h-14 w-14 place-items-center rounded-xl border border-gold/40"
                    style={{
                      background: "linear-gradient(140deg, oklch(0.96 0.03 85), oklch(0.9 0.06 88))",
                    }}
                  >
                    <Icon className="text-maroon" size={24} />
                  </div>
                  <h3 lang="te" className="mt-6 font-telugu text-lg font-semibold text-maroon-deep">
                    {s.te}
                  </h3>
                  <div className="gold-rule mt-5 w-10 transition-all duration-500 group-hover:w-full" />
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={140}>
          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="btn-premium inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold tracking-[0.2em] text-maroon-deep uppercase"
              style={{ background: "var(--gradient-gold)" }}
            >
              View Services <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NavachitrikaPreview() {
  const feature = issues.find((i) => i.available) ?? issues[0];
  return (
    <section className="surface-maroon relative overflow-hidden py-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 25% 25%, oklch(0.79 0.14 84 / 0.2), transparent 52%)",
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
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="mx-auto w-full max-w-sm [perspective:1200px]">
              <div
                className="magazine-card overflow-hidden rounded-2xl border border-gold/35"
                style={{ boxShadow: "var(--shadow-deep)" }}
              >
                <img
                  src={navachitrikaHeroUrl}
                  alt="Decorative literary still life representing the Navachitrika magazine"
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="glass-panel rounded-3xl p-8" style={{ boxShadow: "var(--shadow-deep)" }}>
              <p lang="te" className="font-telugu text-lg leading-[1.9] text-ivory/90">
                నెలనెలా వెలువడే సాహిత్య మాసపత్రిక — కవితలు, కథలు, వ్యాసాలు, సాహిత్య విశేషాలు.
              </p>
              <p className="mt-6 text-[0.62rem] font-bold tracking-[0.26em] text-gold uppercase">
                Latest issue · {feature?.month} {feature?.year}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/navachitrika"
                  className="btn-premium inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold tracking-[0.2em] text-maroon-deep uppercase"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  Read Navachitrika <ArrowRight size={15} />
                </Link>
                {feature?.available && feature.driveUrl ? (
                  <a
                    href={feature.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium glass-panel inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold tracking-[0.2em] text-gold-soft uppercase"
                  >
                    Read {feature.month} Issue <ArrowUpRight size={15} />
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  return (
    <section className="relative bg-beige py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Visual archive" title="Gallery Preview" />
        <div className="mt-14 grid gap-6 [perspective:1400px] sm:grid-cols-2 lg:grid-cols-4">
          {galleryPhotos.slice(0, 4).map((p, i) => (
            <Reveal key={p.url} delay={i * 90}>
              <div
                className="card-3d overflow-hidden rounded-2xl border border-gold/30 bg-card p-3"
                style={{ boxShadow: "0 24px 48px -30px oklch(0.24 0.09 22 / 0.5)" }}
              >
                <img
                  src={p.url}
                  alt={p.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="btn-premium inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold tracking-[0.2em] text-maroon-deep uppercase"
              style={{ background: "var(--gradient-gold)" }}
            >
              View Gallery <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="surface-maroon relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <SectionHeading eyebrow="Get in touch" title="Contact Us" tone="light" />
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-premium inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold tracking-[0.2em] text-maroon-deep uppercase"
              style={{ background: "var(--gradient-gold)" }}
            >
              Contact Us <ArrowRight size={15} />
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium glass-panel inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold tracking-[0.2em] text-gold-soft uppercase"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function IndexPage() {
  useEffect(() => {
    document.title = "Ramadasu Sahithi Kala Seva Samstha | Telugu Literary Trust";
  }, []);

  return (
    <>
      <Hero />
      <Intro />
      <ServicesPreview />
      <NavachitrikaPreview />
      <GalleryPreview />
      <ContactCta />
    </>
  );
}
