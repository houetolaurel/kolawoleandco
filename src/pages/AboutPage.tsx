import { useEffect } from "react";
const notreCeo = "/images/notre_ceo.jpg";

export const AboutPage = () => {
  useEffect(() => {
    document.title = "À Propos | Kolawolé & Co.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Découvrez l'agence Kolawolé & Co., nos valeurs d'excellence et notre CEO HOUETO Kolawolé Laurel.");
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Fond décoratif */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0"
      >
        <div className="absolute -top-20 -right-16 w-[500px] h-[500px] bg-[#93f2f233] rounded-full blur-[60px]" />
        <div className="absolute top-[400px] -left-16 w-[600px] h-[600px] bg-[#ffd9e133] rounded-full blur-[80px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 py-20 lg:py-32 flex flex-col items-center gap-16">
        <header className="flex flex-col max-w-3xl items-center gap-6 text-center">
          <h1 className="[font-family:'Hanken_Grotesk-Bold',Helvetica] font-bold text-[#008080] text-[48px] sm:text-[64px] tracking-tight leading-[1.1]">
            À Propos de Kolawolé & Co.
          </h1>
          <p className="[font-family:'Manrope-Regular',Helvetica] font-normal text-[#3e4949] text-lg sm:text-xl leading-relaxed">
            Une agence digitale moderne qui allie l'exigence créative, la rigueur technique et les standards technologiques mondiaux pour donner vie à vos projets numériques.
          </p>
        </header>

        {/* Agency presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-5xl mt-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1b1c1c] tracking-tight">
              Notre Vision & Notre Mission
            </h2>
            <p className="text-base text-[#3e4949] leading-relaxed">
              Chez Kolawolé & Co., nous croyons qu'une présence en ligne réussie est le fruit d'une harmonie parfaite entre esthétique et technologie. Nous accompagnons les marques dans leur transformation digitale en créant des solutions sur-mesure (sites vitrines, e-commerce, applications web complexes).
            </p>
            <p className="text-base text-[#3e4949] leading-relaxed">
              Chaque ligne de code est pensée pour la performance, la sécurité et l'évolutivité. Notre processus centré sur l'utilisateur garantit que vos clients bénéficieront d'une expérience intuitive et mémorable.
            </p>
          </div>
          <div className="relative rounded-2xl bg-[#faf9f9b2] border border-[#bdc9c84c] shadow-[0px_8px_32px_#0100810d] backdrop-blur-[10px] p-8 space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-bold uppercase tracking-wider text-[#ff0081]">Nos Valeurs</span>
              <h3 className="text-xl font-bold text-[#1b1c1c]">L'excellence dans les détails</h3>
            </div>
            <ul className="space-y-4 text-base text-[#3e4949]">
              <li className="flex items-start gap-3">
                <span className="text-[#008080] font-bold">✓</span>
                <span><strong>Qualité Globale :</strong> Standards de performance et d'accessibilité internationaux.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#008080] font-bold">✓</span>
                <span><strong>Transparence :</strong> Co-construction et communication fluide à chaque étape du projet.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#008080] font-bold">✓</span>
                <span><strong>Innovation :</strong> Utilisation des outils et frameworks de pointe (React, Next.js, Node.js).</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CEO presentation */}
        <div className="w-full max-w-5xl border-t border-[#bdc9c84c] pt-20 mt-12 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-[#bdc9c880]">
              <img
                src={notreCeo}
                alt="HOUETO Kolawolé Laurel - CEO de Kolawolé & Co."
                width={320}
                height={320}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5 space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-bold uppercase tracking-wider text-[#008080]">Le Fondateur & CEO</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1b1c1c] tracking-tight">
                HOUETO Kolawolé Laurel
              </h2>
            </div>
            <p className="text-base text-[#3e4949] leading-relaxed">
              À la tête de Kolawolé & Co., HOUETO Kolawolé Laurel guide l'agence avec une passion inébranlable pour le design d'interfaces haut de gamme et l'ingénierie logicielle robuste.
            </p>
            <p className="text-base text-[#3e4949] leading-relaxed">
              Son objectif est de connecter le savoir-faire créatif local aux exigences de performance des marchés mondiaux. Il supervise directement la stratégie de l'agence, l'orientation technique et veille à ce que chaque projet reflète l'ADN d'excellence de Kolawolé & Co.
            </p>
            <div className="pt-2">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ff0081] px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-md transition-all hover:bg-[#e00070] active:scale-95 cursor-pointer"
              >
                Discuter de votre projet avec le CEO
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
