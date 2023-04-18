import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Typed from 'typed.js';
import logo from "../assets/img/Favicon.png";

/*
  TODO
  - New color scheme. darkblue, lightblue, white, grey?
    - on-hover: lightblue, darkblue, white, grey?

  - Make scrolling go next section (?)
  - new location for logo/autograph
  - footer content?f
*/

export const Banner = () => {
  const [text] = useState('');
  const el = React.useRef(null);

  //https://github.com/mattboldt/typed.js/
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Front</i>-end.', '<i>Back</i>-end.', '<i>Full</i>-stack.'],
      typeSpeed: 60,
      backSpeed: 35,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);



  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h2>{`Designing websites / apps for companies`}</h2>
            <h2>
              <span ref={el} />
              <span className="wrap">{text}
              </span>
            </h2>
            <br></br>
            <p>
              I'm currently a Student at <a href="https://www.getacademy.no/">GET-Academy</a>,
              looking for an internship.<br></br><br></br>
              Skills:
              <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>ReactJS</li>
                <li>GitHub</li>
                <li>.NET framework</li>
                <li>SQL</li>
              </ul>
            </p>
          </Col>
        </Row>
        <Col>
          <img src={logo} className="logo" alt="Logo" />
        </Col>
      </Container>
    </section>
  )
}