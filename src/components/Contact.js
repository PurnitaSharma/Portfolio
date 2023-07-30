import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
 

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch with me at</h2>
                <br></br>
                <h3 style={{fontWeight: 520}}>Mail : <a href="mailto: purnita08@example.com" target="_blank"  style={{color :"white"}}>purnita08@gmail.com</a></h3>
                <h3 style={{fontWeight: 520}}>LinkedIn : <a href="https://www.linkedin.com/in/purnita-sharma-361845206/" target="_blank"  style={{color :"white"}}>purnita-sharma</a></h3>  
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}