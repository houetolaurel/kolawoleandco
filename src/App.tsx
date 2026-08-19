import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "./Layout";

// Pages — all imported eagerly (no lazy loading)
import { AccueilsKolawolCo } from "./pages/AccueilPage";
import { ExpertisePage } from "./pages/ExpertisePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { TmoignagesKolawol } from "./pages/TemoignagesPage";
import { ContactKolawolCo } from "./pages/ContactPage";
import { MentionsLegales } from "./pages/MentionsLegalesPage";
import { AboutPage } from "./pages/AboutPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* RootLayout is mounted ONCE — nav & footer never remount on navigation */}
        <Route element={<RootLayout />}>
          <Route path="/" element={<AccueilsKolawolCo />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/temoignages" element={<TmoignagesKolawol />} />
          <Route path="/contact" element={<ContactKolawolCo />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/a-propos" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}