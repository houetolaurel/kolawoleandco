export const PortfolioHeroSection = () => {
  return (
    <section
      className="flex flex-col max-w-4xl mx-auto items-center gap-4 pt-12 pb-10 px-4 sm:px-6 text-center w-full"
      aria-labelledby="portfolio-heading"
    >
      <h1
        id="portfolio-heading"
        className="font-bold text-[#008080] text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight"
      >
        Notre Portfolio
      </h1>
      <p className="text-[#3e4949] text-base sm:text-lg max-w-2xl leading-relaxed">
        Découvrez une sélection de nos réalisations. Des solutions digitales sur-mesure
        alliant esthétique épurée, ergonomie et performance technologique.
      </p>
    </section>
  );
};
