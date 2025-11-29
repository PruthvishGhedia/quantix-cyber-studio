import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const completedApps = [
    {
      title: "Kahoot Clone",
      description: "Interactive quiz platform with real-time multiplayer functionality, leaderboards, and engaging UI. Built for educational institutions and corporate training.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "🎮",
      featured: true,
    },
    {
      title: "Restorant",
      description: "Modern restaurant management system with order tracking, inventory management, and customer analytics. Streamlines operations for food service businesses.",
      tech: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
      image: "🍽️",
      featured: true,
    },
    {
      title: "Dot Arena",
      description: "Competitive multiplayer game with real-time physics, matchmaking system, and tournament support. Features smooth animations and responsive controls.",
      tech: ["TypeScript", "WebGL", "Express", "Redis"],
      image: "🎯",
      featured: true,
    },
  ];

  const smallProjects = [
    { title: "Pac Calculator", description: "Advanced scientific calculator", tech: ["Python", "Tkinter"] },
    { title: "RC Car Automation", description: "IoT-based remote control system", tech: ["Arduino", "C++"] },
    { title: "AI Blog", description: "AI-powered content generation", tech: ["Python", "OpenAI"] },
    { title: "Chat Bot", description: "Conversational AI assistant", tech: ["NLP", "FastAPI"] },
    { title: "Chat GPT", description: "Custom GPT implementation", tech: ["Transformers", "PyTorch"] },
    { title: "Mini Calculator", description: "Lightweight calculator app", tech: ["JavaScript"] },
    { title: "CSV-JSON", description: "Data format converter", tech: ["Python"] },
    { title: "AI Chatbot", description: "Intelligent conversation system", tech: ["ML", "Flask"] },
    { title: "Email Projects", description: "Automated email workflows", tech: ["Node.js"] },
    { title: "Small Automations", description: "Various automation scripts", tech: ["Python"] },
    { title: "The Statements", description: "Financial report generator", tech: ["Python", "Pandas"] },
    { title: "Web Dev Learning", description: "Educational web projects", tech: ["HTML", "CSS", "JS"] },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-0 right-0 w-64 h-64 border border-secondary/10 rotate-45" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Featured</span> Projects
          </h2>
          <p className="text-muted-foreground text-lg">Building innovative solutions across the stack</p>
        </div>

        {/* Completed Apps - Large Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-primary">Complete Applications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedApps.map((project, index) => (
              <Card
                key={index}
                className="cyber-card hover-glow group cursor-pointer"
              >
                <CardHeader>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {project.image}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="neon-border text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      <Github className="h-4 w-4" />
                      <span>Code</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground hover:text-secondary transition-colors cursor-pointer">
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Small Projects - Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-secondary">Small Projects</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {smallProjects.map((project, index) => (
              <Card
                key={index}
                className="cyber-card hover-glow group cursor-pointer p-4"
              >
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors text-sm">
                  {project.title}
                </h4>
                <p className="text-xs text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-[10px] px-2 py-0">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
