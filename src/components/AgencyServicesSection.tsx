import { type ComponentType } from "react";
import accueilImage from "../assets/accueil_image.jpg";
import {
  PenTool,
  Code2,
  Check,
  Briefcase,
  TrendingUp,
  type LucideProps,
} from "lucide-react";
import {
  InstagramIcon,
  TwitterIcon,
  GithubIcon,
  DribbbleIcon,
} from "./BrandIcons";

type IconComponent = ComponentType<LucideProps>;

const uiFeatures = [
  "Recherche Utilisateur",
  "Prototypage",
  "Design System",
  "Expérience utilisateur",
];

const developmentFeatures = [
  "Applications Sur-Mesure",
  "Solutions E-commerce",
  "Intégration API",
  "Site vitrine",
];

const socialLinks = [
  { label: "Instagram", icon: InstagramIcon },
  { label: "LinkedIn", icon: Briefcase },
  { label: "X", icon: TwitterIcon },
  { label: "GitHub", icon: GithubIcon },
  { label: "Dribbble", icon: DribbbleIcon },
];

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconComponent;
  iconBg: string;
  iconColor: string;
  cardBg: string;
  checkBg: string;
  checkColor: string;
  features: string[];
}

const ServiceCard = ({
  title,
  description,
  icon: MainIcon,
  iconBg,
  iconColor,
  cardBg,
  checkBg,
  checkColor,
  features,
}: ServiceCardProps) => (
  <article className={`flex flex-col gap-6 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-[#bdc9c833] backdrop-blur-md ${cardBg}`}>
    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconBg}`}>
      <MainIcon className={`h-7 w-7 ${iconColor}`} />
    </div>
    <div>
      <h3 className="text-2xl font-bold text-[#1b1c1c]">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-[#3e4949]">{description}</p>
    </div>
    <ul className="flex flex-col gap-3 pt-2">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-3">
          <div className={`flex h-5 w-5 items-center justify-center rounded-full ${checkBg} ${checkColor}`}>
            <Check className="h-3.5 w-3.5 stroke-[3]" />
          </div>
          <span className="text-sm font-medium text-[#1b1c1c]">{feature}</span>
        </li>
      ))}
    </ul>
  </article>
);

export const AgencyServicesSection = () => {
  return (
    <section className="w-full bg-[#faf9f9] py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">

        {/* HERO SECTION */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Texte de gauche */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <h1 className="text-4xl font-extrabold leading-tight text-[#1b1c1c] sm:text-5xl lg:text-6xl">
              Transformons votre vision en{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#008080]">réalité digitale</span>
                <span className="absolute bottom-[4px] left-0 z-0 h-[10px] w-full bg-[#dbe2ff]" />
              </span>
            </h1>
            <p className="max-w-xl text-lg text-[#3e4949]">
              Une approche sur-mesure alliant design d'exception et ingénierie de pointe
              pour créer des expériences digitales qui marquent les esprits et génèrent de la valeur.
            </p>
          </div>

          {/* Carte visuelle de droite */}
          <div className="relative flex justify-center lg:col-span-5 pt-6 lg:pt-0">
            <div className="relative w-full max-w-md">
              {/* Image card with slight rotation */}
              <div className="rotate-[3deg] rounded-2xl border border-white bg-white p-4 shadow-xl">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-200">
                  <img
                    src={accueilImage}
                    alt="Aperçu d'un projet réalisé par Kolawolé & Co."
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              {/* Badge positioned absolutely, unrotated */}
              <div className="absolute -bottom-6 -left-6 flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-4 shadow-lg z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#010081]">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase text-slate-500 tracking-wider">Croissance</span>
                  <p className="text-2xl font-bold text-[#010081] leading-none mt-1">+120%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION EXPERTISE */}
        <div className="mt-28 flex flex-col items-center gap-12 text-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#1b1c1c] sm:text-4xl">Notre Expertise</h2>
            <p className="mt-3 text-lg text-[#3e4949]">
              Des solutions complètes pour répondre aux défis complexes de l'ère numérique.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-8 text-left md:grid-cols-2">
            <ServiceCard
              title="Design UI/UX"
              description="Création d'interfaces intuitives et esthétiques, centrées sur l'utilisateur, pour une expérience fluide et engageante qui reflète l'ADN de votre marque."
              icon={PenTool}
              iconBg="bg-[#00808012]"
              iconColor="text-[#008080]"
              cardBg="bg-gradient-to-br from-[#00808003] to-[#0080800c]"
              checkBg="bg-[#00808012]"
              checkColor="text-[#008080]"
              features={uiFeatures}
            />
            <ServiceCard
              title="Développement Web"
              description="Architectures robustes et évolutives, utilisant les dernières technologies pour des performances optimales et une sécurité sans compromis."
              icon={Code2}
              iconBg="bg-[#0100810d]"
              iconColor="text-[#010081]"
              cardBg="bg-gradient-to-br from-[#01008103] to-[#0100810a]"
              checkBg="bg-[#0100810d]"
              checkColor="text-[#010081]"
              features={developmentFeatures}
            />
          </div>
        </div>

        {/* BANNÈRE RÉSEAUX SOCIAUX */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#bdc9c84c] bg-[#f5f3f3] p-8 md:flex-row md:p-10">
          <div>
            <h3 className="text-2xl font-bold text-[#1b1c1c]">Rejoignez-nous sur les réseaux</h3>
            <p className="mt-1 text-base text-[#3e4949]">
              Suivez notre actualité et découvrez nos coulisses au quotidien.
            </p>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  onClick={(e) => e.preventDefault()}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00808008] hover:bg-[#00808012] shadow-sm transition-transform hover:scale-110 duration-200"
                >
                  <Icon className="h-5 w-5 text-[#006565]" />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};