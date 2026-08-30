import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/site/Gallery";
import { PageShell } from "@/components/site/PageShell";

const title = "Gallery | Ramadasu Sahithi Kala Seva Samstha";
const description =
  "Visual archive of publications, magazine covers and literary programmes of Ramadasu Sahithi Kala Seva Samstha.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell>
      <Gallery />
    </PageShell>
  ),
});
