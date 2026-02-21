import { site } from "../data/portfolio";

export function Hero() {
  return (
    <section className="hero" id="home">
      <h1 className="hero__name">{site.name}</h1>
      <p className="hero__tagline">{site.tagline}</p>
      <a href="#contact" className="hero__cta">
        Get in touch
      </a>
    </section>
  );
}
