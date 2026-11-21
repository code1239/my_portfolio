import { About } from "@/components/About";
import { Certificates } from "@/components/Certificates";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ResearchEducation } from "@/components/ResearchEducation";
import { Skills } from "@/components/Skills";
import { FloatingWhatsApp } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certificates />
        <ResearchEducation />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
