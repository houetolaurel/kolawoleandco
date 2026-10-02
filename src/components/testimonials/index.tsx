import { useEffect } from "react";
import { ClientTestimonialsSection } from "./ClientTestimonialsSection";
import { PartnerLogosSection } from "./PartnerLogosSection";
import { ProjectInquiryCallToActionSection } from "./ProjectInquiryCallToActionSection";
import { TestimonialsIntroSection } from "./TestimonialsIntroSection";
import { PrimaryNavigationSection } from "../PrimaryNavigationSection";
import { SiteFooterSection } from "../SiteFooterSection";

export const TmoignagesKolawol = () => {
  useEffect(() => {
    document.title = "Témoignages Clients | Lumen Agency";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Découvrez les avis et témoignages de nos clients et étudiants qui ont fait confiance à Lumen Agency pour élever leur présence digitale et immortaliser leurs soutenances."
      );
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#FAF9F9] text-[#1B1C1C] flex flex-col justify-between overflow-x-hidden">
      <PrimaryNavigationSection />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col gap-20">
        <TestimonialsIntroSection />
        <ClientTestimonialsSection />
        <PartnerLogosSection />
        <ProjectInquiryCallToActionSection />
      </main>

      <SiteFooterSection />
    </div>
  );
};

export default TmoignagesKolawol;
