import { useEffect } from "react";
import { PortfolioHeroSection } from "../components/portfolio/PortfolioHeroSection";
import { PortfolioShowcaseSection } from "../components/portfolio/PortfolioGallerySection";

export const PortfolioPage = () => {
  useEffect(() => {
    document.title = "Nos Réalisations | Portfolio Lumen Agency";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explorez le portfolio de Lumen Agency. Découvrez nos réalisations premium en Design UI/UX, e-commerce Shopify, applications web et couverture photo & vidéo des soutenances IFRI."
      );
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center pt-20 px-4 md:px-0">
      <PortfolioHeroSection />
      <PortfolioShowcaseSection />
    </div>
  );
};

export default PortfolioPage;
