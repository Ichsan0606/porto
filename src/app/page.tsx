import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
// import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
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
      {/* <Team/> */}
      <Gallery/>
      <Services />
      <Projects />
      <Contact />
      <ScrollToTop />
      <Footer />
    </main>
  );
}
