import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import githubIcon from "../assets/img/githubIcon.svg";
import coffee from "../assets/img/coffee.svg";
import email2 from "../assets/img/email2.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* <img src={logo} className="Logo" alt="Logo" /> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#projects"
              className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <div className="centerLogo">
            {/* <img src={logo} className="logo" alt="Logo" /> */}
          </div>
          <span className="navBar-text">
            <div className="social-icon">
              <a href="mailto:mariusshenriksen@gmail.com">
                <img src={email2} className="revert-img-color" alt="email" />
              </a>
              <a href="https://github.com/Marshan88">
                <img src={githubIcon} className="revert-img-color" alt="github" />
              </a>
              <a href="https://www.buymeacoffee.com/mariushenrix">
                <img src={coffee} className="revert-img-color" alt="buymeacoffe" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
};
