import { useEffect } from "react";
import { Organization } from "@/components/site/Organization";
import { PageShell } from "@/components/site/PageShell";

export default function OrganizationPage() {
  useEffect(() => {
    document.title = "Organization Details | Ramadasu Sahithi Kala Seva Samstha";
  }, []);

  return (
    <PageShell>
      <Organization />
    </PageShell>
  );
}
