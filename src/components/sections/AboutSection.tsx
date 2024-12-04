import { Card } from "@/components/ui/card";
import { Users, TrendingUp, Award } from "lucide-react";

const milestones = [
  {
    year: "2024",
    title: "Company Founded",
    description: "Prateek Jain & Ankur Thamke established Pivot-Profit"
  },
  {
    year: "2024 Q1",
    title: "Initial Growth",
    description: "Expanded from 3 to 15 active investors"
  },
  {
    year: "2024 Q2",
    title: "Nationwide Expansion",
    description: "Reached 40+ satisfied clients across India"
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground">Building trust through excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 bg-card/50 backdrop-blur">
            <Users className="h-8 w-8 mb-4 text-purple-500" />
            <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
            <p className="text-muted-foreground">Led by industry veterans with deep market insights</p>
          </Card>
          
          <Card className="p-6 bg-card/50 backdrop-blur">
            <TrendingUp className="h-8 w-8 mb-4 text-pink-500" />
            <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
            <p className="text-muted-foreground">Consistent growth and performance</p>
          </Card>
          
          <Card className="p-6 bg-card/50 backdrop-blur">
            <Award className="h-8 w-8 mb-4 text-blue-500" />
            <h3 className="text-lg font-semibold mb-2">Trust & Excellence</h3>
            <p className="text-muted-foreground">Building lasting relationships through transparency</p>
          </Card>
        </div>

        <div className="relative">
          <div className="absolute top-0 left-1/2 h-full w-px bg-border" />
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 p-6 bg-card/50 backdrop-blur rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">{milestone.year}</div>
                  <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
                <div className="hidden md:block w-4 h-4 rounded-full bg-primary relative z-10" />
                <div className="flex-1 md:p-6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}