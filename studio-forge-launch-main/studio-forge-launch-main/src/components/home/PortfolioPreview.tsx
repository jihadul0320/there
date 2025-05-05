
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

interface StartupCardProps {
  name: string;
  logo: string;
  description: string;
  tags: string[];
  delay: number;
}

const StartupCard = ({ name, logo, description, tags, delay }: StartupCardProps) => (
  <ScrollReveal delay={delay} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:translate-y-[-5px] duration-300">
    <div className="flex items-center space-x-4 mb-4">
      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
        <img src={logo} alt={name} className="w-8 h-8 object-contain" />
      </div>
      <h3 className="font-heading font-bold text-xl">{name}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span 
          key={tag} 
          className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
        >
          {tag}
        </span>
      ))}
    </div>
    <a href="#" className="text-cobalt hover:text-cobalt-dark flex items-center gap-1 font-medium">
      Learn more <ArrowRight size={16} />
    </a>
  </ScrollReveal>
);

// Mock data for portfolio startups
const portfolioData = [
  {
    name: "NexaHealth",
    logo: "https://via.placeholder.com/150",
    description: "AI-powered diagnostics platform revolutionizing early disease detection.",
    tags: ["HealthTech", "AI", "SaaS"]
  },
  {
    name: "GreenSync",
    logo: "https://via.placeholder.com/150",
    description: "Sustainable energy management solutions for smart buildings and cities.",
    tags: ["CleanTech", "IoT", "B2B"]
  },
  {
    name: "PayFlow",
    logo: "https://via.placeholder.com/150",
    description: "Streamlining cross-border payments for emerging markets using blockchain.",
    tags: ["FinTech", "Blockchain", "Payments"]
  },
  {
    name: "DataMesh",
    logo: "https://via.placeholder.com/150",
    description: "Enterprise data integration platform with no-code automation tools.",
    tags: ["Enterprise", "Data", "No-Code"]
  }
];

const PortfolioPreview = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <ScrollReveal>
            <h2 className="heading-lg">Our Startups</h2>
            <p className="text-gray-600 max-w-2xl mt-4">
              Meet the innovative companies we've launched and supported on their journey to transform industries and create impact.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <Button asChild variant="ghost" className="text-cobalt hover:text-cobalt-dark hover:bg-cobalt/5">
              <Link to="/portfolio" className="flex items-center gap-2">
                View all portfolio companies <ArrowRight size={18} />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.map((startup, index) => (
            <StartupCard 
              key={startup.name}
              {...startup}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
