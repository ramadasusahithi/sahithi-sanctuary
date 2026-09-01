import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { logoUrl, navItems, org } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (to: string) => {
    if (to === "/") return pathname === "/";
    return pathname.startsWith(to);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold/25 bg-maroon-deep/85 backdrop-blur-xl"
          : "bg-maroon-deep/35 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logoUrl}
            alt={`${org.nameEn} logo`}
            className="h-12 w-12 shrink-0 drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)]"
          />
          <span className="min-w-0">
            <span className="block truncate text-[0.68rem] font-semibold tracking-[0.24em] text-gold uppercase">
              Ramadasu Sahithi
            </span>
            <span lang="te" className="block truncate text-sm font-semibold text-ivory/90">
              కళా సేవా సంస్థ
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const active = isActive(item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`relative block rounded-md px-3 py-2 text-[0.7rem] font-semibold tracking-[0.16em] uppercase transition-colors ${
                    active
                      ? "bg-gold/10 text-gold ring-1 ring-gold/40"
                      : "text-ivory/80 hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
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
            {navItems.map((item) => {
              const active = isActive(item.to);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-gold/10 py-3 text-xs font-semibold tracking-[0.2em] uppercase last:border-b-0 ${
                      active ? "text-gold" : "text-ivory/85 hover:text-gold"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
