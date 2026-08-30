import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { PageShell } from "@/components/site/PageShell";

const title = "About Us | Ramadasu Sahithi Kala Seva Samstha";
const description =
  "రామదాసు సాహితీ కళా సేవా సంస్థ — a Telugu literary and cultural organisation promoting poets, writers and literary service programmes.";

export const Route = createFileRoute("/about")({
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
      <About />
    </PageShell>
  ),
});
