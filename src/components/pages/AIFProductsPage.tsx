import React from "react";
import { Card } from "../ui/card";

export function AIFProducts() {
  const details = [
    { title: "Minimum Investment", value: "₹50 Lakhs" },
    { title: "Target Returns", value: "18% CAGR" },
  ];

  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-4 mt-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">AIF Products</h1>
          <p className="text-lg text-muted-foreground">
            Discover Alternative Investment Funds (AIFs) designed for
            high-net-worth individuals seeking diversified investment
            opportunities.
          </p>
        </div>

        {/* AIF Products Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {details.map((item, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-lg shadow-xl"
            >
              <h2 className="text-xl font-semibold text-primary mb-3">
                {item.title}
              </h2>
              <p className="text-muted-foreground">{item.value}</p>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            Why Choose AIFs?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card/50 backdrop-blur-lg shadow-xl">
              <h4 className="text-lg font-semibold text-primary mb-3">
                High Returns
              </h4>
              <p className="text-muted-foreground">
                AIFs offer the potential for higher returns compared to
                traditional investment avenues.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-lg shadow-xl">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Diversification
              </h4>
              <p className="text-muted-foreground">
                AIFs allow you to diversify your portfolio by investing in
                unique asset classes.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-lg shadow-xl">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Expert Management
              </h4>
              <p className="text-muted-foreground">
                Managed by industry experts, AIFs ensure your investments are in
                experienced hands.
              </p>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Ready to Invest in AIFs?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Start diversifying your investment portfolio with exclusive AIF
            opportunities tailored to your financial goals.
          </p>
          <button className="px-8 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
