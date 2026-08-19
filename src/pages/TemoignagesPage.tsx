import { useEffect } from "react";
import { ClientTestimonialsSection } from "../components/testimonials/ClientTestimonialsSection";
import { PartnerLogosSection } from "../components/testimonials/PartnerLogosSection";
import { ProjectInquiryCallToActionSection } from "../components/testimonials/ProjectInquiryCallToActionSection";
import { TestimonialsIntroSection } from "../components/testimonials/TestimonialsIntroSection";

export const TmoignagesKolawol = () => {
  useEffect(() => {
    document.title = "Témoignages Clients | Kolawolé & Co.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Découvrez les avis et témoignages de nos clients qui ont fait confiance à Kolawolé & Co. pour élever leur présence digitale.");
    }
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col gap-20">
      <TestimonialsIntroSection />
      <ClientTestimonialsSection />
      <PartnerLogosSection />
      <ProjectInquiryCallToActionSection />
    </div>
  );
};

export default TmoignagesKolawol;
