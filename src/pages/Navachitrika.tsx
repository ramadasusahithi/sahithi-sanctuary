import { useEffect } from "react";
import { Navachitrika } from "@/components/site/Navachitrika";
import { PageShell } from "@/components/site/PageShell";

export default function NavachitrikaPage() {
  useEffect(() => {
    document.title = "Navachitrika | Telugu Monthly Literary Magazine";
  }, []);

  return (
    <PageShell>
      <Navachitrika />
    </PageShell>
  );
}
