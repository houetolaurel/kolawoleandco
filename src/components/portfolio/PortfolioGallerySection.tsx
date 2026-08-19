import { useMemo, useState } from "react";

const image1 = "/images/image1.jpg"; // E-commerce
const image2 = "/images/image5.jpg"; // Prototype
const image3 = "/images/image4.jpg"; // Mariage
const image4 = "/images/image3.jpg"; // Hohaya
const image5 = "/images/lmp.jpg"; // Location
const image6 = "/images/image6.jpg"; // Diaspora Connect

type Filter = "Tous" | "Sites Web" | "Prototype interactif" | "E-commerce";

const filters: Filter[] = [
  "Tous",
  "Sites Web",
  "Prototype interactif",
  "E-commerce",
];


const cardShell =
  "relative overflow-hidden rounded-xl border border-solid border-[#bdc9c84c] bg-[#ffffff01] shadow-[0px_10px_30px_-10px_#0100810d] transition-all duration-300";

const chipStyles = {
  commerce: "bg-[#ff0081] text-[#e3fffe] font-normal",
  web: "bg-[#008080] text-white font-normal",
  ui: "bg-[#19188c] text-white font-bold",
  pink: "bg-[#f6d4e533] text-[#ff0081] font-bold",
  teal: "bg-[#0080801a] text-white font-bold",
  blue: "bg-[#0100811a] text-[#010081] font-bold",
  react: "bg-[#00000001] text-[#008080] font-bold",
};

interface TagProps {
  children: string;
  variant: keyof typeof chipStyles;
}

const Tag = ({ children, variant }: TagProps) => (
  <span
    className={`inline-flex items-center rounded-full px-3 py-1 text-xs leading-4 ${chipStyles[variant]} ${
      variant === "pink" ||
      variant === "teal" ||
      variant === "blue" ||
      variant === "react"
        ? "backdrop-blur-[2px] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.10),inset_-1px_0_1px_rgba(0,0,0,0.08)]"
        : ""
    } [font-family:'Hanken_Grotesk-Bold',Helvetica]`}
  >
    {children}
  </span>
);

interface OverlayProps {
  tags: TagProps[];
  title: string;
  description?: string;
  large?: boolean;
}

const ProjectOverlay = ({
  tags,
  title,
  description,
  large = false,
}: OverlayProps) => (
  <>
    <div className="absolute inset-px bg-[#00000033]" />
    <div
      className={`absolute bottom-px left-px flex w-[calc(100%_-_2px)] flex-col items-start gap-2 bg-[linear-gradient(0deg,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0)_100%)] ${
        large ? "p-12" : "px-6 pb-6 pt-[26px]"
      }`}
    >
      <div className="flex flex-wrap items-start gap-2">
        {tags.map((tag) => (
          <Tag key={`${tag.children}-${tag.variant}`} {...tag} />
        ))}
      </div>
      <h3
        className={`m-0 text-white [font-family:'Hanken_Grotesk-SemiBold',Helvetica] font-semibold tracking-[0] ${
          large ? "text-[28px] leading-9" : "text-xl leading-7"
        }`}
      >
        {title}
      </h3>
      {description ? (
        <p className="m-0 text-base leading-6 text-[#ffffffe6] [font-family:'Manrope-Regular',Helvetica]">
          {description}
        </p>
      ) : null}
    </div>
  </>
);

export const PortfolioShowcaseSection = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("Tous");

  const visibleProjects = useMemo(
    () => ({
      ecommerce: activeFilter === "Tous" || activeFilter === "E-commerce",
      web: activeFilter === "Tous" || activeFilter === "Sites Web",
      prototype:
        activeFilter === "Tous" || activeFilter === "Prototype interactif",
    }),
    [activeFilter],
  );



  return (
    <section
      className="flex w-full flex-col items-center gap-[102px]"
      aria-label="Portfolio"
    >
      <div className="flex w-full max-w-screen-xl flex-col items-center gap-12 px-16">
        <nav
          className="flex w-full items-start justify-center gap-3"
          aria-label="Filtrer les projets"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`inline-flex flex-col items-center justify-center rounded-full border px-6 py-2 [font-family:'Hanken_Grotesk-SemiBold',Helvetica] text-sm font-semibold leading-5 tracking-[0.70px] transition-colors ${
                activeFilter === filter
                  ? "border-[#008080] bg-[#008080] text-white"
                  : "border-[#00808033] bg-transparent text-[#1b1c1c] hover:border-[#008080]"
              }`}
            >
              {filter}
            </button>
          ))}
        </nav>

        <div className="flex w-full flex-wrap items-start justify-center gap-6">
          {/* Projet 1: E-commerce */}
          {visibleProjects.ecommerce && (
            <article
              className={`${cardShell} h-[344px] w-[760px]`}
              aria-label="Projet e-commerce"
            >
              <img
                className="absolute left-px top-px h-[calc(100%_-_1px)] w-[calc(100%_-_1px)] object-cover"
                alt="Aperçu du site e-commerce"
                src={image1}
                width={760}
                height={344}
                loading="lazy"
                decoding="async"
              />
              <ProjectOverlay
                large
                tags={[
                  { children: "E-commerce", variant: "commerce" },
                  { children: "UX/UI", variant: "pink" },
                  { children: "Figma", variant: "pink" },
                ]}
                title="Conception de maquette pour site e-commerce"
                description="Optimisation de l'expérience d'achat pour une marque locale."
              />
            </article>
          )}

          {/* Projet 2: Diaspora Connect */}
          {visibleProjects.prototype && (
            <article
              className={`${cardShell} h-[344px] w-[368px]`}
              aria-label="Projet Diaspora Connect"
            >
              <img
                className="absolute left-px top-px h-[calc(100%_-_1px)] w-[calc(100%_-_1px)] object-cover"
                alt="Aperçu de Diaspora Connect"
                src={image6}
                width={368}
                height={344}
                loading="lazy"
                decoding="async"
              />
              <ProjectOverlay
                tags={[
                  { children: "UI/UX", variant: "ui" },
                  { children: "Figma", variant: "blue" },
                ]}
                title="Diaspora connect, FinTech app"
              />
            </article>
          )}

          <div className="flex w-[1152px] items-start gap-[31px]">
            <div className="flex flex-1 flex-col items-start gap-[31px]">
              {/* Projet 3: Site vitrine Mariage */}
              {visibleProjects.web && (
                <article
                  className={`${cardShell} h-[582px] w-full`}
                  aria-label="Projet site vitrine Mariage"
                >
                  <img
                    className="absolute left-px top-px h-[calc(100%_-_1px)] w-[calc(100%_-_1px)] object-cover"
                    alt="Aperçu du site mariage"
                    src={image3}
                    width={800}
                    height={582}
                    loading="lazy"
                    decoding="async"
                  />
                  <ProjectOverlay
                    tags={[
                      { children: "Developpement web", variant: "web" },
                      { children: "React", variant: "teal" },
                    ]}
                    title="Site vitrine pour agence d'organisation de mariage"
                  />
                </article>
              )}

              {/* Projet 4: Plateforme de prestation */}
              {visibleProjects.prototype && (
                <article
                  className={`${cardShell} h-[471px] w-full`}
                  aria-label="Projet plateforme de services"
                >
                  <img
                    className="absolute left-px top-px h-[calc(100%_-_1px)] w-[calc(100%_-_1px)] object-cover"
                    alt="Aperçu de la plateforme de services"
                    src={image2}
                    width={800}
                    height={471}
                    loading="lazy"
                    decoding="async"
                  />
                  <ProjectOverlay
                    tags={[
                      { children: "UI/UX", variant: "ui" },
                      { children: "Figma", variant: "blue" },
                    ]}
                    title="Plateforme de prestation de service avec dashboard personnalisé"
                  />
                </article>
              )}
            </div>

            {/* Projet 5: Hohaya */}
            {visibleProjects.web && (
              <article
                className={`${cardShell} h-[1084px] w-[396px]`}
                aria-label="Projet Hohaya"
              >
                <img
                  className="absolute left-px top-px h-[calc(100%_-_1px)] w-[calc(100%_-_1px)] object-cover"
                  alt="Aperçu du site Hohaya"
                  src={image4}
                  width={396}
                  height={1084}
                  loading="lazy"
                  decoding="async"
                />
                <ProjectOverlay
                  tags={[
                    { children: "UI/UX", variant: "ui" },
                    { children: "Figma", variant: "blue" },
                  ]}
                  title="HOHAYA site web mobile-first de location de maison"
                />
              </article>
            )}
          </div>

          {/* Projet 6: Location de maison */}
          {visibleProjects.web && (
            <article
              className={`${cardShell} h-[435px] w-[1152px]`}
              aria-label="Projet plateforme de location"
            >
              <img
                className="absolute left-0 top-0 h-full w-full object-cover"
                alt="Aperçu de la plateforme de location"
                src={image5}
                width={1152}
                height={435}
                loading="lazy"
                decoding="async"
              />
              <ProjectOverlay
                large
                tags={[
                  { children: "Developpement web", variant: "web" },
                  { children: "React", variant: "react" },
                ]}
                title="Plateforme de Location de maison"
                description="Création d'un outil de gestion immobilière sur-mesure simplifiant les flux complexes avec une interface intuitive et épurée."
              />
            </article>
          )}
        </div>
      </div>
    </section>
  );
};
