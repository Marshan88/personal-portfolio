import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import placeholder from "../assets/img/FrontEnd.jpg";
import TrackVisibility from "react-on-screen";
import "animate.css";

/* 
  TODO 
  - Add/finish more projects. (link a project card to portfolio('s?))
  - Make project cards clickable. (middle mouse button)
  - Make project background react to scroll event (?)
  - Better project img.
*/

export const Projects = () => {
  const firstTabProjects = [
    {
      title: "Placeholder", //This portfolio
      description: "Github link",
      imgUrl: placeholder,
      link: "",
    },
    {
      title: "Placeholder", //Old portfolio
      description: "Github link",
      imgUrl: placeholder,
      link: "",
    },
    {
      title: "Starling",
      description: "Measure teams w/ Tuckmans theory surveys",
      imgUrl: placeholder,
      link: "https://marshan88.github.io/Starling",
    },
  ];
  const secondTabProjects = [
    {
      title: "Backend projects",
      description: "Link takes you to my github",
      imgUrl: placeholder,
      link: "https://github.com/Marshan88/CSharpProjects",
    },
    {
      title: "Placeholder", // Adventure game
      description: "Placeholder",
      imgUrl: placeholder,
      link: "",
    },
    {
      title: "Placeholder",
      description: "Nothing here yet",
      imgUrl: placeholder,
      link: "",
    },
  ];
  const thirdTabProjects = [
    {
      title: "Placeholder",
      description: "Nothing here yet",
      imgUrl: placeholder,
      link: "",
    },
    {
      title: "Placeholder",
      description: "Nothing here yet",
      imgUrl: placeholder,
      link: "",
    },
    {
      title: "Placeholder",
      description: "Nothing here yet",
      imgUrl: placeholder,
      link: "",
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
                        <Nav.Link eventKey="first">Front-end</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="hoverEffect">
                        <Nav.Link eventKey="second">Back-end</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="hoverEffect">
                        <Nav.Link eventKey="third">Full-stack</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            firstTabProjects.map((project, index) => {
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
                        <Row>
                          {
                            secondTabProjects.map((project, index) => {
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
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            thirdTabProjects.map((project, index) => {
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