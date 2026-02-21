import { NavLink } from "react-router-dom";

export function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <NavLink to="/" className="nav__brand" end>
        JL
      </NavLink>
      <ul className="nav__links">
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/campus" className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}>
            Campus
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
