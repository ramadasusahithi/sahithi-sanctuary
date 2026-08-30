import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
import { PageShell } from "@/components/site/PageShell";

const title = "Services | Ramadasu Sahithi Kala Seva Samstha";
const description =
  "సాహిత్య కార్యక్రమాలు, కవితా పోటీలు, కథా రచన పోటీలు, సాహితీ పురస్కారాలు, కవి సమ్మేళనాలు, సాహిత్య ప్రచురణలు — our literary services.";

export const Route = createFileRoute("/services")({
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
      <Services />
    </PageShell>
  ),
});
