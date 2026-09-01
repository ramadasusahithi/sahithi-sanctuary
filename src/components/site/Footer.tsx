import { Instagram, Mail, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { logoUrl, navItems, org, socials } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-maroon-deep pt-10 pb-5 text-ivory md:pt-16 md:pb-8">
      <div className="gold-rule" />
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 md:pt-12">
        <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <div className="flex min-w-0 items-center gap-4">
              <img src={logoUrl} alt={`${org.nameEn} logo`} className="h-16 w-16 shrink-0" />
              <div className="min-w-0">
                <p lang="te" className="font-telugu text-xl font-semibold text-gold-soft">
                  {org.nameTe}
                </p>
                <p className="text-[0.6rem] font-semibold tracking-[0.26em] text-ivory/60 uppercase">
                  Registration No. {org.regNo}
                </p>
              </div>
            </div>
            <p
              lang="te"
              className="mt-6 inline-block rounded-full border border-gold/50 px-4 py-2 font-telugu text-sm font-semibold text-gold"
            >
              {org.isoTe}
            </p>
          </div>

          <nav>
            <h3 className="text-[0.62rem] font-bold tracking-[0.28em] text-gold uppercase">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-2">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[0.7rem] font-semibold tracking-[0.16em] text-ivory/70 uppercase transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[0.62rem] font-bold tracking-[0.28em] text-gold uppercase">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`tel:${org.phone}`} className="flex items-center gap-3 text-ivory/80 hover:text-gold">
                  <Phone size={16} className="shrink-0 text-gold" /> {org.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${org.email}`} className="flex items-center gap-3 break-all text-ivory/80 hover:text-gold">
                  <Mail size={16} className="shrink-0 text-gold" /> {org.email}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.kind === "youtube" ? Youtube : Instagram;
                return (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-gold transition-colors hover:bg-gold/15"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="gold-rule mt-12" />
        <p className="mt-6 text-center text-[0.62rem] tracking-[0.2em] text-ivory/50 uppercase">
          © {new Date().getFullYear()} {org.nameEn}
        </p>
      </div>
    </footer>
  );
}
