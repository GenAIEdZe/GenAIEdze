import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FrameworksSection from "@/components/FrameworksSection";
import ArchitecturesSection from "@/components/ArchitecturesSection";
import ResourcesSection from "@/components/ResourcesSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <FrameworksSection />
        <ArchitecturesSection />
        <ResourcesSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
