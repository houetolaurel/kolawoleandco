import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AgencyServicesSection } from "../components/AgencyServicesSection";

export const AccueilsKolawolCo = () => {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = "Kolawolé & Co. | Agence Design UI/UX & Développement Web Premium";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Kolawolé & Co. est une agence digitale d'excellence spécialisée dans le design d'interfaces utilisateur (UI/UX) d'exception, le développement web Fullstack sur-mesure et les boutiques e-commerce.");
    }
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [hash]);

  return <AgencyServicesSection />;
};
