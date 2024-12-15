import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Particle from "./components/Particle";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      {/* <div className="absolute top-0 z-[-1] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
      <Particle />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
