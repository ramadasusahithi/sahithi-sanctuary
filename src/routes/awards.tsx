import { createFileRoute } from "@tanstack/react-router";
import { Awards } from "@/components/site/Awards";
import { PageShell } from "@/components/site/PageShell";

const title = "Awards | Ramadasu Sahithi Kala Seva Samstha";
const description =
  "సాహితీ పురస్కారాలు — literary recognition and award programmes of Ramadasu Sahithi Kala Seva Samstha.";

export const Route = createFileRoute("/awards")({
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
      <Awards />
    </PageShell>
  ),
});
