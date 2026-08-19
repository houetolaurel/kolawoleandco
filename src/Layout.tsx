import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { PrimaryNavigationSection } from "./components/PrimaryNavigationSection";
import { SiteFooterSection } from "./components/SiteFooterSection";

/**
 * Scroll to top automatically on every route change.
 * Runs without remounting the nav/footer.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

/**
 * Shared layout: nav and footer are mounted ONCE for the entire app.
 * Individual pages are rendered via <Outlet> — no remounting on navigation.
 */
export const RootLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-[#faf9f9] text-[#1b1c1c]">
      <ScrollToTop />
      <PrimaryNavigationSection />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooterSection />
    </div>
  );
};
