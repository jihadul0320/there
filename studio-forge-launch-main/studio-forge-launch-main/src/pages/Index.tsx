
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import TestimonialSection from "@/components/home/TestimonialSection";
import CtaSection from "@/components/home/CtaSection";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <IntroSection />
        <PortfolioPreview />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
