import { useEffect } from "react";
import { Awards } from "@/components/site/Awards";
import { PageShell } from "@/components/site/PageShell";

export default function AwardsPage() {
  useEffect(() => {
    document.title = "Awards | Ramadasu Sahithi Kala Seva Samstha";
  }, []);

  return (
    <PageShell>
      <Awards />
    </PageShell>
  );
}
