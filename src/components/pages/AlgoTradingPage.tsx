import { Card } from "../ui/card";
import { Button } from "../ui/button";

export function AlgoTrading() {
  return (
    <section className="py-12 bg-background/50">
      <div className="container mx-auto px-4 mt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Algorithmic Trading
          </h1>
          <p className="text-lg text-muted-foreground">
            Leverage advanced algorithms to optimize trading strategies.
            Maximize efficiency and minimize risks with cutting-edge technology.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-6 bg-card/50 shadow-lg backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-primary mb-2">
              Efficiency
            </h2>
            <p className="text-lg text-muted-foreground">
              Execute trades faster than ever, without human delays.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 shadow-lg backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-primary mb-2">
              Precision
            </h2>
            <p className="text-lg text-muted-foreground">
              Algorithms ensure accurate decision-making with minimal errors.
            </p>
          </Card>

          <Card className="p-6 bg-card/50 shadow-lg backdrop-blur-lg">
            <h2 className="text-xl font-semibold text-primary mb-2">
              Risk Management
            </h2>
            <p className="text-lg text-muted-foreground">
              Sophisticated risk management tools protect your investments.
            </p>
          </Card>
        </div>

        {/* Disclaimer */}
        <div className="mt-16 p-6 text-center rounded-xl shadow-lg border-white border-2">
          <h2 className="text-2xl font-bold mb-1 ">Important Disclaimer</h2>
          <p>
            Algorithmic trading involves risks, and past performance is not
            indicative of future results. Always consult with a professional
            before engaging in algorithmic trading strategies.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Get Started with Algo Trading
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Take control of your trading strategies with advanced algorithms
            designed to outperform market trends.
          </p>
          <Button className="px-8 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 ">
            Start Now
          </Button>
        </div>
      </div>
    </section>
  );
}
