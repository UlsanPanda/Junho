import { Outlet } from "react-router-dom";
import { site } from "../data/portfolio";
import { Nav } from "./Nav";

export function Layout() {
  return (
    <>
      <Nav />
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer__contact">
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {site.links.length > 0 && (
            <>
              <span className="footer__separator">·</span>
              <a href={site.links[0].href} target="_blank" rel="noopener noreferrer">
                {site.links[0].label}
              </a>
            </>
          )}
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} {site.name}</p>
      </footer>
    </>
  );
}
