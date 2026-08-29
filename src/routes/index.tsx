import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Organization } from "@/components/site/Organization";
import { Services } from "@/components/site/Services";
import { Navachitrika } from "@/components/site/Navachitrika";
import { Awards } from "@/components/site/Awards";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Ramadasu Sahithi Kala Seva Samstha | Telugu Literary Trust";
const description =
  "ISO-recognised Telugu literary and cultural organisation from Khammam — literary events, poetry contests, awards, publications and the monthly magazine Navachitrika.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <div className="bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Organization />
        <Services />
        <Navachitrika />
        <Awards />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
