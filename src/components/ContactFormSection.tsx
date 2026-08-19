import { type FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Send, ChevronDown, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const contactDetails = [
  {
    label: "Email",
    value: "kolawoleandco20@gmail.com",
    icon: Mail,
    href: "mailto:kolawoleandco20@gmail.com",
  },
  {
    label: "WhatsApp et Téléphone",
    value: "+229 01 97 45 02 61",
    icon: Phone,
    href: "tel:+2290197450261",
  },
];

const subjects = [
  { value: "", label: "Sélectionnez un sujet" },
  { value: "Création de site web", label: "Création de site web" },
  { value: "Application web", label: "Application web" },
  { value: "Identité visuelle", label: "Identité visuelle" },
  { value: "Autre demande", label: "Autre demande" },
];

export const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "loading", message: "Envoi de votre message..." });

    // Paramètres transmis au template EmailJS ({{name}}, {{email}}, {{subject}}, {{message}}, {{time}})
    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString("fr-FR", {
        dateStyle: "long",
        timeStyle: "short",
      }),
    };

    try {
      await emailjs.send(
        "service_1lgsiav",
        "template_bt1g62k",
        templateParams,
        "MQJknr8U04Nn2BSXY"
      );

      setStatus({
        type: "success",
        message: "Votre message a été envoyé avec succès !",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erreur d'envoi EmailJS:", error);
      setStatus({
        type: "error",
        message: "Une erreur s'est produite lors de l'envoi. Veuillez réessayer.",
      });
    }
  };

  return (
    <section
      className="relative flex w-full flex-col items-center px-0 pb-16 pt-24 sm:pb-20 sm:pt-[120px]"
      aria-labelledby="contact-heading"
    >
      <div className="relative flex w-full max-w-screen-xl flex-col items-start px-0 pb-10 sm:pb-16 pt-0">
        <div className="relative flex w-full max-w-screen-xl flex-col items-center gap-6 px-4 py-0 sm:px-8 lg:px-16">
          <div className="relative flex w-full flex-col items-center">
            <h2
              id="contact-heading"
              className="relative mt-[-1px] flex w-fit items-center justify-center text-center font-bold leading-[1.1] tracking-[-0.8px] sm:tracking-[-1.28px] text-[#008080] text-[36px] sm:text-[52px] lg:text-[64px]"
            >
              Discutons de votre projet
            </h2>
          </div>
          <div className="relative flex w-full max-w-2xl flex-col items-center">
            <p className="relative mt-[-1px] text-center text-lg font-normal leading-7 text-[#3e4949]">
              Notre équipe est prête à transformer vos idées en réalité numérique. Remplissez le formulaire ci-dessous ou utilisez nos coordonnées directes.
            </p>
          </div>
        </div>
      </div>

      <div className="grid h-fit w-full max-w-screen-xl grid-cols-1 gap-8 px-4 py-0 sm:px-8 lg:grid-cols-12 lg:px-16">
        {/* Formulaire Principal */}
        <form
          className="relative flex h-fit w-full flex-col items-start justify-center overflow-hidden rounded-2xl bg-[#faf9f9b2] p-6 shadow-[0px_8px_32px_#0100810d] backdrop-blur-[10px] sm:p-10 lg:col-span-8 lg:p-12"
          onSubmit={handleSubmit}
        >
          <div className="relative flex w-full flex-col items-start px-0 pb-8 pt-0">
            <h3 className="text-[28px] font-semibold leading-9 text-[#1b1c1c]">
              Envoyez-nous un message
            </h3>
          </div>

          <div className="relative flex w-full flex-col gap-6">
            <div className="flex w-full flex-col gap-6 sm:flex-row">
              {/* Nom */}
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="text-sm font-semibold tracking-[0.7px] text-[#3e4949]"
                  htmlFor="contact-name"
                >
                  Nom complet
                </label>
                <div className="border-b border-[#6e7979] focus-within:border-[#008080] transition-colors duration-200 py-3">
                  <input
                    id="contact-name"
                    className="w-full bg-transparent text-base text-[#1b1c1c] outline-none placeholder:text-gray-400"
                    placeholder="Jean Dupont"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                  />
                </div>
              </div>

              {/* Email Client */}
              <div className="flex flex-1 flex-col gap-2">
                <label
                  className="text-sm font-semibold tracking-[0.7px] text-[#3e4949]"
                  htmlFor="contact-email"
                >
                  Adresse e-mail
                </label>
                <div className="border-b border-[#6e7979] focus-within:border-[#008080] transition-colors duration-200 py-3">
                  <input
                    id="contact-email"
                    className="w-full bg-transparent text-base text-[#1b1c1c] outline-none placeholder:text-gray-400"
                    placeholder="jean@exemple.com"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    required
                  />
                </div>
              </div>
            </div>

            {/* Sujet */}
            <div className="flex flex-col gap-2 pt-2">
              <label
                className="text-sm font-semibold tracking-[0.7px] text-[#3e4949]"
                htmlFor="contact-subject"
              >
                Sujet
              </label>
              <div className="relative flex items-center border-b border-[#6e7979] focus-within:border-[#008080] transition-colors duration-200 py-3">
                <select
                  id="contact-subject"
                  className="w-full appearance-none bg-transparent pr-10 text-base text-[#1b1c1c] outline-none cursor-pointer"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  required
                >
                  {subjects.map((item) => (
                    <option
                      key={item.value}
                      value={item.value}
                      disabled={item.value === ""}
                    >
                      {item.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-2 h-5 w-5 text-[#3e4949]" />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 pt-2">
              <label
                className="text-sm font-semibold tracking-[0.7px] text-[#3e4949]"
                htmlFor="contact-message"
              >
                Message
              </label>
              <div className="py-2">
                <textarea
                  id="contact-message"
                  className="min-h-[120px] w-full resize-none border-b border-[#6e7979] focus:border-[#008080] transition-colors duration-200 bg-transparent py-2 text-base text-[#1b1c1c] outline-none placeholder:text-gray-400"
                  placeholder="Parlez-nous de votre vision..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                  }
                  required
                />
              </div>
            </div>

            {/* Message d'état */}
            {status.message && (
              <div
                className={`flex items-center gap-2 p-4 rounded-lg text-sm font-medium ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : status.type === "error"
                    ? "bg-red-50 text-red-700 border border-red-200"
                    : "bg-blue-50 text-blue-700 border border-blue-200"
                }`}
              >
                {status.type === "success" && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                {status.type === "error" && <AlertCircle className="h-5 w-5 text-red-600" />}
                {status.type === "loading" && <Loader2 className="h-5 w-5 animate-spin text-blue-600" />}
                <span>{status.message}</span>
              </div>
            )}

            {/* Bouton Envoyer */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-full bg-[#ff0081] px-10 py-3.5 text-sm font-semibold tracking-[0.7px] text-white shadow-md transition-all hover:bg-[#e00070] active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                <span>
                  {status.type === "loading"
                    ? "Envoi..."
                    : status.type === "success"
                    ? "Message envoyé !"
                    : "Envoyer le message"}
                </span>
                {status.type === "loading" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Panneau Coordonnées */}
        <aside className="lg:col-span-4">
          <div className="flex w-full flex-col gap-6 rounded-2xl border border-[#bdc9c880] bg-[#f5f3f3] p-6 sm:p-8">
            <h3 className="text-[28px] font-semibold leading-9 text-[#1b1c1c]">
              Coordonnées
            </h3>
            <address className="flex flex-col gap-6 not-italic">
              {contactDetails.map((detail) => {
                const IconComponent = detail.icon;
                return (
                  <div key={detail.label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e0e0ff] text-[#008080]">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold tracking-[0.7px] text-[#3e4949]">
                        {detail.label}
                      </span>
                      <a
                        href={detail.href}
                        className="text-base text-[#1b1c1c] transition-colors hover:text-[#008080] break-all"
                      >
                        {detail.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </address>

            <a
              href="https://wa.me/2290197450261"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold tracking-[0.5px] text-white shadow-sm transition-all hover:bg-[#20ba5a] active:scale-95 cursor-pointer"
            >
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 1.967 14.11 .94 11.48 1.94c-5.44 0-9.866 4.372-9.87 9.802 0 1.634.502 3.224 1.457 4.842L2.032 21.97l5.615-1.472a9.78 9.78 0 0 0 4.825 1.451zm9.96-6.853c-.269-.134-1.594-.787-1.84-.875-.246-.089-.425-.134-.605.134-.18.269-.695.875-.853 1.053-.158.179-.316.201-.585.067-.27-.133-1.138-.419-2.167-1.338-.801-.715-1.342-1.6-1.5-1.869-.158-.269-.017-.415.118-.548.121-.12.27-.315.405-.472.134-.158.179-.269.269-.449.09-.179.045-.336-.022-.472-.067-.134-.605-1.456-.828-1.993-.219-.527-.459-.456-.63-.456-.164-.002-.353-.002-.542-.002-.19 0-.498.071-.758.353-.26.282-1 .978-1 2.386s1.021 2.77 1.163 2.95c.142.179 2.01 3.067 4.869 4.3c.68.293 1.21.469 1.62.601.683.218 1.3.187 1.79.113.547-.082 1.594-.651 1.819-1.278.225-.627.225-1.163.158-1.278-.068-.112-.246-.179-.516-.312z" />
              </svg>
              <span>Contacter sur WhatsApp</span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};
