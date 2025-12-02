import { Badge } from "@/components/ui/badge";
import { Code2, Cpu, Zap } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    { icon: Code2, label: "Full-Stack Dev" },
    { icon: Cpu, label: "AI/ML Enthusiast" },
    { icon: Zap, label: "Systems Thinker" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">About</span> Me
          </h2>
          <p className="text-muted-foreground text-lg">Passion meets purpose in code</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="cyber-card p-8 text-center">
            <div className="w-24 h-24 rounded-full bg-card border-2 border-primary glow-purple mx-auto flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-primary">Q</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Pruthvish Ghedia</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A passionate developer from the Quantix Cyber Studio, building innovative solutions 
              across full-stack development, AI/ML, and systems programming. I turn complex ideas 
              into elegant, functional applications.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-secondary" />
                  <Badge variant="outline" className="neon-border">
                    {item.label}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
