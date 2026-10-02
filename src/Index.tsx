import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AgencyServicesSection } from "./components/AgencyServicesSection";
import { PrimaryNavigationSection } from "./components/PrimaryNavigationSection";
import { SiteFooterSection } from "./components/SiteFooterSection";

export const AccueilsKolawolCo = () => {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = "Lumen Agency | Agence Design UI/UX, Développement Web & Photographie";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Lumen Agency est une agence digitale d'excellence spécialisée dans le design d'interfaces utilisateur (UI/UX) d'exception, le développement web Fullstack sur-mesure, l'e-commerce, la photographie et la couverture vidéo."
      );
    }

    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen w-full bg-[#faf9f9] text-[#1b1c1c]">
      <PrimaryNavigationSection />
      <main>
        <AgencyServicesSection />
      </main>
      <SiteFooterSection />
    </div>
  );
};