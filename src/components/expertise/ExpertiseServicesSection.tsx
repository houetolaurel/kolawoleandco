import { useSearchParams } from "react-router-dom";
import { Layout, ShoppingBag, Code2 } from "lucide-react";

import devIllustration from "../../assets/Illustration dev.jpg";

const designTags = ["Figma", "Prototypage", "Design Systems"];
const ecommerceTags = ["Shopify"];
const developmentTags = ["React / Next.js", "Node.js", "Python", "PostgreSQL"];

const TagList = ({
  tags,
  colorClass,
}: {
  tags: string[];
  colorClass: string;
}) => (
  <div className="flex flex-wrap items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
    {tags.map((tag) => (
      <span
        key={tag}
        className={`inline-flex items-center px-3 py-1 rounded-full ${colorClass}`}
      >
        <span className="[font-family:'Hanken_Grotesk-SemiBold',Helvetica] font-semibold text-sm tracking-[0.70px] leading-5 whitespace-nowrap">
          {tag}
        </span>
      </span>
    ))}
  </div>
);

export const ExpertiseServicesSection = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("expertise");

  const showDesign = !filter || filter === "design";
  const showEcommerce = !filter || filter === "ecommerce";
  const showDevelopment = !filter || filter === "developpement" || filter === "dev";

  return (
    <section
      id="expertise"
      className="flex flex-col items-center gap-20 pt-32 pb-40 px-0 relative self-stretch w-full flex-[0_0_auto] max-md:px-6 max-md:pt-20 max-md:pb-24"
      aria-labelledby="expertise-title"
    >
      <header className="flex flex-col max-w-screen-md w-[768px] items-start gap-6 relative flex-[0_0_auto] max-md:w-full">
        <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
          <h2
            id="expertise-title"
            className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Hanken_Grotesk-Bold',Helvetica] font-bold text-[#008080] text-[64px] text-center tracking-[-1.28px] leading-[72px] whitespace-nowrap max-md:text-[44px] max-md:leading-[52px] max-md:whitespace-normal"
          >
            {filter ? "Notre Expertise Ciblée" : "Notre Expertise"}
          </h2>
        </div>
        <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#3e4949] text-lg text-center tracking-[0] leading-7">
            {filter 
              ? "Découvrez en détail l'expertise que vous avez sélectionnée pour votre projet." 
              : "Alliant la fluidité créative à la rigueur technique des standards globaux. Nous construisons des expériences numériques uniques, robustes, élégantes et performantes."}
          </p>
        </div>
      </header>

      <div className={filter 
        ? "flex flex-col items-center w-[1152px] max-w-full gap-6 px-4" 
        : "grid grid-cols-3 grid-rows-[326px_354px] w-[1152px] h-fit gap-6 max-xl:w-full max-xl:grid-cols-2 max-xl:grid-rows-none max-md:grid-cols-1"
      }>
        {/* Carte UI/UX Design */}
        {showDesign && (
          <article className={`relative w-full h-fit flex flex-col items-start justify-center p-12 bg-[#faf9f9b2] rounded-xl overflow-hidden border border-solid border-[#bdc9c84c] shadow-[0px_4px_30px_#0100810d] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] max-md:p-7 ${
            filter ? "max-w-3xl" : "row-[1_/_2] col-[1_/_3] max-md:col-auto"
          }`}>
            <div
              className="absolute w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] top-px left-px bg-[linear-gradient(167deg,rgba(0,128,128,0.05)_0%,rgba(0,128,128,0)_100%)]"
              aria-hidden="true"
            />
            <div className="flex flex-col items-start justify-between relative self-stretch w-full flex-[0_0_auto] gap-6">
              <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                <Layout className="w-[30px] h-[30px] text-[#008080]" />
                <div className="flex flex-col items-start relative self-stretch w-full">
                  <h3 className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Hanken_Grotesk-SemiBold',Helvetica] font-semibold text-[#1b1c1c] text-[32px] tracking-[-0.32px] leading-10">
                    UI/UX Design
                  </h3>
                </div>
                <div className="flex flex-col max-w-lg w-full items-start relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#3e4949] text-base tracking-[0] leading-6">
                    Conception d&apos;interfaces intuitives centrées sur
                    l&apos;utilisateur. Nous créons des parcours fluides qui
                    respectent l&apos;identité de votre marque tout en optimisant
                    la conversion.
                  </p>
                </div>
              </div>
              <TagList
                tags={designTags}
                colorClass="bg-[#0080801a] text-[#1b1c1c]"
              />
            </div>
          </article>
        )}

        {/* Carte E-commerce */}
        {showEcommerce && (
          <article className={`relative w-full h-fit flex flex-col items-start justify-center p-12 bg-[#faf9f9b2] rounded-xl overflow-hidden border border-solid border-[#bdc9c84c] shadow-[0px_4px_30px_#0100810d] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] max-md:p-7 ${
            filter ? "max-w-3xl" : "row-[1_/_2] col-[3_/_4] max-xl:col-auto"
          }`}>
            <div
              className="absolute w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] top-px left-px bg-[linear-gradient(149deg,rgba(224,0,112,0.05)_0%,rgba(224,0,112,0)_100%)]"
              aria-hidden="true"
            />
            <div className="flex flex-col items-start justify-between relative self-stretch w-full flex-[0_0_auto] gap-6">
              <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                <ShoppingBag className="w-[30px] h-[30px] text-[#ff0081]" />
                <div className="flex flex-col items-start relative self-stretch w-full">
                  <h3 className="text-[#1b1c1c] text-[28px] tracking-[0] leading-9 relative flex items-center self-stretch mt-[-1.00px] [font-family:'Hanken_Grotesk-SemiBold',Helvetica] font-semibold">
                    E-commerce
                  </h3>
                </div>
                <div className="flex flex-col items-start relative self-stretch w-full">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#3e4949] text-base tracking-[0] leading-6">
                    Conception de plateformes de vente en ligne ergonomiques,
                    performantes, sécurisées et scalables.
                  </p>
                </div>
              </div>
              <TagList
                tags={ecommerceTags}
                colorClass="bg-[#ff00811a] text-[#1b1c1c]"
              />
            </div>
          </article>
        )}

        {/* Carte Développement web Fullstack */}
        {showDevelopment && (
          <article className={`relative w-full flex items-center justify-center gap-12 p-12 bg-[#01008108] rounded-xl overflow-hidden shadow-[0px_4px_30px_#0100810d] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] max-md:flex-col max-md:items-stretch max-md:p-7 ${
            filter ? "max-w-4xl h-auto" : "row-[2_/_3] col-[1_/_4] h-[354px] max-xl:col-[1_/_3] max-xl:h-auto max-md:col-auto"
          }`}>
            <div className="flex flex-col items-start gap-3 relative flex-1 grow">
              <Code2 className="w-[30px] h-[30px] text-[#4c52bc]" />
              <div className="flex flex-col items-start relative self-stretch w-full">
                <h3 className="relative flex items-center self-stretch mt-[-1.00px] [font-family:'Hanken_Grotesk-SemiBold',Helvetica] font-semibold text-[#1b1c1c] text-[32px] tracking-[-0.32px] leading-10">
                  Développement web Fullstack
                </h3>
              </div>
              <div className="flex flex-col items-start relative self-stretch w-full">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-Regular',Helvetica] font-normal text-[#3e4949] text-base tracking-[0] leading-6">
                  Architecture logicielle robuste. Du front-end réactif au back-end
                  sécurisé, nous utilisons les technologies modernes pour
                  construire des applications web sur mesure qui répondent à vos
                  besoins métier complexes.
                </p>
              </div>
              <div className="pt-3 pb-0 px-0 relative self-stretch w-full">
                <TagList
                  tags={developmentTags}
                  colorClass="bg-[#4c52bc1a] text-[#4c52bc]"
                />
              </div>
            </div>
            <div className="flex flex-col h-64 items-start justify-center relative flex-1 grow rounded-lg overflow-hidden">
              <img
                className="relative self-stretch w-full object-cover animate-fade-in"
                alt="Développeur en plein travail"
                src={devIllustration}
              />
            </div>
          </article>
        )}
      </div>

      {filter && (
        <div className="flex justify-center mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#008080] text-[#008080] px-8 py-3 text-sm font-semibold tracking-wide hover:bg-[#008080]/5 transition-colors duration-200 active:scale-95 cursor-pointer"
          >
            Voir toutes nos expertises
          </a>
        </div>
      )}
    </section>
  );
};
