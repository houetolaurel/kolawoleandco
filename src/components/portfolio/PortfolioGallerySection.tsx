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

const chipStyles = {
  commerce: "bg-[#ff0081] text-white font-medium",
  web: "bg-[#008080] text-white font-medium",
  ui: "bg-[#19188c] text-white font-medium",
  pink: "bg-[#ff008126] text-white font-semibold backdrop-blur-md border border-white/20",
  teal: "bg-[#00808033] text-white font-semibold backdrop-blur-md border border-white/20",
  blue: "bg-[#01008133] text-white font-semibold backdrop-blur-md border border-white/20",
  react: "bg-black/30 text-white font-semibold backdrop-blur-md border border-white/20",
};

interface TagProps {
  children: string;
  variant: keyof typeof chipStyles;
}

const Tag = ({ children, variant }: TagProps) => (
  <span
    className={`inline-flex items-center rounded-full px-3 py-1 text-xs leading-4 ${chipStyles[variant]}`}
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
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/40" />
    <div
      className={`absolute bottom-0 left-0 right-0 flex flex-col items-start gap-2.5 z-10 ${
        large ? "p-6 sm:p-8 md:p-10" : "p-5 sm:p-6"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        {tags.map((tag) => (
          <Tag key={`${tag.children}-${tag.variant}`} {...tag} />
        ))}
      </div>
      <h3
        className={`font-semibold text-white tracking-tight leading-snug ${
          large ? "text-xl sm:text-2xl md:text-3xl" : "text-lg sm:text-xl"
        }`}
      >
        {title}
      </h3>
      {description && (
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-white/80 max-w-xl line-clamp-2 sm:line-clamp-none">
          {description}
        </p>
      )}
    </div>
  </>
);

const cardShell =
  "group relative overflow-hidden rounded-2xl border border-[#bdc9c84c] shadow-[0px_8px_30px_#0100810d] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1";

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
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32 flex flex-col items-center gap-10 sm:gap-14"
      aria-label="Portfolio"
    >
      {/* Filtres réactifs */}
      <nav
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full"
        aria-label="Filtrer les projets"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
              activeFilter === filter
                ? "bg-[#008080] text-white shadow-md"
                : "border border-[#00808033] bg-transparent text-[#1b1c1c] hover:border-[#008080] hover:bg-[#0080800d]"
            }`}
          >
            {filter}
          </button>
        ))}
      </nav>

      {/* Grille de projets fluide et responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 w-full">
        {/* Projet 1: E-commerce */}
        {visibleProjects.ecommerce && (
          <article
            className={`${cardShell} lg:col-span-8 min-h-[300px] h-[340px] sm:h-[400px]`}
            aria-label="Projet e-commerce"
          >
            <img
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Aperçu du site e-commerce"
              src={image1}
              width={760}
              height={400}
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
              description="Optimisation complète de l'expérience d'achat et du tunnel de conversion pour une marque locale."
            />
          </article>
        )}

        {/* Projet 2: Diaspora Connect */}
        {visibleProjects.prototype && (
          <article
            className={`${cardShell} lg:col-span-4 min-h-[300px] h-[340px] sm:h-[400px]`}
            aria-label="Projet Diaspora Connect"
          >
            <img
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Aperçu de Diaspora Connect"
              src={image6}
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
            />
            <ProjectOverlay
              tags={[
                { children: "UI/UX", variant: "ui" },
                { children: "Figma", variant: "blue" },
              ]}
              title="Diaspora connect, FinTech app"
              description="Application mobile financière pour la diaspora africaine."
            />
          </article>
        )}

        {/* Projet 3: Site vitrine Mariage */}
        {visibleProjects.web && (
          <article
            className={`${cardShell} lg:col-span-6 min-h-[300px] h-[340px] sm:h-[400px]`}
            aria-label="Projet site vitrine Mariage"
          >
            <img
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Aperçu du site mariage"
              src={image3}
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
            />
            <ProjectOverlay
              tags={[
                { children: "Développement web", variant: "web" },
                { children: "React", variant: "teal" },
              ]}
              title="Site vitrine pour agence d'organisation de mariage"
              description="Expérience immersive avec animations fluides et galerie élégante."
            />
          </article>
        )}

        {/* Projet 4: Plateforme de prestation */}
        {visibleProjects.prototype && (
          <article
            className={`${cardShell} lg:col-span-6 min-h-[300px] h-[340px] sm:h-[400px]`}
            aria-label="Projet plateforme de services"
          >
            <img
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Aperçu de la plateforme de services"
              src={image2}
              width={600}
              height={400}
              loading="lazy"
              decoding="async"
            />
            <ProjectOverlay
              tags={[
                { children: "UI/UX", variant: "ui" },
                { children: "Figma", variant: "blue" },
              ]}
              title="Plateforme de prestation de services"
              description="Dashboard personnalisé et gestion simplifiée des réservations."
            />
          </article>
        )}

        {/* Projet 5: Hohaya */}
        {visibleProjects.web && (
          <article
            className={`${cardShell} lg:col-span-5 min-h-[300px] h-[340px] sm:h-[400px]`}
            aria-label="Projet Hohaya"
          >
            <img
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Aperçu du site Hohaya"
              src={image4}
              width={500}
              height={400}
              loading="lazy"
              decoding="async"
            />
            <ProjectOverlay
              tags={[
                { children: "UI/UX", variant: "ui" },
                { children: "Mobile-first", variant: "blue" },
              ]}
              title="HOHAYA - Location immobilière mobile-first"
              description="Plateforme intuitive de recherche et de réservation de logements."
            />
          </article>
        )}

        {/* Projet 6: Location de maison */}
        {visibleProjects.web && (
          <article
            className={`${cardShell} lg:col-span-7 min-h-[300px] h-[340px] sm:h-[400px]`}
            aria-label="Projet plateforme de location"
          >
            <img
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              alt="Aperçu de la plateforme de location"
              src={image5}
              width={700}
              height={400}
              loading="lazy"
              decoding="async"
            />
            <ProjectOverlay
              large
              tags={[
                { children: "Développement web", variant: "web" },
                { children: "React", variant: "react" },
              ]}
              title="Plateforme de gestion immobilière"
              description="Outil de gestion sur-mesure simplifiant les flux complexes avec une interface moderne et sécurisée."
            />
          </article>
        )}
      </div>
    </section>
  );
};
