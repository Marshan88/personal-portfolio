import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import zelda from "../assets/img/Zelda-MissingLinks.PNG";
import Starling from "../assets/img/CSS.PNG";
import Csharp from "../assets/img/CsharpGames.PNG";
import "animate.css";
import TrackVisibility from "react-on-screen";

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

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem illum dolore in officia qui quo molestiae ullam, temporibus, rerum ipsum alias et nulla. Sit beatae maiores harum optio, dolores repellat iusto error impedit adipisci provident quis quam quibusdam dolorum excepturi!</p>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                    <Tab.Content >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
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
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
