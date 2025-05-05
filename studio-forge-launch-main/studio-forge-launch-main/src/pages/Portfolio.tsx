
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const Portfolio = () => {
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
              <h1 className="heading-lg mb-6">Our Portfolio</h1>
              <p className="text-lg text-gray-600">
                Meet the innovative startups we've built and invested in across multiple industries.
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
                <h2 className="heading-md mb-4">Portfolio Showcase Coming Soon</h2>
                <p className="text-gray-600 mb-8">
                  We're preparing a comprehensive showcase of our portfolio companies. 
                  Check back soon to explore our innovative startups.
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                <Card className="border border-gray-200">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-3">Industry Focus</h3>
                    <p className="text-gray-600 mb-4">
                      Our portfolio companies span several innovative sectors including:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">Fintech</span>
                      <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">AI/ML</span>
                      <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">Health Tech</span>
                      <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">SaaS</span>
                      <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">Climate Tech</span>
                      <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">Web3</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-medium mb-3">Interested in Joining?</h3>
                    <p className="text-gray-600 mb-6">
                      Are you a founder with a groundbreaking idea? We'd love to hear from you and explore 
                      how ForgeVentures can help bring your vision to life.
                    </p>
                    <Button asChild>
                      <Link to="/contact">
                        <Mail className="mr-2" size={18} />
                        Pitch Your Idea
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-16">
                <Button asChild variant="outline">
                  <Link to="/">Return to Home</Link>
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

export default Portfolio;
