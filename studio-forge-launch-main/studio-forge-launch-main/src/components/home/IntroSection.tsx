
import { Rocket, Users, Briefcase } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const StudioFeature = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
    <div className="bg-cobalt/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
      <Icon className="text-cobalt" size={24} />
    </div>
    <h3 className="heading-sm mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const IntroSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">What Makes Our Venture Studio Unique</h2>
          <p className="text-lg text-gray-600">
            We're not just an accelerator or an investment firm. We combine funding, talent, and strategic resources to systematically build multiple startups with higher success rates.
          </p>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StudioFeature 
              icon={Rocket}
              title="Startup Creation"
              description="We ideate and validate concepts, then build dedicated teams around the most promising opportunities."
            />
            <StudioFeature 
              icon={Users}
              title="Talent Network"
              description="Access to our pool of experienced founders, operators, and technical experts ready to join your venture."
            />
            <StudioFeature 
              icon={Briefcase}
              title="Capital & Resources"
              description="Initial funding, strategic guidance, and operational support to help startups reach key milestones faster."
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IntroSection;
