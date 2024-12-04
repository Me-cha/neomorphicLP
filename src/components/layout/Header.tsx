import { Button } from "@/components/ui/button";
import { ArrowRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo(sectionId, {
          duration: 500,
          smooth: true,
        });
      }, 500);
    } else {
      // Smooth scroll to the section if already on "/"
      scroller.scrollTo(sectionId, {
        duration: 500,
        smooth: true,
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-bold text-xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Pivot-Profit
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            onClick={() => handleNavigation("services")}
            className="text-sm hover:text-primary cursor-pointer"
          >
            Services
          </a>
          <a
            onClick={() => handleNavigation("about")}
            className="text-sm hover:text-primary cursor-pointer"
          >
            About
          </a>
          <a
            onClick={() => handleNavigation("testimonials")}
            className="text-sm hover:text-primary cursor-pointer"
          >
            Testimonials
          </a>
          <a
            onClick={() => navigate("/knowledge-center")}
            className="text-sm hover:text-primary"
          >
            Knowledge Center
          </a>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-4 mt-8">
              <a
                onClick={() => {
                  handleNavigation("services");
                  setIsOpen(false);
                }}
                className="text-lg cursor-pointer"
              >
                Services
              </a>
              <a
                onClick={() => {
                  handleNavigation("about");
                  setIsOpen(false);
                }}
                className="text-lg cursor-pointer"
              >
                About
              </a>
              <a
                onClick={() => {
                  handleNavigation("testimonials");
                  setIsOpen(false);
                }}
                className="text-lg cursor-pointer"
              >
                Testimonials
              </a>
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
