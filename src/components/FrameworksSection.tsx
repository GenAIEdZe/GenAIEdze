import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, GitFork, TrendingUp } from "lucide-react";

const frameworks = [
  {
    name: "LangChain",
    description: "Modular framework for building LLM applications with extensive tool ecosystem and agent support",
    category: "General Purpose",
    stars: "85k+",
    language: "Python/TypeScript",
    strengths: ["ReAct agents", "Memory modules", "Tool integration", "LangGraph for workflows"],
    link: "https://github.com/langchain-ai/langchain",
    difficulty: "Intermediate",
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "CrewAI",
    description: "Multi-agent collaboration framework with role-based coordination and team workflows",
    category: "Multi-Agent",
    stars: "15k+",
    language: "Python",
    strengths: ["Role assignment", "Task delegation", "Team coordination", "Built-in workflows"],
    link: "https://github.com/joaomdmoura/crewai",
    difficulty: "Beginner",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "AutoGPT",
    description: "Autonomous AI agent with internet access and the ability to execute complex tasks independently",
    category: "Autonomous",
    stars: "165k+",
    language: "Python",
    strengths: ["Full autonomy", "Plugin system", "Long-running tasks", "Self-improvement"],
    link: "https://github.com/Significant-Gravitas/AutoGPT",
    difficulty: "Advanced",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "LlamaIndex",
    description: "Data framework specialized in RAG, ingestion, and query engines with workflow capabilities",
    category: "Data & RAG",
    stars: "32k+",
    language: "Python/TypeScript",
    strengths: ["Data connectors", "RAG optimization", "LlamaParse", "Query engines"],
    link: "https://github.com/run-llama/llama_index",
    difficulty: "Intermediate",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Semantic Kernel",
    description: "Microsoft's enterprise-grade SDK for integrating AI into applications with planners and plugins",
    category: "Enterprise",
    stars: "20k+",
    language: "C#/Python/Java",
    strengths: ["Enterprise ready", "Planner agents", "Plugin architecture", "Microsoft integration"],
    link: "https://github.com/microsoft/semantic-kernel",
    difficulty: "Intermediate",
    color: "from-indigo-500 to-blue-500"
  },
  {
    name: "AutoGen",
    description: "Framework for building multi-agent conversational systems with customizable agents",
    category: "Conversational",
    stars: "25k+",
    language: "Python",
    strengths: ["Multi-agent chat", "Code execution", "Human-in-the-loop", "Group chat"],
    link: "https://github.com/microsoft/autogen",
    difficulty: "Intermediate",
    color: "from-teal-500 to-green-500"
  }
];

const FrameworksSection = () => {
  return (
    <section id="frameworks" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Frameworks</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Leading AI Agent <span className="text-gradient">Frameworks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Production-ready frameworks for building autonomous AI agents, from simple tasks to complex multi-agent systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworks.map((framework) => (
            <Card key={framework.name} className="group hover:shadow-elevated transition-smooth border-border/50 backdrop-blur-sm overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${framework.color}`} />
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-2xl group-hover:text-primary transition-smooth">
                    {framework.name}
                  </CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {framework.category}
                  </Badge>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {framework.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span>{framework.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>{framework.difficulty}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {framework.strengths.map((strength) => (
                    <Badge key={strength} variant="outline" className="text-xs">
                      {strength}
                    </Badge>
                  ))}
                </div>

                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a href={framework.link} target="_blank" rel="noopener noreferrer">
                      View on GitHub
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrameworksSection;
