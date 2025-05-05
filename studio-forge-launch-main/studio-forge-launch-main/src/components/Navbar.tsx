
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-heading text-2xl font-bold text-navy">ForgeVentures</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className="text-navy hover:text-cobalt font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-navy hover:text-cobalt font-medium transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/portfolio"
            className="text-navy hover:text-cobalt font-medium transition-colors"
          >
            Our Startups
          </Link>
          <Link
            to="/team"
            className="text-navy hover:text-cobalt font-medium transition-colors"
          >
            Team
          </Link>
          <Link
            to="/join"
            className="text-navy hover:text-cobalt font-medium transition-colors"
          >
            Get Involved
          </Link>
          <Link
            to="/blog"
            className="text-navy hover:text-cobalt font-medium transition-colors"
          >
            Insights
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="btn-primary">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-navy focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="container mx-auto py-4 flex flex-col space-y-4">
          <Link
            to="/"
            className="text-navy hover:text-cobalt font-medium transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-navy hover:text-cobalt font-medium transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/portfolio"
            className="text-navy hover:text-cobalt font-medium transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Startups
          </Link>
          <Link
            to="/team"
            className="text-navy hover:text-cobalt font-medium transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Team
          </Link>
          <Link
            to="/join"
            className="text-navy hover:text-cobalt font-medium transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Involved
          </Link>
          <Link
            to="/blog"
            className="text-navy hover:text-cobalt font-medium transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Insights
          </Link>
          <Button asChild className="btn-primary w-full">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
