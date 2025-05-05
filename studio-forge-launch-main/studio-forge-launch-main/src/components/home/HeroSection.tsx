
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-white to-gray-50 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-cobalt/5 blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[30%] w-[80%] h-[80%] rounded-full bg-cobalt/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <span className="inline-block px-3 py-1 bg-cobalt/10 text-cobalt rounded-full text-sm font-medium mb-6">
                Innovation Meets Capital
              </span>
              <h1 className="heading-xl mb-6">
                Build The Future <br />
                <span className="gradient-text">With Us</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 max-w-lg">
                We're a venture studio that creates, builds, and scales the next generation of
                industry-defining companies through a unique combination of capital, talent, and strategy.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild className="btn-primary">
                  <Link to="/portfolio">
                    Explore Our Ventures <ArrowRight size={18} />
                  </Link>
                </Button>
                
                <Button asChild className="btn-secondary">
                  <Link to="/join">Partner With Us</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="order-1 lg:order-2">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-navy to-navy-light rounded-2xl overflow-hidden shadow-lg flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Innovative Technology" 
                    className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <p className="text-white/90 text-2xl font-medium max-w-xs">Creating tomorrow's companies, today</p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-cobalt rounded-2xl shadow-lg flex items-center justify-center p-6 hidden md:flex">
                  <p className="text-white text-xl font-medium">20+ startups launched and counting</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
