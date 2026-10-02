import { useEffect } from "react";
import { ExpertiseServicesSection } from "../components/expertise/ExpertiseServicesSection";

export const ExpertisePage = () => {
  useEffect(() => {
    document.title = "Notre Expertise | Lumen Agency";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Découvrez l'expertise de Lumen Agency en Design UI/UX, E-commerce, Développement web Fullstack, Photographie professionnelle et Couverture Vidéo. Des solutions digitales et audiovisuelles de pointe."
      );
    }
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <ExpertiseServicesSection />

      {/* CTA Section */}
      <section className="w-full max-w-4xl mx-auto px-6 pb-32 flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1c] tracking-tight">
          Prêt à donner vie à votre projet ?
        </h2>
        <p className="max-w-2xl text-lg text-[#3e4949] leading-relaxed">
          Discutons de vos besoins et trouvons ensemble la solution idéale
          pour propulser votre présence digitale et valoriser vos événements.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ff0081] px-10 py-4 text-base font-semibold tracking-wide text-white shadow-lg transition-all hover:bg-[#e00070] hover:shadow-xl active:scale-95 cursor-pointer"
        >
          Démarrer un Projet
        </a>
      </section>
    </div>
  );
};

export default ExpertisePage;
