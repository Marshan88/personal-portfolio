import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import zelda from "../assets/img/Zelda-MissingLinks.PNG";
import Starling from "../assets/img/CSS.PNG";
import Csharp from "../assets/img/CsharpGames.PNG";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useState, useEffect } from "react";

export const Projects = () => {
  const projects = [
    {
      title: "Starling",
      description: "An app measuring teams with Tuckmans theory with the help of surveys",
      imgUrl: Starling,
      link: "https://marshan88.github.io/Starling",
    },
    {
      title: "Zelda - Missing links",
      description: "Work in progress..",
      imgUrl: zelda,
      link: "https://marshan88.github.io/Zelda/",
    },
    {
      title: "Business Startup",
      description: "C# projects - this takes you to github",
      imgUrl: Csharp,
      link: "https://github.com/Marshan88/CSharpProjects",
    },
  ];

  const [isVisibles, setIsVisible] = useState(true);
  const [height, setHeight] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () =>
      window.removeEventListener("scroll", listenToScroll);
  }, [])

  const listenToScroll = () => {
    let heightToHideFrom = 1080;
    const winScroll = document.body.scrollTop ||
      document.documentElement.scrollTop;
    setHeight(winScroll);
    if (window.innerWidth > 1024) {
      if (winScroll > heightToHideFrom) {
        isVisibles && setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } else {
      setIsVisible(true);
    }
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            {isVisibles &&
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeInUp" : ""
                    }
                  >
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item className="hoverEffect">
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="hoverEffect">
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="hoverEffect">
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible ? "animate__animated animate__zoomIn" : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard key={index} {...project} />;
                            })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque quam, quod neque provident velit, rem
                            explicabo excepturi id illo molestiae blanditiis,
                            eligendi dicta officiis asperiores delectus quasi
                            inventore debitis quo.
                          </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque quam, quod neque provident velit, rem
                            explicabo excepturi id illo molestiae blanditiis,
                            eligendi dicta officiis asperiores delectus quasi
                            inventore debitis quo.
                          </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                )}
              </TrackVisibility>
            }
          </Col>
        </Row>
      </Container>
    </section>
  );
};
