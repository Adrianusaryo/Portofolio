import Footer from "../components/Footer.component";
import Navbar from "../components/Navbar.components";
import AboutSection from "../sections/About.section";
import ContactSection from "../sections/Contact.section";
import HeroSection from "../sections/Hero.section";
import ProjectSection from "../sections/Project.section";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  );
};
