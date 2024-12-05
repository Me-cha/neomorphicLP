import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
        <div
          onClick={() => handleNavigation("hero")}
          className="font-bold text-xl bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer bg-clip-text text-transparent"
        >
          Pivot-Profit
        </div>

        {/* Desktop Navigation */}
        <nav
          onMouseLeave={() => setIsServicesOpen(false)}
          className="hidden md:flex items-center gap-6 h-[-webkit-fill-available]"
        >
          <a
            onClick={() => navigate("/knowledge-center")}
            className="text-sm hover:text-primary cursor-pointer"
          >
            Knowledge Center
          </a>
          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
          >
            <a
              onClick={() => handleNavigation("services")}
              className="text-sm hover:text-primary cursor-pointer"
            >
              Services <ChevronDown className="h-4 w-4 inline" />
            </a>
            {isServicesOpen && (
              <div className="absolute top-7 -left-20 bg-background/80 shadow-lg border rounded-2xl p-2 w-48 z-50">
                <div
                  onClick={() => {
                    navigate("/equity-pms");
                    setIsServicesOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-500 cursor-pointer rounded-xl"
                >
                  Equity PMS
                </div>
                <div
                  onClick={() => {
                    navigate("/algo-trading");
                    setIsServicesOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-500 cursor-pointer rounded-xl"
                >
                  Algo Trading
                </div>
                <div
                  onClick={() => {
                    navigate("/mutual-funds");
                    setIsServicesOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-500 cursor-pointer rounded-xl"
                >
                  Mutual Funds
                </div>
                <div
                  onClick={() => {
                    navigate("/aif-products");
                    setIsServicesOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-500 cursor-pointer rounded-xl"
                >
                  AIF Products
                </div>
                <div
                  onClick={() => {
                    navigate("/pre-ipo");
                    setIsServicesOpen(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-500 cursor-pointer rounded-xl"
                >
                  Pre-IPO/Unlisted Equity
                </div>
              </div>
            )}
          </div>

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
