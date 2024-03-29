import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import placeholder from "../assets/img/FrontEnd.jpg";
import starling from "../assets/img/starling.jpg";
import csharp from "../assets/img/csharp.PNG";
import summit from "../assets/img/reachingTheSummit.png";
import tetris from "../assets/img/tetris.png";
import reactportfolio from "../assets/img/reactportfolio.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
  const firstTabProjects = [
    {
      title: "Starling",
      description: "Measure teams w/ Tuckmans theory surveys",
      imgUrl: starling,
      url: "https://marshan88.github.io/Starling",
    },
    {
      title: "Old portfolio",
      description: "My old portfolio, made with HTML, CSS and JS",
      imgUrl: placeholder,
      url: "https://marshan88.github.io/MyPortfolio/",
    },
    {
      title: "Portfolio v2 (this one)",
      description: "I made this portfolio with ReactJS",
      imgUrl: reactportfolio,
      url: "https://github.com/Marshan88/personal-portfolio",
    },
  ];
  const secondTabProjects = [
    {
      title: "C# lessons",
      description: "instead of having multiple repos, I put them all in one",
      imgUrl: csharp,
      url: "https://github.com/Marshan88/CSharpProjects",
    },
    {
      title: "Reaching the summit",
      description: "Text-based adventure game, League of legends themed",
      imgUrl: summit,
      url: "https://github.com/Marshan88/AdventureGame",
    },
    {
      title: "Tetris",
      description: "A classic game, made with C# and Windows Forms",
      imgUrl: tetris,
      url: "https://github.com/Marshan88/TetrisGame",
    },
  ];
  const thirdTabProjects = [
    {
      title: "Coming soon!",
      description: "Nextjs, Tailwindcss, and more!",
      imgUrl: placeholder,
      link: "https://marshan.me/#projects",
    },
    {
      title: "...",
      description: "Nothing here yet",
      imgUrl: placeholder,
      link: "https://marshan.me/#projects",
    },
    {
      title: "...",
      description: "Nothing here yet",
      imgUrl: placeholder,
      link: "https://marshan.me/#projects",
    },
  ];
  // //swipe animation
  // const [touchStart, setTouchStart] = useState(null)
  // const [touchEnd, setTouchEnd] = useState(null)

  // // the required distance between touchStart and touchEnd to be detected as a swipe
  // const minSwipeDistance = 50

  // const onTouchStart = (e) => {
  //   setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
  //   setTouchStart(e.targetTouches[0].clientX)
  // }

  // const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  // const onTouchEnd = () => {
  //   if (!touchStart || !touchEnd) return
  //   const distance = touchStart - touchEnd
  //   const isLeftSwipe = distance > minSwipeDistance
  //   const isRightSwipe = distance < -minSwipeDistance
  //   if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
  //   // add your conditional logic here
  // }


  // <div>onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}</div>

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col style={{ userSelect: "none" }} className="project-col" size={12}>
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
                <Nav.Item className="hoverEffect">
                  <Nav.Link eventKey="first">Front-end</Nav.Link>
                </Nav.Item >
                <Nav.Item className="hoverEffect">
                  <Nav.Link eventKey="second">Back-end</Nav.Link>
                </Nav.Item>
                <Nav.Item className="hoverEffect">
                  <Nav.Link eventKey="third">Full-stack</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
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