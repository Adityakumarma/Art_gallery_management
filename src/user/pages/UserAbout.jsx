import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";

function UserAbout() {
  return (
   <>
   <UserHeader/>
      <Container className="py-5">
        {/* ===== Carousel Section ===== */}
        <div className="d-flex justify-content-center mb-5">
          <Carousel style={{ width: "80%" }} interval={3000} fade>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-4 shadow"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
                alt="The Starry Night"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h5 className="fw-bold">The Starry Night – Vincent van Gogh</h5>
                <p>Oil on canvas, 1889</p>
              </Carousel.Caption>
            </Carousel.Item>
  
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-4 shadow"
                src="https://www.artic.edu/iiif/2/3c27b499-af56-f0d5-93b5-a7f2f1ad5813/full/1686,/0/default.jpg"
                alt="Mona Lisa"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h5 className="fw-bold">Water Lilies – Claude Monet</h5>
                <p>Renaissance masterpiece, 1503</p>
              </Carousel.Caption>
            </Carousel.Item>
  
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-4 shadow"
                src="https://iiif.micr.io/TZCqF/full/800,/0/default.webp"
                alt="Girl with a Pearl Earring"
                style={{ height: "400px", objectFit: "cover" }}
              />
              <Carousel.Caption>
                <h5 className="fw-bold">Girl with a Pearl Earring – Johannes Vermeer</h5>
                <p>Oil on canvas, 1665</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
  
        {/* ===== Heading ===== */}
        <h1 className="text-center mb-4 fw-bold">
          ABOUT <span className="text-warning">GALLERIA</span>
        </h1>
  
        {/* ===== Content Section ===== */}
        <Row className="fs-5 text-secondary lh-lg">
          <Col md={6}>
            <p>
              <strong>Galleria</strong> is a digital space where art meets emotion.
              We bring together world-renowned masterpieces and emerging modern
              artists to offer art lovers a one-of-a-kind visual experience.
            </p>
            <p>
              Our platform showcases famous paintings such as{" "}
              <em>“The Starry Night”</em>, <em>“Mona Lisa”</em>, and{" "}
              <em>“Girl with a Pearl Earring”</em> — along with details about the
              artists, painting styles, estimated value, and historical
              significance.
            </p>
            <p>
              Whether you’re a collector, enthusiast, or casual admirer, Galleria
              allows you to explore the stories behind each creation and
              understand the journey of the artists who shaped the art world.
            </p>
          </Col>
  
          <Col md={6}>
            <p>
              Every piece in our digital gallery includes pricing insights and
              background information, making it easier for users to appreciate the
              artistic and financial value of each work.
            </p>
            <p>
              We aim to make art accessible to everyone — blending technology and
              creativity to give users a personalized art-viewing experience.
            </p>
            <p>
              Our collection is updated regularly with curated exhibitions,
              artist spotlights, and featured artworks from both global and local
              talents.
            </p>
          </Col>
        </Row>
  
        <p className="text-center mt-4 fs-6 text-muted">
          Discover. Learn. Appreciate. — With Galleria, you don’t just view art,
          you connect with it.
        </p>
      </Container>
      <UserFooter/>
   </>
  );
}

export default UserAbout;
