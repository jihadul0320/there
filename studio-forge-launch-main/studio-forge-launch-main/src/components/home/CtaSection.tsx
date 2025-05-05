
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const CtaSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-navy to-navy-light rounded-2xl p-10 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="heading-lg text-white mb-6">Ready to Build Something Great?</h2>
              <p className="text-silver-light text-lg mb-8">
                Whether you're a founder with an idea, an investor looking for opportunities, 
                or a talented individual seeking to join a startup, we'd love to connect.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-white text-navy hover:bg-gray-100 transition-colors px-6 py-3 rounded-md font-medium inline-flex items-center gap-2">
                  <Link to="/join">
                    Start Your Journey <ArrowRight size={18} />
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 transition-colors">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-heading font-bold text-white text-xl mb-4">Join Our Community</h3>
                <p className="text-silver-light mb-6">
                  Get updates on our latest ventures, events, and opportunities by subscribing to our newsletter.
                </p>
                
                <form className="space-y-4">
                  <div>
                    <input 
                      type="email"
                      placeholder="Your email address"
                      className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder-silver-light focus:outline-none focus:ring-2 focus:ring-cobalt"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-cobalt hover:bg-cobalt-light text-white transition-colors">
                    Subscribe
                  </Button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
