import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <header id="home">
        <Nav />
      </header>
      <main className="container mx-auto">
        <Hero id="hero" />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
      <Footer />
    </>
  );
}
