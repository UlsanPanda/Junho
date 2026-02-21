import { Link } from "react-router-dom";
import { site } from "../data/portfolio";

export function Hero() {
  return (
    <section className="hero" id="home">
      <h1 className="hero__name">{site.name}</h1>
      <p className="hero__tagline">{site.tagline}</p>
      <Link to="/contact" className="hero__cta">
        Get in touch
      </Link>
    </section>
  );
}
