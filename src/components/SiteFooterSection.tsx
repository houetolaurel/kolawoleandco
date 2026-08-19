import { type FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import group from "../assets/group.svg";

const expertiseLinks = [
  { label: "Design", href: "/?expertise=design" },
  { label: "Développement", href: "/?expertise=developpement" },
  { label: "E-commerce", href: "/?expertise=ecommerce" },
];

const legalLinks = [
  { label: "Mentions Légales", href: "/mentions-legales" },
  { label: "Contact", href: "/contact" },
  { label: "À Propos", href: "/a-propos" },
];

export const SiteFooterSection = () => {
  const [email, setEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email.trim()) {
      setHasSubmitted(true);
    }
  };

  return (
    <footer className="w-full bg-[#f5f3f3]/80 py-16 border-t border-[#bdc9c84c]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12">
          {/* Logo column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="relative w-[183px] h-[61px]">
              <img
                className="w-full h-full object-contain"
                alt="Kolawolé &amp; co."
                src={group}
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#3e4949]">
              Agence digitale alliant robustesse securité et standards technologiques mondiaux.
            </p>
          </div>

          {/* Expertise column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-wider text-[#1b1c1c] uppercase">Expertise</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {expertiseLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-semibold text-[#3e4949] hover:text-[#008080] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal & Contact column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold tracking-wider text-[#1b1c1c] uppercase">Légal &amp; Contact</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-semibold text-[#3e4949] hover:text-[#008080] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletters column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-sm font-bold tracking-wider text-[#1b1c1c] uppercase">Newsletters</h3>
            <p className="text-sm leading-relaxed text-[#3e4949]">
              Nouveautés, projets récents et conseils utiles pour faire grandir votre activité en ligne.
            </p>
            <form onSubmit={handleSubmit} className="relative mt-2 flex items-center">
              <input
                type="email"
                required
                placeholder="Votre email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setHasSubmitted(false);
                }}
                className="w-full rounded-full border border-gray-300 bg-white/50 px-6 py-3 pr-12 text-sm text-[#1b1c1c] shadow-sm outline-none transition-all focus:border-[#008080] focus:bg-white"
              />
              <button
                type="submit"
                className="absolute right-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#008080] text-white transition-transform hover:scale-105 active:scale-95"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            {hasSubmitted && (
              <p className="text-xs text-green-600 mt-1">
                Votre inscription à la newsletter a été enregistrée.
              </p>
            )}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-16 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-slate-500">
            © 2026 Kolawolé &amp; Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
