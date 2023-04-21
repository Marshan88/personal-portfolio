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
  TODO:
  - Make project cards clickable. (middle mouse button)

  Color theme:
  - #FF00A8 pink, #FFDD19 yellow, #00FFA3 green, #2D2D2D dark gray, #2F2F2F light gray
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
      link: "https://marshan.me/#projects",
    },
    {
      title: "Placeholder",
      description: "Nothing here yet",
      imgUrl: placeholder,
      link: "https://marshan.me/#projects",
    },
    {
      title: "Placeholder",
      description: "Nothing here yet",
      imgUrl: placeholder,
      link: "https://marshan.me/#projects",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col className="project-col" size={12}>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projects</h2>
                  <br></br><br></br>
                  <br></br><br></br>
                </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item className="hoverAndSwipeEffect">
                  <Nav.Link eventKey="first">Front-end</Nav.Link>
                </Nav.Item >
                <Nav.Item className="hoverAndSwipeEffect">
                  <Nav.Link eventKey="second">Back-end</Nav.Link>
                </Nav.Item>
                <Nav.Item className="hoverAndSwipeEffect">
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
                  <br></br><br></br>
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