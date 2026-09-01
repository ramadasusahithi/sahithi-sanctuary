import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { PageTransition } from "@/components/site/PageTransition";

import IndexPage from "@/pages/Index";
import AboutPage from "@/pages/About";
import ServicesPage from "@/pages/Services";
import NavachitrikaPage from "@/pages/Navachitrika";
import GalleryPage from "@/pages/Gallery";
import AwardsPage from "@/pages/Awards";
import OrganizationPage from "@/pages/Organization";
import ContactPage from "@/pages/Contact";
import NotFoundPage from "@/pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-ivory">
          <Navbar />
          <main className="flex-1">
            <PageTransition>
              <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/navachitrika" element={<NavachitrikaPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/awards" element={<AwardsPage />} />
                <Route path="/organization" element={<OrganizationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </PageTransition>
          </main>
          <Footer />
          <WhatsAppButton />
          <Toaster position="top-right" richColors />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
