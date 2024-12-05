import { Card } from "../ui/card";

export function PreIPO() {
  return (
    <section className="py-16 bg-background/50">
      <div className="container mx-auto px-4 mt-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">
            Pre-IPO and Unlisted Equity
          </h1>
          <p className="text-lg text-muted-foreground">
            Gain exclusive access to investment opportunities in unlisted and
            pre-IPO companies. Diversify your portfolio with high-growth
            potential assets.
          </p>
        </div>

        {/* Disclaimer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 bg-card/50 backdrop-blur-lg shadow-xl">
            <h2 className="text-xl font-semibold text-primary mb-3">
              Important Disclaimer
            </h2>
            <p className="text-muted-foreground">
              Investing in pre-IPO and unlisted equity involves higher risks.
              These investments are less liquid and may not be suitable for all
              investors. We recommend seeking professional advice before
              investing.
            </p>
          </Card>

          {/* Benefits Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Why Invest in Pre-IPO?
            </h3>
            <Card className="p-6 bg-card/50 backdrop-blur-lg shadow-xl">
              <h4 className="text-lg font-semibold text-primary mb-3">
                High Growth Potential
              </h4>
              <p className="text-muted-foreground">
                Pre-IPO companies often provide significant growth
                opportunities, as they are poised for an eventual public
                offering.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-lg shadow-xl">
              <h4 className="text-lg font-semibold text-primary mb-3">
                Exclusive Investment Access
              </h4>
              <p className="text-muted-foreground">
                Investing in pre-IPO or unlisted equity offers exclusive
                opportunities typically available only to institutional or
                high-net-worth investors.
              </p>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Start Investing Today
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Explore high-growth investment opportunities and diversify your
            portfolio with pre-IPO and unlisted equity investments.
          </p>
          <button className="px-8 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
