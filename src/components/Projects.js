import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/amazon_app.png";
import projImg2 from "../assets/img/todo_app.png";
import projImg3 from "../assets/img/weather_app.jpg";
import projImg4 from "../assets/img/restaurant_app.png";
import projImg5 from "../assets/img/ecoomerce_app.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const Frontend = [
    {
      title: "Amazon Clone",
      description: "",
      imgUrl: projImg1,
      projectUrl : "https://github.com/PurnitaSharma/Amazon_clone" ,
    },
    {
      title: "To Do List",
      description: "",
      imgUrl: projImg2,
      projectUrl : "https://github.com/PurnitaSharma/OIBSIP/tree/master/todo" ,
    },
    
  ];
  const React = [
    {
      title: "Restaurant Menu App ",
      description: "",
      imgUrl: projImg4,
      projectUrl : "https://github.com/PurnitaSharma/Restaurant_app" ,
    },
   
    
    
  ];
  const Backend = [
    {
      title: "Weather App ",
      description: "",
      imgUrl: projImg3,
      projectUrl : "https://github.com/PurnitaSharma/ExpressJS_WeatherApp" ,
    },
    {
      title: "Ecommerce App",
      description: "",
      imgUrl: projImg5,
      projectUrl : "https://github.com/PurnitaSharma/Ecommerce-Website" ,

    },
    
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Join me on a journey through my web development ventures, where each project showcases a unique blend of creativity, technical expertise, and user-focused design.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Frontend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">React</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Backened</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Frontend.map((project, index) => {
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
                          React.map((project, index) => {
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
                          Backend.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}