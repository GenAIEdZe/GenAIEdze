import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";

const projects = [
  {
    name: "GPT-Researcher",
    description: "Autonomous agent for comprehensive online research and report generation",
    tags: ["Research", "Automation", "Reports"],
    stars: "12k+",
    forks: "1.5k+",
    language: "Python",
    link: "https://github.com/assafelovic/gpt-researcher",
    demo: "https://gptr.dev/",
    difficulty: "Intermediate",
    features: ["Web scraping", "Multi-source research", "Report generation", "Citations"]
  },
  {
    name: "AgentGPT",
    description: "Browser-based autonomous AI agent for achieving user-defined goals",
    tags: ["Web", "Autonomous", "Goal-oriented"],
    stars: "30k+",
    forks: "8k+",
    language: "TypeScript",
    link: "https://github.com/reworkd/AgentGPT",
    demo: "https://agentgpt.reworkd.ai/",
    difficulty: "Beginner",
    features: ["Web UI", "Task planning", "Long-running goals", "Self-directed"]
  },
  {
    name: "BabyAGI",
    description: "Minimalist task-driven autonomous agent using OpenAI and vector databases",
    tags: ["Minimal", "Task Management", "Vector DB"],
    stars: "20k+",
    forks: "2.5k+",
    language: "Python",
    link: "https://github.com/yoheinakajima/babyagi",
    difficulty: "Intermediate",
    features: ["Task creation", "Prioritization", "Execution loop", "Memory"]
  },
  {
    name: "Agents Cookbook",
    description: "Collection of practical examples for building agents with various frameworks",
    tags: ["Examples", "Tutorials", "Multi-framework"],
    stars: "5k+",
    forks: "800+",
    language: "Python",
    link: "https://github.com/microsoft/autogen/tree/main/notebook",
    difficulty: "Beginner",
    features: ["Code examples", "Tutorials", "Best practices", "Multi-agent"]
  },
  {
    name: "SuperAGI",
    description: "Dev-first open-source autonomous AI agent framework with GUI",
    tags: ["Framework", "GUI", "Production"],
    stars: "15k+",
    forks: "2k+",
    language: "Python",
    link: "https://github.com/TransformerOptimus/SuperAGI",
    difficulty: "Advanced",
    features: ["GUI dashboard", "Tool marketplace", "Performance tracking", "Agent templates"]
  },
  {
    name: "MetaGPT",
    description: "Multi-agent framework for role-playing and collaborative software development",
    tags: ["Multi-agent", "Software Dev", "Collaboration"],
    stars: "40k+",
    forks: "5k+",
    language: "Python",
    link: "https://github.com/geekan/MetaGPT",
    difficulty: "Advanced",
    features: ["Role assignment", "Code generation", "Design docs", "Team simulation"]
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Sample Projects</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Production-Ready <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world implementations and starter templates to accelerate your development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.name} className="group hover:shadow-elevated transition-smooth border-border/50 flex flex-col">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {project.name}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {project.difficulty}
                  </Badge>
                </div>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                    <span className="text-xs">{project.language}</span>
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-medium text-muted-foreground">Key Features</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.features.map((feature) => (
                        <span key={feature} className="text-xs px-2 py-1 rounded-md bg-muted/50">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn border-accent/30 hover:bg-accent/10"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
