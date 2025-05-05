
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect } from "react";

const Blog = () => {
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
              <h1 className="heading-lg mb-6">Insights & News</h1>
              <p className="text-lg text-gray-600">
                Stay updated with our latest thinking, announcements, and startup insights.
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
                  <h2 className="heading-md mb-4">Content Coming Soon</h2>
                  <p className="text-gray-600 mb-8">
                    Our team is working on creating valuable insights, case studies, and thought leadership 
                    pieces to share with our community. Check back soon!
                  </p>
                </div>
                
                <div className="grid gap-8 md:grid-cols-2">
                  <Card className="border border-gray-200">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-medium mb-2">Upcoming Topics</h3>
                      <ul className="space-y-3 text-gray-600 list-disc list-inside">
                        <li>Venture Building: The Studio Approach</li>
                        <li>Navigating Funding Rounds as a First-time Founder</li>
                        <li>Tech Stack Decisions for Early-stage Startups</li>
                        <li>Building in Public: Transparency in Startup Culture</li>
                        <li>Scaling Operations: From MVP to Product-Market Fit</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-gray-200">
                    <CardContent className="pt-6">
                      <h3 className="text-xl font-medium mb-4">Stay Updated</h3>
                      <p className="text-gray-600 mb-6">
                        Want to be notified when we publish new content? Drop us a line and we'll add you to our 
                        distribution list.
                      </p>
                      <Button asChild>
                        <Link to="/contact">
                          <Mail className="mr-2" size={18} />
                          Contact Us
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="flex justify-center mt-12">
                  <Button asChild variant="outline">
                    <Link to="/">Return to Home</Link>
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

export default Blog;
