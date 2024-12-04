import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Pivot-Profit
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm hover:text-primary">Services</a>
          <a href="#about" className="text-sm hover:text-primary">About</a>
          <a href="#testimonials" className="text-sm hover:text-primary">Testimonials</a>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              <a href="#services" className="text-lg" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#about" className="text-lg" onClick={() => setIsOpen(false)}>About</a>
              <a href="#testimonials" className="text-lg" onClick={() => setIsOpen(false)}>Testimonials</a>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}