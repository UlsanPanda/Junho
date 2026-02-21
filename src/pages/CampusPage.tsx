import { campusInvolvement } from "../data/portfolio";

export function CampusPage() {
  return (
    <article className="page">
      <header className="page__header">
        <h1 className="page__title">Campus involvement</h1>
        <p className="page__subtitle">Clubs and activities at the University of Michigan</p>
      </header>
      <div className="page__content">
        <ul className="campus-list">
          {campusInvolvement.map((item) => (
            <li key={item.name} className="campus-card">
              <div className="campus-card__header">
                <h2 className="campus-card__name">{item.name}</h2>
                {item.role && <span className="campus-card__role">{item.role}</span>}
              </div>
              {item.period && <p className="campus-card__period">{item.period}</p>}
              <p className="campus-card__description">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
