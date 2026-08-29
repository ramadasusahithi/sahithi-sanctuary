import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { logoUrl, org, publications } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

const items = [
  { url: logoUrl, alt: `${org.nameEn} official emblem` },
  ...publications,
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const current = active === null ? null : items[active];

  return (
    <section id="gallery" className="relative bg-beige py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Visual archive" title="Gallery" />

        <div className="mt-16 columns-1 gap-6 [column-fill:balance] sm:columns-2 lg:columns-3">
          {items.map((item, i) => (
            <div key={item.url} className="mb-6 break-inside-avoid [perspective:1200px]">
              <Reveal delay={(i % 3) * 90}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="card-3d group block w-full overflow-hidden rounded-2xl border border-gold/30 bg-card p-3"
                  style={{ boxShadow: "0 24px 48px -30px oklch(0.24 0.09 22 / 0.5)" }}
                >
                  <span className="block overflow-hidden rounded-xl">
                    <img
                      src={item.url}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full object-contain transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                  </span>
                </button>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      {current ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-maroon-deep/90 p-4 backdrop-blur-md"
        >
          <button
            type="button"
            aria-label="Close preview"
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-gold"
          >
            <X size={20} />
          </button>
          <img
            src={current.url}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] w-auto max-w-full rounded-xl object-contain shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]"
          />
        </div>
      ) : null}
    </section>
  );
}
