
import { useRef, useEffect, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "right";
  delay?: number;
}

const ScrollReveal = ({ 
  children, 
  className = "", 
  direction = "up",
  delay = 0
}: ScrollRevealProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("active");
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={sectionRef} 
      className={`${direction === "right" ? "reveal-right" : "reveal"} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
