import { LayoutPage } from "@/components/LayoutPage";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <LayoutPage>
          <div></div>
        </LayoutPage>
      </div>

      <section id="hero" className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}