import { NavLink } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";

export function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="nav" aria-label="Main">
      <NavLink to="/" className="nav__brand" end>
        JL
      </NavLink>
      <div className="nav__right">
        <ul className="nav__links">
          <li>
            <NavLink to="/resume" className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}>
              Resume
            </NavLink>
          </li>
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
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          title={theme === "light" ? "Dark mode" : "Light mode"}
        >
          {theme === "light" ? (
            <span className="theme-toggle__icon" aria-hidden>☀</span>
          ) : (
            <span className="theme-toggle__icon" aria-hidden>☽</span>
          )}
        </button>
      </div>
    </nav>
  );
}
