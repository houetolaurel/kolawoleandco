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
      className="flex flex-col items-center gap-8 w-full pt-16 border-t border-[#BDC9C8]/30"
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
        className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 md:gap-24 w-full max-w-3xl pt-2"
      >
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="h-14 sm:h-16 flex items-center justify-center">
              <img
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                width={100}
                height={60}
                loading="lazy"
                decoding="async"
                className={`max-h-12 sm:max-h-14 max-w-[120px] sm:max-w-[140px] w-auto object-contain ${
                  partner.isSvg ? "" : "rounded-md"
                }`}
              />
            </div>
            <span className="font-semibold text-sm sm:text-base text-[#3E4949] tracking-wide">
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
