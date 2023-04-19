import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import placeholder from "../assets/img/FrontEnd.jpg";
import starling from "../assets/img/Starling.png";
import csharp from "../assets/img/csharp.PNG";
import summit from "../assets/img/reachingTheSummit.png";
import tetris from "../assets/img/tetris.png";
import reactportfolio from "../assets/img/reactportfolio.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

/* 
  TODO 
  - Add/finish more projects. (link a project card to portfolio('s?))
  - Make project cards clickable. (middle mouse button)
*/

export const Projects = () => {
  const firstTabProjects = [
    {
      title: "React portfolio",
      description: "Github link",
      imgUrl: reactportfolio,
      link: "https://github.com/Marshan88/personal-portfolio",
    },
    {
      title: "Old portfolio",
      description: "Github link",
      imgUrl: placeholder,
      link: "https://github.com/Marshan88/MyPortfolio",
    },
    {
      title: "Starling",
      description: "Measure teams w/ Tuckmans theory surveys",
      imgUrl: starling,
      link: "https://marshan88.github.io/Starling",
    },
  ];
  const secondTabProjects = [
    {
      title: "C# lessons in one repo",
      description: "Github Link",
      imgUrl: csharp,
      link: "https://github.com/Marshan88/CSharpProjects",
    },
    {
      title: "Reaching the summit",
      description: "Text-based adventure game, League of legends theme",
      imgUrl: summit,
      link: "https://github.com/Marshan88/AdventureGame",
    },
    {
      title: "Tetris",
      description: "Youtube guide i followed, have not added any features myself, yet..",
      imgUrl: tetris,
      link: "https://github.com/Marshan88/TetrisGame",
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
                  <h2>Projects</h2>
                  <br></br><br></br>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                  <p>Work in progress..</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}