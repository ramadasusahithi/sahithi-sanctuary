import { useEffect } from "react";
import { About } from "@/components/site/About";
import { PageShell } from "@/components/site/PageShell";

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us | Ramadasu Sahithi Kala Seva Samstha";
  }, []);

  return (
    <PageShell>
      <About />
    </PageShell>
  );
}
