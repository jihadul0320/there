
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const Join = () => {
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
              <h1 className="heading-lg mb-6">Get Involved</h1>
              <p className="text-lg text-gray-600">
                Discover how you can partner with ForgeVentures as a founder, investor, or operator.
              </p>
            </ScrollReveal>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container mx-auto">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-navy/10 rounded-full flex items-center justify-center">
                    <Calendar size={50} className="text-navy opacity-50" />
                  </div>
                </div>
                <h2 className="heading-md mb-4">Ways to Partner Coming Soon</h2>
                <p className="text-gray-600 mb-8">
                  We're finalizing the details for our partner programs. Check back soon to learn how 
                  you can get involved with ForgeVentures.
                </p>
              </div>
                
              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                <Card className="border border-gray-200">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-3">For Founders</h3>
                    <p className="text-gray-600 mb-6">
                      Have a groundbreaking idea? We're creating a streamlined process for founders to 
                      connect and collaborate with our venture studio.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/contact">Express Interest</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-3">For Investors</h3>
                    <p className="text-gray-600 mb-6">
                      Looking for high-potential startup opportunities? Our investor relations program 
                      is being designed to provide access to our portfolio.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/contact">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-3">For Talent</h3>
                    <p className="text-gray-600 mb-6">
                      Are you a developer, designer, marketer, or operator interested in joining 
                      innovative startups? We're creating a talent network.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/contact">Register Interest</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-16">
                <Button asChild>
                  <Link to="/contact">
                    <Mail className="mr-2" size={18} />
                    Contact Us Now
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Join;
