import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contacts = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "quantix@example.com",
      href: "mailto:quantix@example.com",
      color: "primary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@quantix",
      href: "https://github.com",
      color: "secondary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Pruthvish Ghedia",
      href: "https://linkedin.com",
      color: "primary",
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "@quantix",
      href: "https://twitter.com",
      color: "secondary",
    },
  ];

  return (
    <section id="contacts" className="py-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Get In</span> Touch
          </h2>
          <p className="text-muted-foreground text-lg">Let's connect and build something amazing together</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-card hover-glow p-6 flex items-center gap-4 group"
              >
                <div className={`p-3 rounded-lg bg-${contact.color}/10 border border-${contact.color}/30 glow-${contact.color === 'primary' ? 'purple' : 'blue'}`}>
                  <contact.icon className={`h-6 w-6 text-${contact.color}`} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{contact.label}</div>
                  <div className={`font-semibold group-hover:text-${contact.color} transition-colors`}>
                    {contact.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground glow-blue"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
