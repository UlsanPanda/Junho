import { projects } from "../data/portfolio";

export function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section__title">Projects</h2>
      <ul className="projects__list">
        {projects.map((project) => (
          <li key={project.title} className="project-card">
            <a href={project.href} className="project-card__link" target="_blank" rel="noopener noreferrer">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__description">{project.description}</p>
              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag} className="project-card__tag">
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
