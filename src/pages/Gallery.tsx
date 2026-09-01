import { useEffect } from "react";
import { Gallery } from "@/components/site/Gallery";
import { PageShell } from "@/components/site/PageShell";

export default function GalleryPage() {
  useEffect(() => {
    document.title = "Gallery | Ramadasu Sahithi Kala Seva Samstha";
  }, []);

  return (
    <PageShell>
      <Gallery />
    </PageShell>
  );
}
