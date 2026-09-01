import { useEffect } from "react";
import { Services } from "@/components/site/Services";
import { PageShell } from "@/components/site/PageShell";

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Services | Ramadasu Sahithi Kala Seva Samstha";
  }, []);

  return (
    <PageShell>
      <Services />
    </PageShell>
  );
}
