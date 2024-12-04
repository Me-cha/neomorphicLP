import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { AboutSection } from "./components/sections/AboutSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { CalculatorSection } from "./components/sections/CalculatorSection";
import { ContactSection } from "./components/sections/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <CalculatorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;