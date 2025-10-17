import { Button } from "@/components/ui/button";
import { ArrowRight, Github, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />

      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Updated for 2025</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Build The Future with{" "}
            <span className="text-gradient">AI Agents</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your comprehensive hub for AI Agent development. Explore frameworks, architectures, and battle-tested patterns to build autonomous AI solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="gradient-hero text-white glow-primary group">
              Explore Frameworks
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10">
              <Github className="mr-2 w-5 h-5" />
              View on GitHub
            </Button>
            <Button size="lg" variant="outline" className="border-accent/30 hover:bg-accent/10">
              <BookOpen className="mr-2 w-5 h-5" />
              Documentation
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto">
            {[
              { number: "15+", label: "Frameworks" },
              { number: "50+", label: "Sample Projects" },
              { number: "8", label: "Architecture Patterns" },
              { number: "100+", label: "Resources" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border shadow-card hover:shadow-elevated transition-smooth">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
