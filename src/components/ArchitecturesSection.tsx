import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Workflow, GitBranch, Layers } from "lucide-react";

const architectures = [
  {
    name: "ReAct",
    icon: GitBranch,
    description: "Reasoning and Acting framework that interleaves thought, action, and observation",
    type: "Single-Agent",
    useCase: "General-purpose tasks with tool usage",
    benefits: ["Interpretable reasoning", "Dynamic tool selection", "Error recovery", "Transparent decision-making"],
    example: `Think: I need to find current weather
Action: search("weather in NYC")
Observation: 72°F, sunny
Think: Now I can answer the user`,
    color: "from-blue-500 to-indigo-500"
  },
  {
    name: "Plan-and-Execute",
    icon: Workflow,
    description: "Two-phase approach: planning agent creates steps, executor carries them out",
    type: "Orchestration",
    useCase: "Complex multi-step tasks requiring planning",
    benefits: ["Structured execution", "Clear task decomposition", "Parallel execution", "Better resource management"],
    example: `Planner: [1. Gather data, 2. Analyze, 3. Report]
Executor: Execute step 1 → Execute step 2 → Execute step 3`,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Reflection",
    icon: Layers,
    description: "Self-improvement pattern where agents critique and refine their own outputs",
    type: "Self-Improvement",
    useCase: "High-quality outputs requiring iteration",
    benefits: ["Quality improvement", "Error detection", "Iterative refinement", "Self-correction"],
    example: `Initial output → Self-critique → Refinement → Final output`,
    color: "from-green-500 to-teal-500"
  },
  {
    name: "Multi-Agent Collaboration",
    icon: Code2,
    description: "Multiple specialized agents working together with defined roles and communication",
    type: "Multi-Agent",
    useCase: "Complex problems requiring diverse expertise",
    benefits: ["Specialization", "Parallel processing", "Fault tolerance", "Scalability"],
    example: `Manager → Delegate to Specialist Agents → Synthesize Results`,
    color: "from-orange-500 to-red-500"
  }
];

const patterns = [
  { name: "Tool Use", desc: "Agents calling external APIs and services" },
  { name: "Memory", desc: "Short-term and long-term information retention" },
  { name: "RAG", desc: "Retrieval-Augmented Generation for knowledge grounding" },
  { name: "Chain-of-Thought", desc: "Step-by-step reasoning process" },
  { name: "Tree-of-Thoughts", desc: "Exploring multiple reasoning paths" },
  { name: "Self-Ask", desc: "Breaking down questions into sub-questions" },
];

const ArchitecturesSection = () => {
  return (
    <section id="architectures" className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Architectures</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Battle-Tested <span className="text-gradient">Patterns</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proven architectural patterns for building reliable, scalable AI agent systems
          </p>
        </div>

        <Tabs defaultValue="patterns" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="patterns">Core Patterns</TabsTrigger>
            <TabsTrigger value="techniques">Techniques</TabsTrigger>
          </TabsList>
          
          <TabsContent value="patterns" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {architectures.map((arch) => (
                <Card key={arch.name} className="group hover:shadow-elevated transition-smooth border-border/50 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${arch.color}`} />
                  <CardHeader>
                    <div className="flex items-start gap-4 mb-2">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${arch.color} glow-primary`}>
                        <arch.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-2xl">{arch.name}</CardTitle>
                          <Badge variant="secondary" className="text-xs">
                            {arch.type}
                          </Badge>
                        </div>
                        <CardDescription className="text-base">
                          {arch.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Use Case</p>
                      <p className="text-sm">{arch.useCase}</p>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">Benefits</p>
                      <div className="flex flex-wrap gap-2">
                        {arch.benefits.map((benefit) => (
                          <Badge key={benefit} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-xs font-mono text-muted-foreground mb-2">Pattern Flow</p>
                      <pre className="text-xs font-mono whitespace-pre-wrap">{arch.example}</pre>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="techniques" className="mt-8">
            <div className="grid md:grid-cols-3 gap-4">
              {patterns.map((pattern) => (
                <Card key={pattern.name} className="hover:shadow-card transition-smooth">
                  <CardHeader>
                    <CardTitle className="text-lg">{pattern.name}</CardTitle>
                    <CardDescription>{pattern.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ArchitecturesSection;
