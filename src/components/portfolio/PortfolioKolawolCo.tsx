import { useEffect } from "react";
import { PortfolioHeroSection } from "./PortfolioHeroSection";
import { PortfolioShowcaseSection } from "./PortfolioGallerySection";
import { PrimaryNavigationSection } from "../PrimaryNavigationSection";
import { SiteFooterSection } from "../SiteFooterSection";

export const PortfolioPage = () => {
  useEffect(() => {
    document.title = "Nos Réalisations | Portfolio Kolawolé & Co.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Explorez le portfolio de Kolawolé & Co. Découvrez nos réalisations premium en Design UI/UX, e-commerce Shopify et applications web complexes.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-[linear-gradient(0deg,rgba(250,249,249,1)_0%,rgba(250,249,249,1)_100%)] flex flex-col items-center w-full">
      {/* 1. Navbar globale conservée */}
      <PrimaryNavigationSection />

      {/* 2. Contenu de la page Portfolio */}
      <main className="w-full flex flex-col items-center pt-20 px-4 md:px-0">
        <PortfolioHeroSection />
        <PortfolioShowcaseSection />
        <SiteFooterSection />
      </main>
    </div>
  );
};
