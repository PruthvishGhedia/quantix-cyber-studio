import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Zap, Users, BookOpen } from "lucide-react";

const About = () => {
  const funFacts = [
    "Started coding at age 14",
    "Coffee enthusiast ☕",
    "Open source contributor",
    "Love solving puzzles",
    "Night owl 🦉",
    "Gaming in spare time",
  ];

  const highlights = [
    {
      icon: Code,
      title: "Clean Code Advocate",
      description: "Passionate about writing maintainable, efficient, and elegant code",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach to problem-solving and development",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always exploring new tools, languages, and best practices",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-primary">About</span> Me
              </h1>
              <p className="text-xl text-muted-foreground">Get to know the person behind the code</p>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Bio Section */}
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-primary">Hello, I'm Quantix</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm Pruthvish Ghedia, a passionate full-stack developer and systems programmer with a 
                    deep love for creating innovative solutions. My journey in technology started with 
                    curiosity and evolved into a career of building impactful applications.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I specialize in crafting seamless user experiences on the frontend while building 
                    robust, scalable systems on the backend. From React to Node.js, from Python to C++, 
                    I enjoy working across the entire technology stack.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not coding, you'll find me exploring the latest in AI/ML, contributing to 
                    open source projects, or diving into system architecture challenges. I believe in 
                    continuous learning and sharing knowledge with the community.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary">Fun Facts</h3>
                  <div className="flex flex-wrap gap-2">
                    {funFacts.map((fact, index) => (
                      <Badge key={index} variant="outline" className="neon-border">
                        {fact}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Avatar and Stats */}
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <Card className="cyber-card p-8">
                  <div className="w-48 h-48 rounded-full bg-card border-4 border-primary glow-purple mx-auto flex items-center justify-center mb-6">
                    <div className="text-8xl font-bold text-primary">Q</div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Pruthvish Ghedia</h3>
                    <p className="text-muted-foreground">Full-Stack Developer</p>
                  </div>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="cyber-card p-4 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">10+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </Card>
                  <Card className="cyber-card p-4 text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">5+</div>
                    <div className="text-sm text-muted-foreground">Languages</div>
                  </Card>
                  <Card className="cyber-card p-4 text-center">
                    <div className="text-3xl font-bold text-primary mb-1">2+</div>
                    <div className="text-sm text-muted-foreground">Years</div>
                  </Card>
                  <Card className="cyber-card p-4 text-center">
                    <div className="text-3xl font-bold text-secondary mb-1">∞</div>
                    <div className="text-sm text-muted-foreground">Passion</div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">
                What <span className="text-primary">Drives</span> Me
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((item, index) => (
                  <Card
                    key={index}
                    className="cyber-card hover-glow p-6 text-center group"
                  >
                    <div className="mb-4 inline-block p-4 rounded-lg bg-primary/10 border border-primary/30 glow-purple">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education & Experience */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="cyber-card p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Education</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">Computer Science</div>
                    <div className="text-sm text-muted-foreground">University Name</div>
                    <div className="text-xs text-muted-foreground">2020 - 2024</div>
                  </div>
                </div>
              </Card>

              <Card className="cyber-card p-6">
                <h3 className="text-2xl font-bold mb-4 text-secondary">Experience</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold">Full-Stack Developer</div>
                    <div className="text-sm text-muted-foreground">Freelance</div>
                    <div className="text-xs text-muted-foreground">2022 - Present</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
