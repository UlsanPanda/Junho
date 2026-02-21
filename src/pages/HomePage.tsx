import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

export function HomePage() {
  return (
    <>
      <Hero />
      <section className="home-links">
        <h2 className="section__title">Explore</h2>
        <ul className="home-links__list">
          <li>
            <Link to="/about" className="home-links__card">
              <span className="home-links__label">About</span>
              <span className="home-links__desc">Learn about me and my background</span>
            </Link>
          </li>
          <li>
            <Link to="/campus" className="home-links__card">
              <span className="home-links__label">Campus involvement</span>
              <span className="home-links__desc">Clubs and activities at Michigan</span>
            </Link>
          </li>
          <li>
            <Link to="/skills" className="home-links__card">
              <span className="home-links__label">Skills & certifications</span>
              <span className="home-links__desc">What I bring to the table</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="home-links__card">
              <span className="home-links__label">Get in touch</span>
              <span className="home-links__desc">Email and LinkedIn</span>
            </Link>
          </li>
        </ul>
      </section>
      <Projects />
    </>
  );
}
