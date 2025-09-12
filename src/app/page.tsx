import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
