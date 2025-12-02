import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
  </svg>
);

const Contacts = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "quantix.me@gmail.com",
      href: "mailto:quantix.me@gmail.com",
      color: "primary",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "PruthvishGhedia",
      href: "https://github.com/PruthvishGhedia/",
      color: "secondary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Pruthvish Ghedia",
      href: "https://www.linkedin.com/in/pruthvish-ghedia",
      color: "primary",
    },
    {
      icon: DiscordIcon,
      label: "Discord",
      value: "dimey__",
      href: "https://discord.com",
      color: "secondary",
      isCustomIcon: true,
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
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
                  {contact.isCustomIcon ? (
                    <div className={`text-${contact.color}`}><contact.icon /></div>
                  ) : (
                    <contact.icon className={`h-6 w-6 text-${contact.color}`} />
                  )}
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
