import { site } from "../data/portfolio";

export function ContactPage() {
  return (
    <article className="page">
      <header className="page__header">
        <h1 className="page__title">Get in touch</h1>
      </header>
      <div className="page__content">
        <p className="contact-page__intro">
          I’d love to hear from you—whether it’s a project idea, a question, or just a hello.
        </p>
        <a href={`mailto:${site.email}`} className="contact-page__email">
          {site.email}
        </a>
        <ul className="contact-page__links">
          {site.links.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" className="contact-page__link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
