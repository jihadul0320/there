import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-6">ForgeVentures</h3>
            <p className="text-silver-light mb-6">
              Building the future through innovation, partnership, and strategic investment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-silver hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-silver hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-silver hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-silver hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-silver hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-silver hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-silver hover:text-white transition-colors">
                  Our Startups
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-silver hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-lg mb-6">Get Involved</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/join" className="text-silver hover:text-white transition-colors">
                  Founders
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-silver hover:text-white transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-silver hover:text-white transition-colors">
                  Operators
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-silver hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-medium text-lg mb-6">Contact</h4>
            <address className="not-italic text-silver mb-4">
              123 Innovation Way<br />
              San Francisco, CA 94103
            </address>
            <p className="text-silver mb-2">hello@forgeventures.com</p>
            <p className="text-silver">+1 (555) 123-4567</p>
          </div>
        </div>
        
        <div className="border-t border-navy-light mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-silver text-sm mb-4 md:mb-0">
            © {currentYear} ForgeVentures. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-silver hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-silver hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
