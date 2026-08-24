const efreeshopLogo = "/images/logo efreeshop.svg";
const dataAfriqueHubLogo = "/images/logo data afrique hub.jpg";

interface Partner {
  name: string;
  logo: string;
  url: string;
  isSvg?: boolean;
}

const partners: Partner[] = [
  {
    name: "eFreeShop",
    logo: efreeshopLogo,
    url: "https://www.e-freeshop.com/",
    isSvg: true,
  },
  {
    name: "Data Afrique Hub",
    logo: dataAfriqueHubLogo,
    url: "https://dataafriquehub.org/",
  },
];

export const PartnerLogosSection = () => {
  return (
    <section
      aria-labelledby="partners-heading"
      className="flex flex-col items-center gap-8 w-full pt-16 border-t border-[#BDC9C8]/30"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <h2
          id="partners-heading"
          className="text-center font-bold text-[#1B1C1C] text-3xl sm:text-4xl md:text-5xl tracking-tight"
        >
          Nos Partenaires
        </h2>
        <p className="text-base sm:text-lg text-[#3E4949] max-w-xl leading-relaxed">
          Des organisations d'excellence avec lesquelles nous collaborons à travers divers partenariats stratégiques et projets innovants.
        </p>
      </div>

      <div
        aria-label="Liste des partenaires"
        className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 md:gap-24 w-full max-w-3xl pt-4"
      >
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visiter le site partenaire de ${partner.name}`}
            className="group flex flex-col items-center justify-center gap-3 transition-transform duration-300 hover:scale-105 cursor-pointer no-underline"
          >
            <div className="h-14 sm:h-16 flex items-center justify-center">
              <img
                src={partner.logo}
                alt={`Logo partenaire ${partner.name}`}
                width={100}
                height={60}
                loading="lazy"
                decoding="async"
                className={`max-h-12 sm:max-h-14 max-w-[120px] sm:max-w-[140px] w-auto object-contain transition-opacity duration-200 group-hover:opacity-90 ${
                  partner.isSvg ? "" : "rounded-md"
                }`}
              />
            </div>
            <span className="font-semibold text-sm sm:text-base text-[#3E4949] tracking-wide group-hover:text-[#008080] transition-colors">
              {partner.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
