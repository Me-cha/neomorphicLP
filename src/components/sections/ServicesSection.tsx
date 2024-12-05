import { Card } from "@/components/ui/card";
import {
  BarChart3,
  Shield,
  LineChart,
  PieChart,
  Heart,
  TrendingUp,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import bg1 from "../assets/lottieAnimations/Bg1/bg1Json.json";

const services = [
  {
    icon: BarChart3,
    title: "Investment Consulting",
    description: "Expert-driven strategies to maximize your wealth potential",
    highlight: "40% average portfolio growth",
  },
  {
    icon: LineChart,
    title: "Mutual Funds",
    description: "Curated fund selection for steady, long-term returns",
    highlight: "15% annual returns",
  },
  {
    icon: TrendingUp,
    title: "Equity Market",
    description: "Data-backed stock picks for market-beating returns",
    highlight: "Real-time analysis",
  },
  {
    icon: PieChart,
    title: "Portfolio Management",
    description: "Dynamic asset allocation for optimal performance",
    highlight: "Risk-adjusted returns",
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Comprehensive coverage for life's uncertainties",
    highlight: "100% claim support",
  },
  {
    icon: Heart,
    title: "Commodity & Currency",
    description: "Strategic positions in alternative markets",
    highlight: "Global exposure",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Lottie animation for background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <DotLottieReact
          data={bg1}
          loop={true}
          autoplay={true}
          segment={[0, 145]}
          mode="bounce"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-muted-foreground">
            Comprehensive financial solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden backdrop-blur-sm border-2 border-white/10 bg-gradient-to-br from-white/10 to-white/5 transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg"
              style={{
                boxShadow: `
                  inset 0 0 20px rgba(255, 255, 255, 0.05),
                  20px 20px 40px rgba(0, 0, 0, 0.25),
                  -20px -20px 40px rgba(255, 255, 255, 0.05)
                `,
                backdropFilter: "blur(15px)",
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="h-12 w-12 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                      boxShadow:
                        "5px 5px 10px rgba(0,0,0,0.2), -5px -5px 10px rgba(255,255,255,0.05)",
                    }}
                  >
                    <service.icon className="h-6 w-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>

                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>

                <div className="p-3 rounded-lg bg-primary/5 backdrop-blur-sm border border-primary/10">
                  <p className="text-sm font-medium text-primary">
                    {service.highlight}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
