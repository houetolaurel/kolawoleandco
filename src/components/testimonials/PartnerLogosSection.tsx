const partnerLogos = ["LOGO I", "LOGO II", "LOGO III", "LOGO IV", "LOGO V"];

export const PartnerLogosSection = () => {
  return (
    <section
      aria-labelledby="partners-heading"
      className="flex flex-col items-center gap-8 w-full pt-12 border-t border-[#BDC9C8]/30"
    >
      <h2
        id="partners-heading"
        className="text-center font-normal text-[#1B1C1C] text-base tracking-wide"
      >
        Nos Partenaires
      </h2>
      <ul
        aria-label="Liste des partenaires"
        className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 list-none m-0 p-0 w-full"
      >
        {partnerLogos.map((logo) => (
          <li
            key={logo}
            className="flex items-center justify-center px-4 py-2"
          >
            <span className="font-bold text-[#3E4949] text-base md:text-lg tracking-wider">
              {logo}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};
