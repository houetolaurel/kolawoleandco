import { useSearchParams } from "react-router-dom";
import { Layout, ShoppingBag, Code2 } from "lucide-react";

const devIllustration = "/images/Illustration dev.jpg";

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
  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 w-full">
    {tags.map((tag) => (
      <span
        key={tag}
        className={`inline-flex items-center px-3 py-1 rounded-full ${colorClass}`}
      >
        <span className="font-semibold text-xs sm:text-sm tracking-wide leading-5 whitespace-nowrap">
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
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-24 sm:pb-36 flex flex-col items-center gap-12 sm:gap-16"
      aria-labelledby="expertise-title"
    >
      <header className="flex flex-col max-w-2xl w-full items-center gap-4 sm:gap-6 text-center px-2">
        <h1
          id="expertise-title"
          className="font-bold text-[#008080] text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight"
        >
          {filter ? "Notre Expertise Ciblée" : "Notre Expertise"}
        </h1>
        <p className="text-base sm:text-lg text-[#3e4949] leading-relaxed max-w-xl">
          {filter
            ? "Découvrez en détail l'expertise que vous avez sélectionnée pour votre projet."
            : "Alliant la fluidité créative à la rigueur technique des standards globaux. Nous construisons des expériences numériques uniques, robustes, élégantes et performantes."}
        </p>
      </header>

      <div
        className={
          filter
            ? "flex flex-col items-center w-full max-w-4xl gap-6 sm:gap-8"
            : "grid grid-cols-1 lg:grid-cols-3 w-full max-w-6xl gap-6 sm:gap-8"
        }
      >
        {/* Carte UI/UX Design */}
        {showDesign && (
          <article
            className={`relative w-full flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-[#faf9f9b2] rounded-2xl overflow-hidden border border-[#bdc9c84c] shadow-[0px_4px_30px_#0100810d] backdrop-blur-[10px] gap-6 ${
              filter ? "max-w-3xl" : "lg:col-span-2"
            }`}
          >
            <div
              className="absolute inset-0 bg-[linear-gradient(167deg,rgba(0,128,128,0.05)_0%,rgba(0,128,128,0)_100%)] pointer-events-none"
              aria-hidden="true"
            />
            <div className="flex flex-col items-start gap-4 relative z-10 w-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#00808012]">
                <Layout className="w-6 h-6 text-[#008080]" />
              </div>
              <h2 className="font-semibold text-[#1b1c1c] text-2xl sm:text-3xl tracking-tight leading-snug">
                UI/UX Design
              </h2>
              <p className="text-[#3e4949] text-sm sm:text-base leading-relaxed max-w-xl">
                Conception d'interfaces intuitives centrées sur l'utilisateur. Nous
                créons des parcours fluides qui respectent l'identité de votre marque
                tout en optimisant la conversion.
              </p>
            </div>
            <div className="relative z-10 pt-2">
              <TagList
                tags={designTags}
                colorClass="bg-[#0080801a] text-[#006565]"
              />
            </div>
          </article>
        )}

        {/* Carte E-commerce */}
        {showEcommerce && (
          <article
            className={`relative w-full flex flex-col justify-between p-6 sm:p-8 lg:p-10 bg-[#faf9f9b2] rounded-2xl overflow-hidden border border-[#bdc9c84c] shadow-[0px_4px_30px_#0100810d] backdrop-blur-[10px] gap-6 ${
              filter ? "max-w-3xl" : "lg:col-span-1"
            }`}
          >
            <div
              className="absolute inset-0 bg-[linear-gradient(149deg,rgba(224,0,112,0.05)_0%,rgba(224,0,112,0)_100%)] pointer-events-none"
              aria-hidden="true"
            />
            <div className="flex flex-col items-start gap-4 relative z-10 w-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff00811a]">
                <ShoppingBag className="w-6 h-6 text-[#ff0081]" />
              </div>
              <h2 className="font-semibold text-[#1b1c1c] text-2xl sm:text-3xl tracking-tight leading-snug">
                E-commerce
              </h2>
              <p className="text-[#3e4949] text-sm sm:text-base leading-relaxed">
                Conception de plateformes de vente en ligne ergonomiques,
                performantes, sécurisées et hautement scalables.
              </p>
            </div>
            <div className="relative z-10 pt-2">
              <TagList
                tags={ecommerceTags}
                colorClass="bg-[#ff00811a] text-[#c20063]"
              />
            </div>
          </article>
        )}

        {/* Carte Développement web Fullstack */}
        {showDevelopment && (
          <article
            className={`relative w-full flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 p-6 sm:p-8 lg:p-10 bg-[#01008108] rounded-2xl overflow-hidden border border-[#bdc9c84c] shadow-[0px_4px_30px_#0100810d] backdrop-blur-[10px] ${
              filter ? "max-w-4xl" : "lg:col-span-3"
            }`}
          >
            <div className="flex flex-col items-start justify-between gap-6 flex-1 w-full relative z-10">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4c52bc1a]">
                  <Code2 className="w-6 h-6 text-[#4c52bc]" />
                </div>
                <h2 className="font-semibold text-[#1b1c1c] text-2xl sm:text-3xl tracking-tight leading-snug">
                  Développement web Fullstack
                </h2>
                <p className="text-[#3e4949] text-sm sm:text-base leading-relaxed max-w-xl">
                  Architecture logicielle robuste. Du front-end réactif au back-end
                  sécurisé, nous utilisons les technologies modernes pour
                  construire des applications web sur mesure qui répondent à vos
                  besoins métier complexes.
                </p>
              </div>
              <TagList
                tags={developmentTags}
                colorClass="bg-[#4c52bc1a] text-[#373c8e]"
              />
            </div>

            <div className="w-full lg:w-2/5 h-48 sm:h-64 lg:h-72 shrink-0 rounded-xl overflow-hidden shadow-sm relative z-10 border border-[#bdc9c833]">
              <img
                className="w-full h-full object-cover animate-fade-in"
                alt="Illustration du développement web"
                src={devIllustration}
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>
        )}
      </div>

      {filter && (
        <div className="flex justify-center mt-4">
          <a
            href="/expertise"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#008080] text-[#008080] px-8 py-3 text-sm font-semibold tracking-wide hover:bg-[#008080]/5 transition-colors duration-200 active:scale-95 cursor-pointer"
          >
            Voir toutes nos expertises
          </a>
        </div>
      )}
    </section>
  );
};
