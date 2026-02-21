import { site } from "../data/portfolio";

export function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <p className="contact__intro">
        I’d love to hear from you—whether it’s a project idea, a question, or just a hello.
      </p>
      <a href={`mailto:${site.email}`} className="contact__email">
        {site.email}
      </a>
      <ul className="contact__links">
        {site.links.map(({ label, href }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="contact__link">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
