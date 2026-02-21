import { about } from "../data/portfolio";

export function About() {
  return (
    <section className="about" id="about">
      <h2 className="section__title">{about.heading}</h2>
      <p className="about__body">{about.body}</p>
    </section>
  );
}
