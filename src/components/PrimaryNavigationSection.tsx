import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import group from "../assets/group.svg";

const navigationItems = [
  { label: "Accueil", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Expertise", href: "/expertise" },
  { label: "Témoignages", href: "/temoignages" },
  { label: "Contact", href: "/contact" },
];

export const PrimaryNavigationSection = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Accueil");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/portfolio") {
      setActiveItem("Portfolio");
    } else if (location.pathname === "/expertise") {
      setActiveItem("Expertise");
    } else if (location.pathname === "/temoignages") {
      setActiveItem("Témoignages");
    } else if (location.pathname === "/contact") {
      setActiveItem("Contact");
    } else if (location.pathname === "/") {
      setActiveItem("Accueil");
    }
  }, [location.pathname]);

  const handleProjectStart = (): void => {
    window.location.href = "/contact";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#bdc9c84c] bg-[#faf9f9cc] backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <a
          href="/"
          aria-label="Kolawolé & co. - Accueil"
          onClick={() => setActiveItem("Accueil")}
          className="flex items-center"
        >
          <img className="h-14 w-auto object-contain" alt="Kolawolé & co." src={group} />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveItem(item.label)}
                className={`text-sm font-semibold tracking-wide transition-colors ${isActive
                    ? "border-b-2 border-[#008080] pb-1 text-[#008080]"
                    : "text-[#3e4949] hover:text-[#008080]"
                  }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleProjectStart}
            className="hidden md:inline-flex rounded-full bg-[#ff0081] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            Démarrer un Projet
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#3e4949] hover:text-[#008080]"
            aria-label="Menu principal"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-[#bdc9c84c] bg-[#faf9f9e6] backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          {navigationItems.map((item) => {
            const isActive = activeItem === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => {
                  setActiveItem(item.label);
                  setIsMenuOpen(false);
                }}
                className={`text-base font-semibold tracking-wide py-2 transition-colors ${isActive
                    ? "text-[#008080]"
                    : "text-[#3e4949] hover:text-[#008080]"
                  }`}
              >
                {item.label}
              </a>
            );
          })}
          <button
            type="button"
            onClick={() => {
              handleProjectStart();
              setIsMenuOpen(false);
            }}
            className="w-full rounded-full bg-[#ff0081] py-3 text-sm font-semibold text-white shadow-md text-center mt-2 cursor-pointer"
          >
            Démarrer un Projet
          </button>
        </nav>
      )}
    </header>
  );
};