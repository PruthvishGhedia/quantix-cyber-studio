import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      name: "Systems & Backend",
      skills: ["Linux", "Docker", "Kubernetes", "AWS", "PostgreSQL", "Redis", "MongoDB"],
      color: "primary",
    },
    {
      name: "AI & Machine Learning",
      skills: ["Python", "TensorFlow", "PyTorch", "OpenAI", "NLP", "Computer Vision"],
      color: "secondary",
    },
    {
      name: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C++", "Rust", "Go", "Java"],
      color: "primary",
    },
    {
      name: "Web Development",
      skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Vue.js"],
      color: "secondary",
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Jira", "CI/CD"],
      color: "primary",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-secondary">Technical</span> Skills
          </h2>
          <p className="text-muted-foreground text-lg">A diverse toolkit for building modern applications</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className={`text-xl font-semibold mb-4 ${category.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <Badge
                    key={i}
                    variant="outline"
                    className={`neon-border px-4 py-2 text-sm hover:bg-${category.color}/10 transition-colors cursor-default`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
