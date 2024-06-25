import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import travel_together from "../../Assets/Projects/Travel Together.png";
import MeDiCT from "../../Assets/Projects/medict.png";
import ssv from "../../Assets/Projects/ssv.png";
import SmartFlow from "../../Assets/Projects/SmartFlow.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MeDiCT}
              isBlog={false}
              title="MeDiCT"
              description="
                Developed MeDiCT, a medical diagnosis app using computer vision for lung, kidney, and brain cancer detection. Created a user-friendly Streamlit interface for image upload and results display. Utilized VGG16 deep learning model for accurate predictions and applied image preprocessing to boost model performance and accuracy."
              ghLink="https://github.com/TheSuraj01/MeDict.git"
              demoLink="https://medict.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ssv}
              isBlog={false}
              title="SSV"
              description="Developed the 'Sorting and Searching Visualizer,' an interactive web app demonstrating algorithms and time complexity. Engineered using React for scalability and performance. Implemented core functionalities in JavaScript, providing real-time user interactions and enhancing the learning experience for algorithmic concepts."
              ghLink="https://github.com/TheSuraj01/Sorting-and-Searching-Visualizer.git"
              demoLink="https://sortingandsearching.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel_together}
              isBlog={false}
              title="Travel-Together"
              description="
              Created 'Travel Together', an AI-driven travel matching application for India. Features include popular destinations, login/register, user verification, month-based travel search, request sending, and in-app chat. Users can also create travel plans and book packages. Database integration and CSS will be added later for full deployment.
              "
              ghLink="#"
              demoLink="https://www.figma.com/proto/FnCvbnYjWDj7lcrBemihm6/Travel-Together?node-id=1-2&starting-point-node-id=1%3A2&t=u38TEcvtlsGdKSnp-1"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SmartFlow}
              isBlog={false}
              title="SmartFlow"
              description="
              SmartFlow uses IoT and machine learning to optimize traffic lights based on pedestrian counts at intersections. With Arduino microcontrollers and real-time camera footage, it adjusts signals for better traffic flow and safety. This system aims to reduce congestion, promote sustainable transportation, and is tested in collaboration with traffic authorities to enhance urban living.
              "
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
