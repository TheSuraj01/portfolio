import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Suraj Kumar Yadav</span> from 
            <span className="purple"> Saran, Bihar, India</span>.
            <br />
            I am currently pursuing my B-Tech from Kiit University, with a deep curiosity and passion for technology.
            <br />
            <br />
            Coding isn't just a skill for me—it's a journey of continuous learning and creativity. I'm always eager to explore new technologies and push the boundaries of what's possible. 💻
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do:
          </p>
          <ul className="purple">
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Stories
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            I've been learning languages like C, C++, Java, Python, and JavaScript. My true interest lies in Web Technologies and Machine Learning, where I love building web apps and experimenting with AI. 🚀
          </p>
          <p style={{ textAlign: "justify" }}>
            When I'm not coding, I enjoy working with modern JavaScript frameworks like Node.js, React.js, and Next.js to create high-performance products. Each project is an opportunity to improve and innovate. 🎨
          </p>
          <p style={{ textAlign: "justify" }}>
            I thrive on problem-solving, value teamwork, and am always looking to improve my communication skills. What sets me apart is my enthusiasm to stay ahead of the curve and learn new things. 🍭
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is not just code; it's a canvas for innovation and creativity."{" "}
          </p>
          <footer className="blockquote-footer">Suraj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
  }


export default AboutCard;
