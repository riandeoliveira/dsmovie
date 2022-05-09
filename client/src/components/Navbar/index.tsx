import { github } from "../../assets";
import "./styles.css";

export const Navbar = () => {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/riandeoliveira">
            <div className="dsmovie-contact-container">
              <img alt="GitHub logo" src={github} />
              <p className="dsmovie-contact-link">/riandeoliveira</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};
