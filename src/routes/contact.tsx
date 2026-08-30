import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";
import { PageShell } from "@/components/site/PageShell";

const title = "Contact | Ramadasu Sahithi Kala Seva Samstha";
const description =
  "Call 8886910899, email navachitrika@gmail.com or chat on WhatsApp. Office: సుర్ధేపల్లి, నేలకొండపల్లి, ఖమ్మం జిల్లా, తెలంగాణ.";

export const Route = createFileRoute("/contact")({
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
      <Contact />
    </PageShell>
  ),
});
