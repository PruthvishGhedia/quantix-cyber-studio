import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rotate-45 animate-pulse" />
      <div className="absolute bottom-40 right-20 w-32 h-32 border border-secondary/20 animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-primary/30 rotate-12" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar Placeholder */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-card border-2 border-primary glow-purple mx-auto flex items-center justify-center">
              <div className="text-4xl font-bold text-primary">Q</div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-primary">Quantix</span>
            <br />
            <span className="text-foreground">Developer & Innovator</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Building the future with code. Specializing in full-stack development, 
            AI/ML, and systems programming. Turning ideas into elegant solutions.
          </p>

          <Button
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground glow-purple hover-glow animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Start Exploring
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="mt-12 flex items-center justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div>
              <div className="text-2xl font-bold text-primary">10+</div>
              <div>Projects</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-2xl font-bold text-secondary">5+</div>
              <div>Technologies</div>
            </div>
            <div className="w-px h-12 bg-border" />
            <div>
              <div className="text-2xl font-bold text-primary">2+</div>
              <div>Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
