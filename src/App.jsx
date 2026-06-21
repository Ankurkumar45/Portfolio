import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About, { Skills } from "./components/Sections";
import Projects from "./components/Projects";
import ResumeSection from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useScrollProgress } from "./hooks/useReveal";

export default function App() {
  useScrollProgress();

  return (
    <div className="relative min-h-screen bg-[#07070d] text-white overflow-x-hidden">
      <div id="scroll-progress" className="scroll-progress" />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ResumeSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
