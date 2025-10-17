import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Github, Video, FileText, ExternalLink, Star } from "lucide-react";

const resources = [
  {
    category: "Awesome Lists",
    icon: Github,
    items: [
      {
        title: "awesome-ai-agents",
        author: "e2b-dev",
        stars: "8k+",
        description: "Comprehensive list of AI autonomous agents",
        link: "https://github.com/e2b-dev/awesome-ai-agents"
      },
      {
        title: "awesome-agents",
        author: "kyrolabs",
        stars: "3k+",
        description: "Curated list of AI agent frameworks and tools",
        link: "https://github.com/kyrolabs/awesome-agents"
      },
      {
        title: "awesome-llm-apps",
        author: "Shubhamsaboo",
        stars: "5k+",
        description: "Collection of LLM apps with AI Agents and RAG",
        link: "https://github.com/Shubhamsaboo/awesome-llm-apps"
      }
    ]
  },
  {
    category: "Learning Resources",
    icon: BookOpen,
    items: [
      {
        title: "LangChain Documentation",
        author: "LangChain",
        description: "Official docs with agent tutorials and examples",
        link: "https://python.langchain.com/docs/modules/agents/"
      },
      {
        title: "Intro to AI Agents",
        author: "Codecademy",
        description: "Beginner-friendly course on autonomous systems",
        link: "https://www.codecademy.com/learn/intro-to-ai-agents"
      },
      {
        title: "Build AI Agents",
        author: "Codecademy",
        description: "Hands-on course for building agentic workflows",
        link: "https://www.codecademy.com/learn/learn-how-to-build-ai-agents"
      }
    ]
  },
  {
    category: "Research Papers",
    icon: FileText,
    items: [
      {
        title: "ReAct: Synergizing Reasoning and Acting",
        author: "Yao et al.",
        description: "Foundation paper for ReAct agent pattern",
        link: "https://arxiv.org/abs/2210.03629"
      },
      {
        title: "Reflexion: Language Agents with Verbal Reinforcement",
        author: "Shinn et al.",
        description: "Self-reflection for improving agent performance",
        link: "https://arxiv.org/abs/2303.11366"
      },
      {
        title: "Toolformer: Language Models Can Teach Themselves",
        author: "Schick et al.",
        description: "Teaching LLMs to use external tools",
        link: "https://arxiv.org/abs/2302.04761"
      }
    ]
  },
  {
    category: "Video Tutorials",
    icon: Video,
    items: [
      {
        title: "Building AI Agents with LangChain",
        author: "LangChain",
        description: "Complete guide to agent development",
        link: "https://www.youtube.com/langchain"
      },
      {
        title: "CrewAI Multi-Agent Systems",
        author: "CrewAI",
        description: "Building collaborative agent teams",
        link: "https://www.youtube.com/crewai"
      },
      {
        title: "Advanced Agent Patterns",
        author: "DeepLearning.AI",
        description: "Production-ready agent architectures",
        link: "https://www.deeplearning.ai"
      }
    ]
  }
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Resources</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Curated <span className="text-gradient">Learning Hub</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Essential resources, papers, and tutorials to master AI agent development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {resources.map((category) => (
            <Card key={category.category} className="border-border/50 shadow-card">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.items.map((item) => (
                    <div
                      key={item.title}
                      className="p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-muted/50 transition-smooth group"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-base group-hover:text-primary transition-smooth">
                          {item.title}
                        </h4>
                        {item.stars && (
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                            <span>{item.stars}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{item.author}</p>
                      <p className="text-sm mb-3">{item.description}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs h-8 group/btn"
                        asChild
                      >
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          Explore
                          <ExternalLink className="ml-2 w-3 h-3 group-hover/btn:translate-x-1 transition-smooth" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
