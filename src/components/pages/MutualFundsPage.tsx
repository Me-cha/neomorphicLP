import { Card } from "../ui/card";

export function MutualFunds() {
  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-4 mt-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Mutual Funds</h1>
          <p className="text-lg text-muted-foreground">
            Curated fund selections tailored for steady, long-term growth.
            Explore SIP options to achieve your financial goals with
            consistency.
          </p>
        </div>

        {/* Fund Selection & SIP Calculator */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 bg-card/50 backdrop-blur-lg shadow-xl">
            <h2 className="text-xl font-semibold text-primary mb-3">
              Explore Our Fund Selection
            </h2>
            <p className="text-muted-foreground mb-4">
              We offer a diverse range of mutual funds, carefully curated for
              different risk appetites. From equity to debt funds, discover the
              best options for your portfolio.
            </p>
            <ul className="space-y-2">
              <li>
                Equity Mutual Funds: Grow your wealth by investing in
                top-performing stocks.
              </li>
              <li>
                Debt Funds: Secure stable returns with lower risk exposure.
              </li>
              <li>
                Hybrid Funds: Balance risk and returns with a mix of equity and
                debt investments.
              </li>
            </ul>
          </Card>

          {/* SIP Calculator */}
          <Card className="p-6 bg-card/50 backdrop-blur-lg shadow-xl">
            <h2 className="text-xl font-semibold text-primary mb-3">
              SIP Calculator
            </h2>
            <p className="text-muted-foreground mb-4">
              Plan your wealth accumulation with our SIP calculator. Discover
              how regular investments can lead to significant wealth growth over
              time.
            </p>
            <a
              href="#sip-calculator"
              className="text-blue-500 underline hover:text-primary transition-all"
            >
              Calculate Your Returns
            </a>
          </Card>
        </div>

        {/* Section: Key Benefits */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-6">
            Why Invest in Mutual Funds?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card/50 backdrop-blur-lg shadow-xl">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Diversification
              </h4>
              <p className="text-muted-foreground">
                Mutual funds allow you to invest in a diversified portfolio,
                reducing individual stock risk.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-lg shadow-xl">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Expert Management
              </h4>
              <p className="text-muted-foreground">
                Our experienced fund managers select the best stocks and bonds
                to maximize returns.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-lg shadow-xl">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Liquidity
              </h4>
              <p className="text-muted-foreground">
                Mutual funds offer liquidity, allowing easy buying and selling
                of units.
              </p>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Start Your Investment Journey Today
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Take the first step toward financial freedom with a tailored mutual
            fund investment strategy.
          </p>
          <button className="px-8 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
