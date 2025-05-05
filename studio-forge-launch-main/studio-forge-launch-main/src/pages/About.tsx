
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const About = () => {
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
              <h1 className="heading-lg mb-6">About ForgeVentures</h1>
              <p className="text-lg text-gray-600">
                We're a venture studio that believes in systematic innovation through 
                collaborative building, strategic investment, and operational excellence.
              </p>
            </ScrollReveal>
          </div>
        </section>
        
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <div className="absolute inset-0 bg-navy/10 rounded-full flex items-center justify-center">
                      <Calendar size={50} className="text-navy opacity-50" />
                    </div>
                  </div>
                  <h2 className="heading-md mb-4">Our Story Coming Soon</h2>
                  <p className="text-gray-600 mb-8">
                    We're crafting a comprehensive overview of ForgeVentures' mission, vision, and approach to 
                    venture building. Check back soon for the complete story.
                  </p>
                </div>
                
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border border-gray-200">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-medium mb-3">Our Approach</h3>
                      <p className="text-gray-600 mb-4">
                        ForgeVentures combines capital, talent, and strategic guidance to transform innovative ideas 
                        into market-leading companies.
                      </p>
                      <ul className="space-y-2 text-gray-600 list-disc list-inside">
                        <li>Systematic idea validation</li>
                        <li>Founder-market fit optimization</li>
                        <li>Technical infrastructure support</li>
                        <li>Product development expertise</li>
                        <li>Go-to-market strategy</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-gray-200">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-medium mb-3">Core Values</h3>
                      <ul className="space-y-4 text-gray-600">
                        <li>
                          <strong className="text-navy block">Innovation First</strong>
                          We prioritize groundbreaking ideas that solve meaningful problems.
                        </li>
                        <li>
                          <strong className="text-navy block">Founder Focus</strong>
                          We believe exceptional founders are the cornerstone of successful startups.
                        </li>
                        <li>
                          <strong className="text-navy block">Data-Driven</strong>
                          Our decisions are guided by metrics, testing, and validated learning.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="text-center mt-16">
                  <Button asChild>
                    <Link to="/contact">Connect With Us</Link>
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

export default About;
