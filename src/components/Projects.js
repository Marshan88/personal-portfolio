import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import zelda from "../assets/img/Zelda-MissingLinks.PNG";
import Starling from "../assets/img/Starling.png";
import Csharp from "../assets/img/CsharpGames.PNG";
import TrackVisibility from "react-on-screen";
import "animate.css";

/* 
  TODO 
  - Add/finish more projects. (link a project card to portfolio('s?))
  - Make project cards clickable. (middle mouse button)
  - Make project background react to scroll event.
  - Better project img.
*/

export const Projects = () => {
  const projects = [
    {
      title: "Starling",
      description: "Measure teams w/ Tuckmans theory surveys",
      imgUrl: Starling,
      link: "https://marshan88.github.io/Starling",
    },
    {
      title: "Backend projects",
      description: "Link takes you to github.com",
      imgUrl: Csharp,
      link: "https://github.com/Marshan88/CSharpProjects",
    },
    {
      title: "Zelda - Missing links",
      description: "Work in progress..",
      imgUrl: zelda,
      link: "https://marshan88.github.io/Zelda/",
    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <h2>Projects</h2>
                    <br></br><br></br>
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
                          Work in progress..
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Nothing here at the moment..
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
