import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
          <p className="text-muted-foreground">
            Take your first step towards financial freedom
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left side: Contact Details with Tagline */}
          <div className="flex flex-col space-y-6 border-r border-muted pr-8">
            {/* Powerful Tagline */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-primary mb-4">
                Ready to take the next step in your financial journey?
              </h3>
              <p className="text-muted-foreground text-lg">
                Reach out to us today and let’s create a tailored strategy for
                your financial growth.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-muted-foreground">info@pivot-profit.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-muted-foreground">+91-8552888440</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-muted-foreground">
                  123 Financial District
                  <br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
            </div>
          </div>

          {/* Right side: Contact Form */}
          <Card className="p-6 bg-card/50 backdrop-blur">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                Send Message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
