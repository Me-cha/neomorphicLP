import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { AboutSection } from "./components/sections/AboutSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { CalculatorSection } from "./components/sections/CalculatorSection";
import { ContactSection } from "./components/sections/ContactSection";
import KnowLeadgeCenterPage from "./components/pages/KnowledgeCenterPage";
import { LegalDisclaimers } from "./components/sections/LegalDisclaimer";
import { AIFProducts } from "./components/pages/AIFProductsPage";
import { AlgoTrading } from "./components/pages/AlgoTradingPage";
import { EquityPMS } from "./components/pages/EquityPMSPage";
import { MutualFunds } from "./components/pages/MutualFundsPage";
import { PreIPO } from "./components/pages/PreIpoEquityPage";

function App() {
  const LandingPage = () => {
    return (
      <div>
        <HeroSection />
        <ServicesSection />
        <LegalDisclaimers />
        <AboutSection />
        <TestimonialsSection />
        <CalculatorSection />
        <ContactSection />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/equity-pms" element={<EquityPMS />} />
          <Route path="/algo-trading" element={<AlgoTrading />} />
          <Route path="/mutual-funds" element={<MutualFunds />} />
          <Route path="/aif-products" element={<AIFProducts />} />
          <Route path="/pre-ipo" element={<PreIPO />} />
          <Route path="/knowledge-center" element={<KnowLeadgeCenterPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
