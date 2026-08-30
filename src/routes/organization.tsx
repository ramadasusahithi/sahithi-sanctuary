import { createFileRoute } from "@tanstack/react-router";
import { Organization } from "@/components/site/Organization";
import { PageShell } from "@/components/site/PageShell";

const title = "Organization Details | Ramadasu Sahithi Kala Seva Samstha";
const description =
  "Registration No. 435/2024 — ISO గుర్తింపు పొందిన సంస్థ. Official details of Ramadasu Sahithi Kala Seva Samstha, Khammam district, Telangana.";

export const Route = createFileRoute("/organization")({
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
      <Organization />
    </PageShell>
  ),
});
