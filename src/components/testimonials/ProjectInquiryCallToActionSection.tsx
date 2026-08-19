export const ProjectInquiryCallToActionSection = () => {
  const handleProjectInquiry = (): void => {
    window.dispatchEvent(new CustomEvent("project-inquiry-requested"));
  };

  return (
    <section
      aria-labelledby="project-inquiry-heading"
      className="relative w-full rounded-2xl bg-white p-8 sm:p-12 md:p-16 text-center space-y-6 shadow-sm border border-gray-100 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)] opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
        <h2
          id="project-inquiry-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight"
        >
          Prêt à transformer votre vision ?
        </h2>
        <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
          Rejoignez les leaders qui nous font confiance pour élever leur présence digitale.
        </p>
      </div>

      <div className="relative z-10 pt-2">
        <button
          type="button"
          onClick={handleProjectInquiry}
          className="inline-flex items-center justify-center px-8 sm:px-10 py-4 bg-[#E00070] text-white font-bold rounded-full transition-transform duration-150 active:scale-95 hover:bg-[#c00060] shadow-md cursor-pointer"
        >
          Démarrer un Projet
        </button>
      </div>
    </section>
  );
};
