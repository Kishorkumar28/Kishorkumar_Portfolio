
import HeroSection from '@/components/sections/hero-section';
import TechStackSection from '@/components/sections/tech-stack-section';
import AboutSection from '@/components/sections/about-section';
// import ProjectsPreviewSection from '@/components/sections/projects-preview-section'; // Optional
// import ContactSection from '@/components/sections/contact-section'; // Optional

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <AboutSection />
      {/* <ProjectsPreviewSection /> */}
      {/* <ContactSection /> */}
    </>
  );
}

