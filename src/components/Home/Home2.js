import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Photo.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm Suraj, a curious and enthusiastic coder.
              <br />
              <br />
              My journey into programming started quite unexpectedly, but I've grown to love the fascinating world of code. From my first "Hello, World!" program to tackling more complex problems, it's been a journey of constant learning and discovery.
              <br />
              <br />
              I've picked up a few languages along the way, including <p className="purple"> C, C++, Java, Python, and JavaScript</p>
              These tools help me bring ideas to life and solve interesting problems.
              <br />
              <br />
              I'm particularly interested in <span className="purple">Web Technologies</span> and <span className="purple">Machine Learning</span>. Exploring the possibilities in these fields is truly exciting, and I enjoy creating web applications and experimenting with AI.
              <br />
              <br />
              I'm always eager to learn more and collaborate with others. If you're as passionate about technology as I am, let's connect and see what we can create together!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid img-size" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              I'd love to hear from fellow tech enthusiasts! You can find me on these platforms:
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TheSuraj01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/SURAJRAIZADA6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/surajyadav01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/surajkumaryadav.in"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}



export default Home2;
