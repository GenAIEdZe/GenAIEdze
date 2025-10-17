import { Github, Twitter, Mail, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Community", href: "#" },
      ],
    },
    {
      title: "Frameworks",
      links: [
        { name: "LangChain", href: "https://langchain.com" },
        { name: "CrewAI", href: "https://crewai.com" },
        { name: "AutoGPT", href: "https://autogpt.net" },
        { name: "LlamaIndex", href: "https://llamaindex.ai" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "GitHub", href: "#", icon: Github },
        { name: "Twitter", href: "#", icon: Twitter },
        { name: "Contact", href: "#", icon: Mail },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gradient">GenAIEdZe</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your comprehensive resource hub for building the future of AI agents and autonomous systems.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-foreground">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-2"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      {link.name}
                      {link.href.startsWith("http") && <ExternalLink className="w-3 h-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} GenAIEdZe. Built with{" "}
              <Heart className="inline w-4 h-4 fill-red-500 text-red-500" /> for the AI community
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/30 hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://github.com/genaiedze/genaiedze.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 w-4 h-4" />
                  Contribute
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
