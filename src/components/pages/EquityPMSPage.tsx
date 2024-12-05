import React from "react";
import { Card } from "../ui/card";

export function EquityPMS() {
  const performanceMetrics = [
    { metric: "CAGR", value: "15%" },
    { metric: "Top Performing Stock", value: "Stock A (30% ROI)" },
    { metric: "Total Portfolio Value", value: "$500,000" },
    { metric: "Annualized Return", value: "18%" },
  ];

  return (
    <section className="py-12 bg-background/50">
      <div className="container mx-auto px-4 mt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Equity Portfolio Management Services
          </h1>
          <p className="text-lg text-muted-foreground">
            Tailored equity portfolios designed for maximum ROI. Achieve
            consistent growth with our proven investment strategies.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {performanceMetrics.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 shadow-lg backdrop-blur-lg"
            >
              <h2 className="text-xl font-semibold text-primary mb-2">
                {item.metric}
              </h2>
              <p className="text-xl text-muted-foreground">{item.value}</p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Start Your Journey with Us
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Let us help you maximize your portfolio's potential. Contact us for
            personalized investment strategies.
          </p>
          <button className="px-8 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
