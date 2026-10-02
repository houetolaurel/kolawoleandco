import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AgencyServicesSection } from "../components/AgencyServicesSection";

export const AccueilsKolawolCo = () => {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = "Lumen Agency | Agence Design UI/UX, Développement Web & Photographie";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Lumen Agency est une agence digitale d'excellence spécialisée dans le design d'interfaces utilisateur (UI/UX), le développement web Fullstack, l'e-commerce, la photographie et la couverture vidéo."
      );
    }
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [hash]);

  return <AgencyServicesSection />;
};

export default AccueilsKolawolCo;
