import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  PhoneCall,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Overview */}
          <div>
            <div className="font-bold text-2xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              Pivot-Profit
            </div>
            <p className="text-muted-foreground mb-2">
              Empowering individuals and businesses to build wealth through
              expert financial strategies in Equity PMS, Algo Trading, Mutual
              Funds, and Pre-IPO investments.
            </p>
            <p className="text-muted-foreground">
              Based in Nagpur, we deliver tailored solutions to achieve your
              financial goals.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary">
                Equity Portfolio Management
              </li>
              <li className="hover:text-primary">Algorithmic Trading</li>
              <li className="hover:text-primary">Mutual Fund Advisory</li>
              <li className="hover:text-primary">AIF Products</li>
              <li className="hover:text-primary">
                Pre-IPO & Unlisted Equity Investments
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-primary">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-primary">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="flex flex-col gap-2  space-y-2 mb-4">
              <p className="text-muted-foreground text-sm flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a
                  href="mailto:info@pivot-profit.com"
                  className="text-primary hover:underline"
                >
                  info@pivot-profit.com
                </a>
              </p>
              <p className="text-muted-foreground text-sm flex items-center">
                <PhoneCall className="h-5 w-5 mr-2" />
                <a
                  href="tel:+918552888440"
                  className="text-primary hover:underline"
                >
                  +91 8552888440
                </a>
              </p>
              <p className="text-muted-foreground text-sm flex items-center">
                <PhoneCall className="h-5 w-5 mr-2" />
                <a
                  href="tel:+917709047079"
                  className="text-primary hover:underline"
                >
                  +91 7709047079
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          © 2024 Pivot-Profit Fincare Pvt. Ltd. All rights reserved. <br />
          Registered Office: Plot 123, XYZ Road, Nagpur, India.
        </div>
      </div>
    </footer>
  );
}
