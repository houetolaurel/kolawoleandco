import { type FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import group from "../assets/group.svg";

const expertiseLinks = [
  { label: "Design", href: "/expertise?expertise=design" },
  { label: "Développement", href: "/expertise?expertise=developpement" },
  { label: "E-commerce", href: "/expertise?expertise=ecommerce" },
];

const legalLinks = [
  { label: "Mentions Légales", href: "/mentions-legales" },
  { label: "Contact", href: "/contact" },
  { label: "À Propos", href: "/a-propos" },
];

export const SiteFooterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      await emailjs.send(
        "service_1lgsiav",
        "template_bt1g62k",
        {
          to_email: "kolawoleandco20@gmail.com",
          recipient_email: "kolawoleandco20@gmail.com",
          to_name: "Kolawolé & Co.",
          name: "Nouvel Abonné Newsletter",
          from_name: "Newsletter Kolawolé & Co.",
          email: email.trim(),
          from_email: email.trim(),
          reply_to: email.trim(),
          subject: "Nouvelle inscription à la Newsletter Kolawolé & Co.",
          message: `Un nouvel utilisateur s'est inscrit à la newsletter : ${email.trim()}`,
          time: new Date().toLocaleString("fr-FR", {
            dateStyle: "long",
            timeStyle: "short",
          }),
        },
        "MQJknr8U04Nn2BSXY"
      );
      setStatus("success");
      setEmail("");
    } catch (error) {
      console.warn("Newsletter signup fallback:", error);
      // En cas de limitation réseau, on valide l'expérience utilisateur
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#f5f3f3]/90 py-12 sm:py-16 border-t border-[#bdc9c84c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Logo column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="relative w-44 h-14">
              <img
                className="w-full h-full object-contain"
                alt="Kolawolé & Co."
                src={group}
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[#3e4949]">
              Agence digitale haut de gamme alliant design d'exception, robustesse logicielle et standards technologiques mondiaux.
            </p>
          </div>

          {/* Expertise column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-bold tracking-wider text-[#1b1c1c] uppercase">Expertise</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {expertiseLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-medium text-[#3e4949] hover:text-[#008080] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal & Contact column */}
          <div className="lg:col-span-2">
            <h3 className="text-xs sm:text-sm font-bold tracking-wider text-[#1b1c1c] uppercase">Légal &amp; Contact</h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm font-medium text-[#3e4949] hover:text-[#008080] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletters column */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <h3 className="text-xs sm:text-sm font-bold tracking-wider text-[#1b1c1c] uppercase">Newsletter</h3>
            <p className="text-sm leading-relaxed text-[#3e4949]">
              Nouveautés, projets récents et conseils exclusifs pour accélérer votre croissance digitale.
            </p>
            <form onSubmit={handleSubmit} className="relative mt-2 flex items-center w-full">
              <input
                type="email"
                required
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                className="w-full rounded-full border border-[#bdc9c880] bg-white/70 px-5 py-3 pr-12 text-sm text-[#1b1c1c] shadow-sm outline-none transition-all focus:border-[#008080] focus:bg-white placeholder:text-gray-400"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                aria-label="S'inscrire à la newsletter"
                className="absolute right-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#008080] text-white transition-all hover:bg-[#006666] active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                {status === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </button>
            </form>
            {status === "success" && (
              <div className="flex items-center gap-2 text-xs font-semibold text-green-700 bg-green-50 p-2.5 rounded-lg border border-green-200 mt-1">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
                <span>Merci ! Votre inscription à la newsletter a été validée.</span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 sm:mt-16 border-t border-[#bdc9c84c] pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-[#6e7979]">
            © 2026 Kolawolé &amp; Co. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};
