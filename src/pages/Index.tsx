import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import AboutSection from "@/components/AboutSection";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <AboutSection />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
