import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`My name is`} {<br></br>}{`Marius Henriksen`}
            </h1>
            <br></br>
            <h2>
              <span
                className="txt-rotate"
                // dataPeriod="1000"
                data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h2>
            <br></br>
            <p>
              Hello, world!<br></br>I'm currently a Student at GET-Academy,
              looking for an internship.<br></br> I've been through a 6 months
              course with HTML, CSS, Javascript and C#. I experienced what it's
              like to work alone, in pairs and in a team w/ "customer".<br></br>{" "}
              <br></br> GET-academy is a great way to start not only for
              programming, but also for the key competencies such as GRIT and
              growth mindset.<br></br> With Chorei (A Japanese Morning Business
              Routine) every morning, this quickly became something I grew allot
              from and helped me set up a better life-style, as well as getting
              a better insight about myself and team-dynamics.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
