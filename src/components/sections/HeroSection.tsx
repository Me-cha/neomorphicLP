import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import { MobileDisplay } from "./MobileDisplay";

export function HeroSection() {
  return (
    <section className="min-h-screen pt-16 flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10" />
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">Trusted by 40+ clients across India</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Empowering Your Financial Journey
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Maximize your wealth, minimize your worries with Pivot-Profit. Join the next generation of smart investors.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="animate-[float_6s_ease-in-out_infinite]">
              <MobileDisplay />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}