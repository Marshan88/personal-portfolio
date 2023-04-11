import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Typed from 'typed.js';
/*
  TODO
  - Find new background image.
  - Make logo and also make it clickable.
  - Make scrolling go to next section.
*/
export const Banner = () => {
  const [text] = useState('');
  const el = React.useRef(null);

  //https://github.com/mattboldt/typed.js/
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Front</i>-end.', '<i>Back</i>-end.', '<i>Full</i>-stack.'],
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 1700,
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
            <h1>{`Marius Henriksen`}</h1>
            <br></br>
            <h2>
              <span ref={el} />
              <span className="wrap">{text}
              </span>
            </h2>
            <br></br>
            <p>
              Hello, world!<br></br>
              I'm currently a Student at <a href="https://www.getacademy.no/">GET-Academy</a>,
              looking for an internship.<br></br>
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
