const efreeshopLogo = "/images/logo efreeshop.svg";
const dataAfriqueHubLogo = "/images/logo data afrique hub.jpg";

interface Partner {
  name: string;
  logo: string;
  isSvg?: boolean;
}

const partners: Partner[] = [
  {
    name: "eFreeShop",
    logo: efreeshopLogo,
    isSvg: true,
  },
  {
    name: "Data Afrique Hub",
    logo: dataAfriqueHubLogo,
  },
];

export const PartnerLogosSection = () => {
  return (
    <section
      aria-labelledby="partners-heading"
      className="flex flex-col items-center gap-10 w-full pt-16 border-t border-[#BDC9C8]/30"
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#008080]">
          Partenaires & Clients
        </span>
        <h2
          id="partners-heading"
          className="text-center font-bold text-[#1B1C1C] text-2xl sm:text-3xl tracking-tight"
        >
          Ils nous font confiance
        </h2>
        <p className="text-sm sm:text-base text-[#3E4949] max-w-md">
          Des organisations d'exception propulsées par nos solutions digitales.
        </p>
      </div>

      <div
        aria-label="Liste des partenaires"
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-2xl"
      >
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="group flex flex-col items-center justify-center p-8 sm:p-10 rounded-2xl border border-[#BDC9C8]/30 bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#008080]/50 hover:-translate-y-1"
          >
            <div className="h-28 sm:h-32 w-full flex items-center justify-center p-3">
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                width={180}
                height={120}
                loading="lazy"
                decoding="async"
                className={`max-h-24 sm:max-h-28 max-w-[200px] w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
                  partner.isSvg ? "filter drop-shadow-sm" : "rounded-xl shadow-xs"
                }`}
              />
            </div>
            <div className="mt-4 flex flex-col items-center">
              <span className="font-semibold text-lg text-[#1B1C1C] group-hover:text-[#008080] transition-colors">
                {partner.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
