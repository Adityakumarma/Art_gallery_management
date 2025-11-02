import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-black text-white min-vh-100">

      {/* Hero Section */}
      <section
        className="position-relative text-center text-white"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1692816143033-b226fbe719fe?auto=format&fit=crop&q=80&w=1500')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        ></div>
        <div className="position-relative z-2 d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="display-3 fw-bold mb-3">Welcome to Galleria</h1>
          <p className="lead text-light w-75 mx-auto">
            Discover. Create. Inspire. A digital canvas for artists to share imagination
            and connect with a world that celebrates creativity.
          </p>
          <div className="mt-4">
            <Link
              to="/add"
              className="btn btn-light text-black fw-bold px-4 py-2 me-3 rounded-pill"
            >
              Add Artwork
            </Link>
            <Link
              to="/view"
              className="btn btn-outline-light px-4 py-2 rounded-pill"
            >
              View Works
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-secondary my-0" />

      {/* Featured Work Section */}
      <section className="container my-5">
        <h2 className="text-center fw-bold mb-4">Featured Works</h2>
        <div className="row text-center">

          {/* 1. The Starry Night */}
          <div className="col-md-4 mb-4">
            <div className="p-4 border border-secondary rounded-4 h-100">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/800px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
                alt="The Starry Night"
                className="img-fluid rounded mb-3"
                style={{ height: "250px", objectFit: "cover", width: "100%" }}
              />
              <h5 className="fw-bold">The Starry Night</h5>
              <p className="text-secondary mb-1">Vincent van Gogh (1889)</p>
              <a
                href="https://en.wikipedia.org/wiki/The_Starry_Night"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm mt-2"
              >
                View Details
              </a>
            </div>
          </div>

          {/* 2. Water Lilies */}
          <div className="col-md-4 mb-4">
            <div className="p-4 border border-secondary rounded-4 h-100">
              <img
                src="https://www.artic.edu/iiif/2/3c27b499-af56-f0d5-93b5-a7f2f1ad5813/full/1686,/0/default.jpg"
                alt="Water Lilies"
                className="img-fluid rounded mb-3"
                style={{ height: "250px", objectFit: "cover", width: "100%" }}
              />
              <h5 className="fw-bold">Water Lilies</h5>
              <p className="text-secondary mb-1">Claude Monet (1916–1919)</p>
              <a
                href="https://en.wikipedia.org/wiki/Water_Lilies_(Monet_series)"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm mt-2"
              >
                View Details
              </a>
            </div>
          </div>

          {/* 3. Mona Lisa */}
          <div className="col-md-4 mb-4">
            <div className="p-4 border border-secondary rounded-4 h-100">
              <img
                src="https://iiif.micr.io/TZCqF/full/800,/0/default.webp"
                alt="Sunflowers"
                className="img-fluid rounded mb-3"
                style={{ height: "250px", objectFit: "cover", width: "100%" }}
              />
              <h5 className="fw-bold">Sunflowers</h5>
              <p className="text-secondary mb-1">Vincent van Gogh (1888)</p>
              <a
                href="https://www.artst.org/wp-content/uploads/2025/03/Sunflowers-Medium.jpg.webp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-sm mt-2"
              >
                View Details
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      {/* <div className="text-center my-5">
        <hr className="border-light w-50 mx-auto opacity-25" />
      </div> */}

      {/* About Section */}
      <section id="about"
        className="py-5"
        style={{
          backgroundColor: "#111",
          borderTop: "1px solid #333",
          borderBottom: "1px solid #333",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 p-5">
              <img
                src="https://medias.artmajeur.com/standard/17836879_artbattleamsterdam.jpg?v=1738263267"
                alt="About Galleria"
                className="img-fluid rounded-4 shadow" 
              />
            </div>
            <div className="col-md-6 p-3">
              <h2 className="fw-bold mb-3">About Galleria</h2>
              <p className="text-secondary"  style={{ textAlign: "justify" }}>
                Galleria is more than just an online art space — it's a creative community that celebrates
                imagination in every form. From breathtaking landscapes to abstract masterpieces, we bring
                together artists and admirers from around the world to share inspiration, learn from one another,
                and discover the endless beauty of art. Whether you’re here to showcase your work or explore
                others’, Galleria is your digital home for creativity and connection.

              </p>
              {/* <Link
                to="/about"
                className="btn btn-outline-light rounded-pill mt-3 px-4"
              >
                Learn More
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-5 border-top border-secondary">
        <h2 className="fw-bold mb-3">Start Your Artistic Journey Today</h2>
        <p className="text-secondary mb-4">
          Join Galleria and become part of a global community of creators and visionaries.
        </p>
        <Link
          to="/add"
          className="btn btn-light text-black px-4 py-2 fw-bold rounded-pill"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
