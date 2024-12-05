import { Card } from "@/components/ui/card";
import {
  BarChart3,
  Shield,
  LineChart,
  PieChart,
  Heart,
  TrendingUp,
  Share,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import bg1 from "../assets/lottieAnimations/Bg1/bg1Json.json";

const services = [
  {
    icon: BarChart3,
    title: "Investment Consulting",
    description:
      "Expert-driven strategies tailored for individual and institutional growth.",
    highlight: "₹43 crore AUM with consistent client satisfaction.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: LineChart,
    title: "Mutual Funds",
    description:
      "Handpicked funds for diverse portfolios and long-term wealth creation.",
    highlight: "Average annualized returns of 15%.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Equity Market Advisory",
    description:
      "Informed stock recommendations to outperform market benchmarks.",
    highlight: "Data-backed, real-time analytics.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: PieChart,
    title: "Portfolio Management",
    description:
      "Optimized asset allocation and risk management for diverse needs.",
    highlight: "Custom strategies for high-net-worth individuals.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Shield,
    title: "Insurance Advisory",
    description: "Comprehensive plans to safeguard assets and loved ones.",
    highlight: "End-to-end claim support and guidance.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Heart,
    title: "Commodity & Currency Trading",
    description:
      "Access to lucrative global opportunities in alternative markets.",
    highlight: "Diversify with commodities and forex strategies.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Share,
    title: "Algo & Pre-IPO Investments",
    description:
      "Cutting-edge algo trading and exclusive Pre-IPO investment options.",
    highlight: "Stay ahead with innovative financial instruments.",
    gradient: "from-yellow-500 to-amber-500",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Lottie animation background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <DotLottieReact
          data={bg1}
          loop={true}
          autoplay={true}
          segment={[0, 145]}
          mode="bounce"
          style={{ width: "100%", height: "auto" }}
        />
        <DotLottieReact
          data={bg1}
          loop={true}
          autoplay={true}
          segment={[0, 145]}
          mode="bounce"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive financial solutions for every need
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden backdrop-blur-sm border border-white/10 
                bg-gradient-to-br from-white/5 to-transparent transition-all duration-500 
                hover:scale-105 hover:shadow-2xl cursor-pointer`}
              style={{
                boxShadow: `
                  inset 0 0 30px rgba(255, 255, 255, 0.05),
                  10px 10px 30px rgba(0, 0, 0, 0.2),
                  -10px -10px 30px rgba(255, 255, 255, 0.03)
                `,
              }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative p-8">
                {/* Icon container with neomorphic effect */}
                <div
                  className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-6 
                    bg-gradient-to-br ${service.gradient} group-hover:shadow-lg transition-all duration-500`}
                  style={{
                    boxShadow: `
                      inset 2px 2px 4px rgba(255, 255, 255, 0.1),
                      inset -2px -2px 4px rgba(0, 0, 0, 0.1),
                      5px 5px 10px rgba(0, 0, 0, 0.2),
                      -5px -5px 10px rgba(255, 255, 255, 0.05)
                    `,
                  }}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 group-hover:text-white/80 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Highlight box with neomorphic effect */}
                <div
                  className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10
                    group-hover:border-white/20 transition-all duration-500"
                  style={{
                    boxShadow: `
                      inset 1px 1px 2px rgba(255, 255, 255, 0.05),
                      inset -1px -1px 2px rgba(0, 0, 0, 0.05)
                    `,
                  }}
                >
                  <p className="text-sm font-medium text-white/80 group-hover:text-white">
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
