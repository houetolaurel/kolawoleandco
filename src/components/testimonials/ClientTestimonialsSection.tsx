import { Quote } from "lucide-react";
const ceo1 = "/images/ceo1.jpg";
const ceo2 = "/images/ceo2.jpg";
const ceo3 = "/images/ceo3.jpg";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  isFeatured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: "uriel-atihou",
    quote:
      "Ce qui nous a marqué avec Kolawolé & co, c'est leur capacité à rendre la réservation simple sans jamais sacrifier l'esthétique. Le design afro-minimaliste donne à chaque annonce une présentation soignée.",
    name: "Uriel Atihou",
    role: "CEO, LMP - Location Maison plus",
    avatar: ceo1,
    isFeatured: true,
  },
  {
    id: "merveil-houennagnon",
    quote:
      "Une collaboration fluide et des résultats qui dépassent nos attentes. Leur expertise technique est indéniable.",
    name: "Merveil HOUENAGNON",
    role: "CEO, Data Afrique Hub",
    avatar: ceo2,
  },
  {
    id: "jean-dupont",
    quote:
      "Leur souci du détail et leur approche centrée sur l'utilisateur ont révolutionné notre application mobile.",
    name: "Jean Dupont",
    role: "CEO, Hohaya",
    avatar: ceo3,
  },
];

export const ClientTestimonialsSection = () => {
  return (
    <section aria-label="Témoignages clients" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {testimonials.map((item) => (
          <article
            key={item.id}
            className={`flex flex-col justify-between p-6 md:p-8 rounded-xl border border-[#BDC9C8]/30 bg-white/70 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-md ${
              item.isFeatured ? "md:col-span-2" : ""
            }`}
          >
            <div className="space-y-4">
              <Quote className="h-6 w-6 text-[#008080]/40 transform rotate-180" />
              <blockquote className="text-[#1B1C1C]">
                <p
                  className={`font-sans ${
                    item.isFeatured
                      ? "text-xl md:text-2xl lg:text-[28px] font-semibold leading-snug md:leading-9"
                      : "text-base md:text-lg font-normal leading-relaxed"
                  }`}
                >
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
                className={`rounded-full object-cover border-2 border-[#008080] ${
                  item.isFeatured ? "w-16 h-16" : "w-12 h-12"
                }`}
              />
              <div className="flex flex-col">
                <span className="font-semibold text-sm md:text-base text-[#1B1C1C] tracking-wide">
                  {item.name}
                </span>
                <span className="text-xs md:text-sm text-[#3E4949]">
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
