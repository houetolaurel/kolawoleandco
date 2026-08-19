import { useEffect } from "react";
import { ContactFormSection } from "./ContactFormSection";
import { PrimaryNavigationSection } from "./PrimaryNavigationSection";
import { SiteFooterSection } from "./SiteFooterSection";

export const ContactKolawolCo = () => {
  useEffect(() => {
    document.title = "Discutons de votre projet | Contact Kolawolé & Co.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Contactez l'équipe de Kolawolé & Co. Discutons de votre projet de création de site web, application web ou identité visuelle.");
    }
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-white overflow-x-hidden flex flex-col justify-between">
      {/* Fond décoratif avec les effets floutés */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0"
      >
        <div className="absolute -top-20 -right-16 w-[500px] h-[500px] bg-[#93f2f233] rounded-full blur-[60px]" />
        <div className="absolute top-[400px] -left-16 w-[600px] h-[600px] bg-[#ffd9e133] rounded-full blur-[80px]" />
      </div>

      <PrimaryNavigationSection />

      <div className="relative z-10 flex-1">
        <ContactFormSection />
      </div>

      <SiteFooterSection />
    </main>
  );
};

export default ContactKolawolCo;
