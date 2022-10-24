import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import githubIcon from "../assets/img/githubIcon.svg";
import coffee from "../assets/img/coffee.svg";
import email2 from "../assets/img/email2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
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
            <p>Copyright 2022 © All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
