import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { logoUrl, navItems, org } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold/25 bg-maroon-deep/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={logoUrl}
            alt={`${org.nameEn} logo`}
            className="h-12 w-12 shrink-0 drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)]"
          />
          <span className="min-w-0">
            <span className="block truncate text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-gold">
              Ramadasu Sahithi
            </span>
            <span
              lang="te"
              className="block truncate text-sm font-semibold text-ivory/90"
            >
              కళా సేవా సంస్థ
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="relative block rounded-md px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-ivory/80 transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold/40 bg-maroon/70 text-gold backdrop-blur xl:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-gold/20 bg-maroon-deep/95 backdrop-blur-xl xl:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-gold/10 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ivory/85 last:border-b-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
