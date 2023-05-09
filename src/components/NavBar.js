import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import githubIcon from "../assets/img/githubIcon.svg";
import coffee from "../assets/img/coffee.svg";
import email2 from "../assets/img/email2.svg";
import linkedin from "../assets/img/linkedin.svg";

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
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className="navBar-text">
            <div className="social-icon" style={{ userSelect: "none" }}>
              <a href="mailto:mariush@getacademy.no">
                <img src={email2} className="revert-img-color" alt="email" />
              </a>
              <a href="https://www.linkedin.com/in/marius-henriksen/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} className="revert-img-color" alt="linkedin" />
              </a>
              <a href="https://github.com/Marshan88" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} className="revert-img-color" alt="github" />
              </a>
              <a href="https://www.buymeacoffee.com/mariushenrix" target="_blank" rel="noopener noreferrer">
                <img src={coffee} className="revert-img-color" alt="buymeacoffe" />
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}
