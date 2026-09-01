import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { galleryPhotos, logoUrl, org, publications } from "@/data/site";
import { Reveal, SectionHeading } from "./Reveal";

const items = [
  { url: logoUrl, alt: `${org.nameEn} official emblem` },
  ...galleryPhotos,
  ...publications,
];

const gallerySections = [
  { title: "EVENTS & ACTIVITIES", items: galleryPhotos, offset: 1 },
  { title: "BOOKS & PUBLICATIONS", items: publications, offset: 1 + galleryPhotos.length },
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

        <div className="mt-10 mb-8">
          <div className="mx-auto mb-6 max-w-fit rounded-full border border-gold/40 bg-maroon-deep/80 px-5 py-2 text-center text-xs font-semibold tracking-[0.24em] text-gold uppercase shadow-[0_16px_40px_-20px_rgba(0,0,0,0.7)]">
            Organization Emblem
          </div>
          <div className="mx-auto max-w-[280px]">
            <button
              type="button"
              onClick={() => setActive(0)}
              className="card-3d group block w-full overflow-hidden rounded-2xl border border-gold/30 bg-card p-3"
              style={{ boxShadow: "0 24px 48px -30px oklch(0.24 0.09 22 / 0.5)" }}
            >
              <span className="block overflow-hidden rounded-xl">
                <img
                  src={items[0].url}
                  alt={items[0].alt}
                  loading="lazy"
                  className="w-full object-contain transition-transform duration-700 group-hover:scale-[1.06]"
                />
              </span>
            </button>
          </div>
        </div>

        <div className="space-y-16">
          {gallerySections.map((section) => (
            <div key={section.title}>
              <div className="mb-6 flex items-center justify-between gap-4 border-b border-gold/25 pb-3">
                <h3 className="text-xl font-semibold tracking-[0.18em] text-maroon-deep uppercase sm:text-2xl">
                  {section.title}
                </h3>
                <span className="text-xs font-medium tracking-[0.26em] text-gold/80 uppercase">
                  {section.items.length} image{section.items.length > 1 ? "s" : ""}
                </span>
              </div>

              <div className="columns-1 gap-6 [column-fill:balance] sm:columns-2 lg:columns-3">
                {section.items.map((item, i) => {
                  const itemIndex = section.offset + i;
                  return (
                    <div key={`${section.title}-${item.url}`} className="mb-6 break-inside-avoid [perspective:1200px]">
                      <Reveal delay={(i % 3) * 90}>
                        <button
                          type="button"
                          onClick={() => setActive(itemIndex)}
                          className="card-3d group block w-full overflow-hidden rounded-2xl border border-gold/30 bg-card p-3"
                          style={{ boxShadow: "0 24px 48px -30px oklch(0.24 0.09 22 / 0.5)" }}
                        >
                          <span className="block overflow-hidden rounded-xl">
                            <img
                              src={item.url}
                              alt={item.alt}
                              loading="lazy"
                              className={`w-full transition-transform duration-700 group-hover:scale-[1.06] ${section.title === "BOOKS & PUBLICATIONS" ? "object-contain" : "object-cover"}`}
                              style={section.title === "BOOKS & PUBLICATIONS" ? { minHeight: "320px", maxHeight: "520px" } : undefined}
                            />
                          </span>
                        </button>
                      </Reveal>
                    </div>
                  );
                })}
              </div>
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
