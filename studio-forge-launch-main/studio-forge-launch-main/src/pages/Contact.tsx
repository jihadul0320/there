
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="heading-lg mb-6">Contact Us</h1>
              <p className="text-lg text-gray-600">
                Have questions or want to learn more about ForgeVentures? We'd love to hear from you.
              </p>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <ScrollReveal className="lg:col-span-2">
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h2 className="heading-md mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cobalt focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cobalt focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cobalt focus:border-transparent"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Founder Inquiry">Founder Inquiry</option>
                        <option value="Investment Opportunity">Investment Opportunity</option>
                        <option value="Job Application">Job Application</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cobalt focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="btn-primary w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
              
              <ScrollReveal>
                <div className="bg-navy p-8 rounded-xl text-white h-full">
                  <h2 className="heading-md mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-navy-light p-2 rounded-full mt-1">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Visit Us</h3>
                        <address className="not-italic text-silver-light">
                          123 Innovation Way<br />
                          San Francisco, CA 94103
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-navy-light p-2 rounded-full mt-1">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Email Us</h3>
                        <a href="mailto:hello@forgeventures.com" className="text-silver-light hover:text-white transition-colors">
                          hello@forgeventures.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-navy-light p-2 rounded-full mt-1">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Call Us</h3>
                        <a href="tel:+15551234567" className="text-silver-light hover:text-white transition-colors">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>
                  </div>
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

export default Contact;
