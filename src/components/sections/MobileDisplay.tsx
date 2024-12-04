import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BarChart3,
  LineChart,
  PieChart,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Investment Consulting",
    gradient: "from-purple-500 to-pink-500",
    step: "personal",
  },
  {
    icon: LineChart,
    title: "Mutual Funds",
    gradient: "from-blue-500 to-cyan-500",
    step: "personal",
  },
  {
    icon: TrendingUp,
    title: "Equity Market",
    gradient: "from-green-500 to-emerald-500",
    step: "personal",
  },
  {
    icon: PieChart,
    title: "Portfolio Management",
    gradient: "from-orange-500 to-red-500",
    step: "personal",
  },
];

type Step = 0 | 1 | 2 | 3;

export function MobileDisplay() {
  const [currentStep, setCurrentStep] = useState<Step>(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentAmount: "",
    riskProfile: "moderate",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4 mt-10">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">Our Services</h3>
              <p className="text-sm text-muted-foreground">
                Select a service to get started
              </p>
            </div>
            {services.map((service, index) => (
              <Card
                key={index}
                onClick={() => {
                  console.log("Card clicked");
                  setCurrentStep(1);
                }}
                className={`p-4 hover:scale-105 transition-transform bg-gradient-to-r ${service.gradient} cursor-pointer`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-white/10">
                    <service.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    {service.title}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        );

      case 1:
        return (
          <form
            className="space-y-4 mt-10"
            onSubmit={(e) => {
              e.preventDefault();
              setCurrentStep(2);
            }}
          >
            <div className="flex items-center space-x-8">
              <ArrowLeft
                className="ml-2 h-6 w-6 rounded-full bg-white/10 p-1 cursor-pointer"
                onClick={() => setCurrentStep(0)}
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
                <p className="text-sm text-muted-foreground">
                  Tell us about yourself
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 1234567890"
                required
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        );

      case 2:
        return (
          <form className="space-y-4 mt-10" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-3">
              <ArrowLeft
                className="h-6 w-6 rounded-full bg-white/10 p-1 cursor-pointer"
                onClick={() => setCurrentStep(1)}
              />
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">
                  Investment Profile
                </h3>
                <p className="text-sm text-muted-foreground">
                  Help us understand your goals
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="investmentAmount">Investment Amount (₹)</Label>
              <Input
                id="investmentAmount"
                name="investmentAmount"
                type="number"
                value={formData.investmentAmount}
                onChange={handleInputChange}
                placeholder="100000"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="riskProfile">Risk Profile</Label>
              <Select
                value={formData.riskProfile}
                onValueChange={(value) =>
                  setFormData({ ...formData, riskProfile: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="conservative">Conservative</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="aggressive">Aggressive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
              Complete <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        );

      case 3:
        return (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 ">
            <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-10 w-10 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold">Thank You!</h3>
            <p className="text-sm text-muted-foreground">
              Our team will contact you shortly to discuss your investment
              journey.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  investmentAmount: "",
                  riskProfile: "moderate",
                });
                setCurrentStep(0);
              }}
              className="mt-4"
            >
              Start Over
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="relative w-[300px] h-[600px] transform perspective-1000 rotate-y-[-5deg] rotate-x-2">
      {/* Mobile Frame Image */}
      <img
        src="/src/components/assets/images/mobilepng.png"
        alt="Mobile Frame"
        className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
      />

      {/* Content Layer */}
      <div className="absolute inset-x-3 inset-y-3.5 overflow-hidden rounded-[40px] bg-black bg-opacity-50 z-20">
        <div className="h-full p-4 overflow-y-auto">{renderStep()}</div>
      </div>

      {/* 3D Effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent pointer-events-none z-15 rounded-[40px]" />
      <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none blur-xl z-5" />
    </div>
  );
}
