import { Navbar , Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/GeeksforGeeks.png";
import navIcon4 from '../assets/img/leetcode.webp';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <Navbar.Brand href="/">
              <h2 style={{color: "white" , font:"icon"}}>Return to Home</h2>
            </Navbar.Brand>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <br />
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/purnita-sharma-361845206/" target="_blank"><img src={navIcon1} alt="LinkedIn" /></a>
            <a href="https://github.com/PurnitaSharma" target="_blank"><img src={navIcon2} alt="Github" /></a>
            <a href="https://auth.geeksforgeeks.org/user/purnita08/practice/" target="_blank"><img src={navIcon3} alt="GFG" /></a>
            <a href="https://leetcode.com/Purnita/" target="_blank"><img src={navIcon4} alt="leetcode" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}