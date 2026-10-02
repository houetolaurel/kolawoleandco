import { Quote } from "lucide-react";
const ceo1 = "/images/ceo1.jpg";
const merveilImg = "/images/merveil.jpg";
const boniZoulImg = "/images/boni_zoul.jpg";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: "boni-zoul",
    quote:
      "L'accompagnement personnalisé et la couverture photo/vidéo de ma soutenance à l'IFRI par Lumen Agency ont été tout simplement impeccables. Une qualité d'image exceptionnelle, une attention aux moindres détails et un suivi très professionnel !",
    name: "BONI Zoul",
    role: "Étudiant Diplômé, IFRI (Juillet 2026)",
    avatar: boniZoulImg,
  },
  {
    id: "uriel-atihou",
    quote:
      "Ce qui nous a marqué avec Lumen Agency, c'est leur capacité à rendre la réservation simple sans jamais sacrifier l'esthétique. Le design soigné donne à chaque annonce une présentation haut de gamme.",
    name: "Uriel Atihou",
    role: "CEO, LMP - Location Maison plus",
    avatar: ceo1,
  },
  {
    id: "merveil-houenagnon",
    quote:
      "Une collaboration fluide et des résultats qui dépassent nos attentes. Leur expertise technique et leur rigueur créative sont indéniables.",
    name: "Merveil HOUENAGNON",
    role: "CEO, Data Afrique Hub",
    avatar: merveilImg,
  },
];

export const ClientTestimonialsSection = () => {
  return (
    <section aria-label="Témoignages clients" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
        {testimonials.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-[#BDC9C8]/30 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <div className="space-y-4">
              <Quote className="h-6 w-6 text-[#008080]/50 transform rotate-180" />
              <blockquote className="text-[#1B1C1C]">
                <p className="font-sans text-sm sm:text-base lg:text-lg font-normal leading-relaxed">
                  &quot;{item.quote}&quot;
                </p>
              </blockquote>
            </div>

            <footer className="flex items-center gap-4 mt-8 pt-4 border-t border-[#BDC9C8]/20">
              <img
                src={item.avatar}
                alt={`Portrait de ${item.name}`}
                width={64}
                height={64}
                loading="lazy"
                decoding="async"
                className="rounded-full object-cover object-top border-2 border-[#008080] w-14 h-14 shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-sm sm:text-base text-[#1B1C1C] tracking-wide">
                  {item.name}
                </span>
                <span className="text-xs sm:text-sm text-[#3E4949]">
                  {item.role}
                </span>
              </div>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};
