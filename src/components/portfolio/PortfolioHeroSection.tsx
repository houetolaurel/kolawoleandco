export const PortfolioHeroSection = () => {
  return (
    <section
      className="flex flex-col max-w-screen-xl items-center gap-3 pt-12 pb-12 px-4 md:px-16 relative w-full"
      aria-labelledby="portfolio-heading"
    >
      <div className="items-center flex flex-col relative self-stretch w-full">
        <h1
          id="portfolio-heading"
          className="relative flex items-center justify-center w-fit [font-family:'Hanken_Grotesk-Bold',Helvetica] font-bold text-[#008080] text-4xl md:text-[64px] text-center tracking-[-1.28px] leading-tight whitespace-nowrap"
        >
          Notre Portfolio
        </h1>
      </div>
      <div className="flex flex-col max-w-2xl items-center relative">
        <p className="[font-family:'Manrope-Regular',Helvetica] font-normal text-[#3e4949] text-base md:text-lg text-center tracking-[0] leading-7 relative">
          Découvrez une sélection de nos réalisations. Des solutions digitales sur-mesure
          <br className="hidden md:block" />
          alliant esthétique épurée et performance technologique.
        </p>
      </div>
    </section>
  );
};
