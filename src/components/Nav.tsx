export function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <a href="#home" className="nav__brand">
        JL
      </a>
      <ul className="nav__links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Get in touch</a></li>
      </ul>
    </nav>
  );
}
