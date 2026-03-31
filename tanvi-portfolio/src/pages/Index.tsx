import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CertificatesSection from '@/components/CertificatesSection';
import ContactSection from '@/components/ContactSection';
import Achievements from '@/components/Achievements'
import FooterSection from '@/components/FooterSection';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import Bubble from "@/components/Bubble";

const Index = () => {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="animated-background" aria-hidden="true" />
      <Bubble/>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <Achievements />
      <CertificatesSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
