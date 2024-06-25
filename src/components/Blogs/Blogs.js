import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogsCard";
import Particle from "../Particle";
// import article1Image from "../../Assets/Articles/article1.png";
// import article2Image from "../../Assets/Articles/article2.png";
// import article3Image from "../../Assets/Articles/article3.png";

function Articles() {
  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="blog-heading">
          My Recent <strong className="purple">Articles</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few articles I've written recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={"https://media.licdn.com/dms/image/D4D12AQHwYOOXnsiTsA/article-cover_image-shrink_423_752/0/1692903284003?e=1724284800&v=beta&t=Jy1ChVJ0gyV8mjx7grDRKNO0AEKytxCZm8J-VqVMMTY"}
              title="Chandrayaan-3: Unveiling the Triumph, Truth, and Our Cosmic Love"
              description="India’s Chandrayaan-3 mission, led by ISRO, has achieved significant success in lunar exploration. Utilizing advanced technology, it captured detailed images and videos of the moon, revealing its geological features and history. The mission also analyzed lunar minerals and rocks, hinting at potential water resources."
              readLink="https://www.linkedin.com/pulse/chandrayaan-3-unveiling-triumph-truth-our-cosmic-love-yadav/?trackingId=yo4lpjOJQ7ilveNr8SA1cQ%3D%3D"
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={"https://media.licdn.com/dms/image/D4D12AQFAUtVaSfkmOQ/article-cover_image-shrink_720_1280/0/1688414371808?e=1724284800&v=beta&t=Ray50eN3o5D3YB9E8YKs-Shk4MmeMgSDENa8CIIbNkI"}
              title="Vleazaar Products"
              description="VleBazaar, founded in 2015, is an Indian online marketplace offering a wide range of products, including electronics, fashion, home & living, groceries, and local items, at affordable prices. The platform features free shipping on orders over ₹500, a 100% satisfaction guarantee, and 24/7 customer support.

"
              readLink="https://www.linkedin.com/pulse/vleazaar-products-suraj-kumar-yadav/?trackingId=yo4lpjOJQ7ilveNr8SA1cQ%3D%3D"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Articles;
