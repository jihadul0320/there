
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Working with ForgeVentures has been transformative for our startup. Their hands-on approach, strategic guidance, and network access accelerated our growth beyond what we thought possible.",
    name: "Sarah Johnson",
    role: "Founder & CEO",
    company: "NexaHealth",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "The studio model provided exactly what we needed - not just capital, but operational expertise and talent resources that helped us navigate the critical early stages of our business.",
    name: "Michael Chen",
    role: "Co-founder",
    company: "PayFlow",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "As an investor, I've been impressed with ForgeVentures' systematic approach to company building. Their portfolio companies consistently demonstrate stronger fundamentals and clearer paths to market.",
    name: "Amanda Rodriguez",
    role: "General Partner",
    company: "Horizon Ventures",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <section className="section-padding bg-navy text-white">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="heading-lg mb-16 text-center">What People Say About Us</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Quote marks */}
              <div className="absolute -top-10 -left-4 text-[120px] leading-none text-cobalt opacity-20 font-serif">"</div>
              
              <div className="space-y-10">
                <p className="text-xl md:text-2xl leading-relaxed text-silver-light z-10 relative">
                  {testimonials[activeIndex].quote}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold">{testimonials[activeIndex].name}</h4>
                      <p className="text-silver-light text-sm">
                        {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full border border-silver flex items-center justify-center hover:bg-navy-light transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ArrowLeft size={18} />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full border border-silver flex items-center justify-center hover:bg-navy-light transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialSection;
