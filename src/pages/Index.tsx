import ParticleBackground from "@/components/portfolio/ParticleBackground";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import RecentUpdatesSection from "@/components/portfolio/RecentUpdatesSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ResearchSection from "@/components/portfolio/ResearchSection";
import SkillsConstellation from "@/components/portfolio/SkillsConstellation";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import CommandPalette from "@/components/portfolio/CommandPalette";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <RecentUpdatesSection />
        <ProjectsSection />
        <ResearchSection />
        <SkillsConstellation />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <CommandPalette />
    </div>
  );
};

export default Index;
