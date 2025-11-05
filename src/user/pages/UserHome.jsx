import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ Added for internal navigation
import "bootstrap/dist/css/bootstrap.min.css";
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";

function UserHome() {
  const artworks = [
    {
      title: "The Starry Night",
      artist: "Vincent van Gogh (1889)",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      link: "https://en.wikipedia.org/wiki/The_Starry_Night",
      price: "$120 Million",
    },
    {
      title: "Water Lilies",
      artist: "Claude Monet (1916–1919)",
      img: "https://www.artic.edu/iiif/2/3c27b499-af56-f0d5-93b5-a7f2f1ad5813/full/1686,/0/default.jpg",
      link: "https://en.wikipedia.org/wiki/Water_Lilies_(Monet_series)",
      price: "$80 Million",
    },
    {
      title: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer (1665)",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg",
      link: "https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring",
      price: "$90 Million",
    },
    {
      title: "The Persistence of Memory",
      artist: "Salvador Dalí (1931)",
      img: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
      link: "https://en.wikipedia.org/wiki/The_Persistence_of_Memory",
      price: "$70 Million",
    },
  ];

  return (
    <>
    <UserHeader/>
      

      {/* 🌌 Hero Section */}
      <div
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1600&q=80') center/cover",
          height: "70vh",
        }}
      >
        <div>
          <h1 className="fw-bold display-5 mb-3">ICONIC MASTERPIECES</h1>
          <p className="fs-5 mx-auto" style={{ maxWidth: "700px" }}>
            Step into the world of timeless <strong>artistry and imagination</strong>. 
            Explore creations that have defined generations and continue to 
            captivate the soul with their brilliance and emotion.
          </p>

          {/* ✅ Use Link instead of href for internal navigation */}
          <Link to="/collection">
            <Button variant="outline-light" className="mt-3 px-4 py-2 rounded-pill">
              Explore Collections
            </Button>
          </Link>
        </div>
      </div>

      {/* 🖼️ Featured Artworks Section */}
      <Container id="collection" className="py-5">
        <h2 className="text-center mb-4 fw-bold mt-4">Featured Artworks</h2>
        <p className="text-center mb-5 text-muted fs-5">
          Each of these masterpieces represents a <em>journey of creativity</em>, 
          painted with passion and inspired by stories that shaped human history.
        </p>

        <Row className="g-4">
          {artworks.map((art, index) => (
            <Col key={index} xs={12} sm={6} md={3}>
              <Card
                className="border-0 shadow-sm h-100 text-center bg-light"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  borderRadius: "12px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <a href={art.link} target="_blank" rel="noopener noreferrer">
                  <Card.Img
                    variant="top"
                    src={art.img}
                    alt={art.title}
                    style={{
                      height: "320px",
                      objectFit: "cover",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                    }}
                  />
                </a>
                <Card.Body>
                  <Card.Title className="fw-bold text-uppercase fs-6">
                    {art.title}
                  </Card.Title>
                  <Card.Text className="text-muted mb-2">{art.artist}</Card.Text>
                  <p className="fw-semibold text-secondary mb-0">{art.price}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 🎨 Call to Action */}
      <div
        className="text-center py-5 text-white mb-5"
        style={{
          background: "linear-gradient(135deg, #000000 0%, #434343 100%)",
        }}
      >
        <h3 className="fw-bold mb-3">Want to Explore More?</h3>
        <p className="fs-5 mb-4">
          Dive deeper into the history and techniques of world-renowned artists.  
          Every brushstroke tells a story waiting to be discovered.
        </p>
        <Link to="/collection">
          <Button variant="outline-light" className="rounded-pill px-4 py-2">
            Visit Full Collection
          </Button>
        </Link>
      </div>

      <UserFooter/>
    </>
  );
}

export default UserHome;

