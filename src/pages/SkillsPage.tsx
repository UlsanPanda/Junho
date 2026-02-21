import { skills } from "../data/portfolio";

export function SkillsPage() {
  return (
    <article className="page">
      <header className="page__header">
        <h1 className="page__title">Skills & certifications</h1>
        <p className="page__subtitle">What I bring to the table</p>
      </header>
      <div className="page__content">
        {skills.certifications.length > 0 && (
          <section className="skills-section">
            <h2 className="skills-section__title">Certifications</h2>
            <ul className="cert-list">
              {skills.certifications.map((cert) => (
                <li key={cert.name} className="cert-card">
                  <span className="cert-card__name">{cert.name}</span>
                  <span className="cert-card__meta">{cert.issuer} · {cert.year}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
        <section className="skills-section">
          <h2 className="skills-section__title">Skills</h2>
          <div className="skill-groups">
            {skills.skillGroups.map((group) => (
              <div key={group.title} className="skill-group">
                <h3 className="skill-group__title">{group.title}</h3>
                <ul className="skill-tags">
                  {group.items.map((item) => (
                    <li key={item} className="skill-tag">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
