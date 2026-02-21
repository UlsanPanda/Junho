import { about } from "../data/portfolio";

export function AboutPage() {
  return (
    <article className="page">
      <header className="page__header">
        <h1 className="page__title">{about.heading}</h1>
      </header>
      <div className="page__content">
        <p className="page__lead">{about.body}</p>
      </div>
    </article>
  );
}
