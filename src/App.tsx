import { Routes, Route } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { AboutSection } from "./components/sections/AboutSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { CalculatorSection } from "./components/sections/CalculatorSection";
import { ContactSection } from "./components/sections/ContactSection";
import KnowLeadgeCenterPage from "./pages/knowledgeCenter";

function App() {
  const LandingPage = () => {
    return (
      <div>
        <HeroSection />
        <ServicesSection />
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
          <Route path="/knowledge-center" element={<KnowLeadgeCenterPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
