import { useEffect } from "react";
import { Contact } from "@/components/site/Contact";
import { PageShell } from "@/components/site/PageShell";

export default function ContactPage() {
  useEffect(() => {
    document.title = "Contact | Ramadasu Sahithi Kala Seva Samstha";
  }, []);

  return (
    <PageShell>
      <Contact />
    </PageShell>
  );
}
