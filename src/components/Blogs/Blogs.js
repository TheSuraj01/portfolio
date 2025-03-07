import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogsCard";
import Particle from "../Particle";

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
              imgPath={"https://media.licdn.com/dms/image/v2/D5612AQGoH6Bsgq8QVA/article-cover_image-shrink_720_1280/B56ZVOfL1nGUAQ-/0/1740778556287?e=1746662400&v=beta&t=5VHbgSbI8W1HZYNTL40tdzPXlxXht3jBwaTw51R_I28"}
              title="Traveling: The Best Way to Learn About Life"
              description="It's a journey of self-discovery, resilience, and cultural immersion. From embracing diversity to learning life lessons through challenges, every trip transforms your perspective and enriches your soul."
              readLink="https://www.linkedin.com/pulse/traveling-best-way-learn-life-suraj-kumar-yadav-sy4hc/?trackingId=VqtmoI7BOrq1mjg5tiZ%2BPg%3D%3D"
            />
          </Col>
            
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={"https://media.licdn.com/dms/image/v2/D4D12AQHwYOOXnsiTsA/article-cover_image-shrink_423_752/article-cover_image-shrink_423_752/0/1692903284003?e=1746662400&v=beta&t=mHYN54uxCGfAyiLjgLl3SPcnCYhPwxXjwxMpR6eknBc"}
              title="Chandrayaan-3: Unveiling the Triumph, Truth, and Our Cosmic Love"
              description="India’s Chandrayaan-3 mission, led by ISRO, has achieved significant success in lunar exploration. Utilizing advanced technology, it captured detailed images and videos of the moon, revealing its geological features and history. The mission also analyzed lunar minerals and rocks, hinting at potential water resources."
              readLink="https://www.linkedin.com/pulse/chandrayaan-3-unveiling-triumph-truth-our-cosmic-love-yadav/?trackingId=yo4lpjOJQ7ilveNr8SA1cQ%3D%3D"
            />
          </Col>

          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={"https://media.licdn.com/dms/image/v2/D4D12AQFAUtVaSfkmOQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1688414371808?e=1746662400&v=beta&t=NuQHOqtHwOMAwy3_e21fkzTLzDjU3fbzK2vPUb5jMbI"}
              title="Vleazaar Products"
              description="VleBazaar, founded in 2015, is an Indian online marketplace offering a wide range of products, including electronics, fashion, home & living, groceries, and local items, at affordable prices. The platform features free shipping on orders over ₹500, a 100% satisfaction guarantee, and 24/7 customer support."
              readLink="https://www.linkedin.com/pulse/vleazaar-products-suraj-kumar-yadav/?trackingId=yo4lpjOJQ7ilveNr8SA1cQ%3D%3D"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={"https://media.licdn.com/dms/image/v2/D5612AQGNYBmsfS93Ow/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1730827229883?e=1746662400&v=beta&t=FSUWW0u284MUo7YuIP_diHZ_1yj1fnSNzwUGBQmJOt4"}
              title="The Digital Facade: How Wealthy Individuals Manipulate Public Relations in the Age of the Internet"
              description="How wealthy and influential individuals use digital public relations to reshape public perception during scandals, often obscuring the truth with curated online narratives. It examines the implications of this manipulation on young aspirants, emphasizing the importance of critical engagement and the pursuit of authenticity in a landscape where image frequently overshadows reality."
              readLink="https://www.linkedin.com/pulse/digital-facade-how-wealthy-individuals-manipulate-public-yadav-uetqc/?trackingId=asjTmL7SSEu7WfRBb3kv9Q%3D%3D"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Articles;
