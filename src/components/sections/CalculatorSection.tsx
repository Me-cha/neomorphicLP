import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function CalculatorSection() {
  const [investment, setInvestment] = useState(100000);
  const [years, setYears] = useState(5);
  const [risk, setRisk] = useState("moderate");

  const getExpectedReturns = () => {
    const riskReturns = {
      conservative: 8,
      moderate: 12,
      aggressive: 15
    };
    const rate = riskReturns[risk as keyof typeof riskReturns] / 100;
    return Math.round(investment * Math.pow(1 + rate, years));
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Investment Calculator</h2>
          <p className="text-muted-foreground">Estimate your potential returns</p>
        </div>

        <Card className="max-w-2xl mx-auto p-6 bg-card/50 backdrop-blur">
          <div className="space-y-8">
            <div className="space-y-4">
              <Label>Investment Amount: ₹{investment.toLocaleString()}</Label>
              <Slider
                value={[investment]}
                min={10000}
                max={1000000}
                step={10000}
                onValueChange={([value]) => setInvestment(value)}
                className="bg-primary/10"
              />
            </div>

            <div className="space-y-4">
              <Label>Investment Period: {years} years</Label>
              <Slider
                value={[years]}
                min={1}
                max={20}
                onValueChange={([value]) => setYears(value)}
                className="bg-primary/10"
              />
            </div>

            <div className="space-y-4">
              <Label>Risk Profile</Label>
              <Select value={risk} onValueChange={setRisk}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conservative">Conservative (8% p.a.)</SelectItem>
                  <SelectItem value="moderate">Moderate (12% p.a.)</SelectItem>
                  <SelectItem value="aggressive">Aggressive (15% p.a.)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="p-4 rounded-lg bg-primary/10">
              <div className="text-sm text-muted-foreground mb-2">Estimated Returns</div>
              <div className="text-3xl font-bold">₹{getExpectedReturns().toLocaleString()}</div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}