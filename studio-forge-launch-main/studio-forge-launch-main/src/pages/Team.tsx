
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Team = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="heading-lg mb-6">Our Team</h1>
              <p className="text-lg text-gray-600">
                Meet the founders, operators, and advisors behind ForgeVentures.
              </p>
            </ScrollReveal>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <ScrollReveal>
                <div className="mb-8">
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <div className="absolute inset-0 bg-navy/10 rounded-full flex items-center justify-center">
                      <Calendar size={50} className="text-navy opacity-50" />
                    </div>
                  </div>
                  <h2 className="heading-md mb-4">Meet Our Team Soon</h2>
                  <p className="text-gray-600 mb-8">
                    We're putting the finishing touches on our team profiles. Check back in the coming weeks to meet 
                    the innovators, strategists, and operators who make ForgeVentures exceptional.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="outline">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                    <Button asChild>
                      <Link to="/">Return Home</Link>
                    </Button>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-10 mt-10">
                  <h3 className="text-xl font-medium mb-4">Want to join our team?</h3>
                  <p className="text-gray-600 mb-6">
                    We're always looking for exceptional talent to join our mission of building the next generation of 
                    innovative startups.
                  </p>
                  <Button asChild>
                    <Link to="/contact">
                      <Mail className="mr-2" size={18} />
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
