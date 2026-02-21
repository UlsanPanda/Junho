import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Junho Lee. Built with React + Vite.</p>
      </footer>
    </>
  );
}

export default App;
