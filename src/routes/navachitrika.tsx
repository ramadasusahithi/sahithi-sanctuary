import { createFileRoute } from "@tanstack/react-router";
import { Navachitrika } from "@/components/site/Navachitrika";
import { PageShell } from "@/components/site/PageShell";

const title = "Navachitrika | Telugu Monthly Literary Magazine";
const description =
  "నవచిత్రిక — నెలనెలా వెలువడే సాహిత్య మాసపత్రిక. Read the digital magazine shelf of Navachitrika, published by Ramadasu Sahithi Kala Seva Samstha.";

export const Route = createFileRoute("/navachitrika")({
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
      <Navachitrika />
    </PageShell>
  ),
});
