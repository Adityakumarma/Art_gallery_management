import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addArtworkAPI } from "../../Service/allApi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Addwork() {
  const navigate = useNavigate();

  const [artworkData, setArtworkData] = useState({
    title: "",
    artist: "",
    image: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtworkData({ ...artworkData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { title, artist, image, price } = artworkData;

    if (!title || !artist || !image || !price) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const result = await addArtworkAPI(artworkData);
      if (result) {
        alert("✅ Artwork added successfully!");
        navigate("/view");
      }
    } catch (error) {
      console.error("❌ Error adding artwork:", error);
      alert("Failed to add artwork. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="card p-5 shadow-lg rounded-5 mx-auto mt-5 mb-5"
        style={{
          maxWidth: "600px",
          background: "linear-gradient(145deg, #0e0e0e, #1b1b1b)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "0 0 25px rgba(255,255,255,0.06), inset 0 0 10px rgba(255,255,255,0.05)",
          color: "white",
        }}
      >
        <style>
          {`
            ::placeholder {
              color: white !important;
              opacity: 0.8;
            }
          `}
        </style>

        <h3
          className="text-center fw-bold mb-4"
          style={{
            letterSpacing: "2px",
            textTransform: "uppercase",
            borderBottom: "2px solid #fff",
            display: "inline-block",
            margin: "0 auto",
            paddingBottom: "5px",
          }}
        >
          Add Artwork
        </h3>

        <form onSubmit={handleSubmit} className="mt-4">
          <input
            name="title"
            value={artworkData.title}
            onChange={handleChange}
            className="form-control mb-3 bg-transparent border-0 border-bottom border-secondary rounded-0 text-white"
            placeholder="Title"
            style={{ color: "#fff", caretColor: "white" }}
            onFocus={(e) => (e.target.style.borderBottomColor = "white")}
            onBlur={(e) => (e.target.style.borderBottomColor = "#555")}
          />

          <input
            name="artist"
            value={artworkData.artist}
            onChange={handleChange}
            className="form-control mb-3 bg-transparent border-0 border-bottom border-secondary rounded-0 text-white"
            placeholder="Artist Name"
            style={{ color: "#fff", caretColor: "white" }}
            onFocus={(e) => (e.target.style.borderBottomColor = "white")}
            onBlur={(e) => (e.target.style.borderBottomColor = "#555")}
          />

          <input
            name="image"
            value={artworkData.image}
            onChange={handleChange}
            className="form-control mb-3 bg-transparent border-0 border-bottom border-secondary rounded-0 text-white"
            placeholder="Image URL"
            style={{ color: "#fff", caretColor: "white" }}
            onFocus={(e) => (e.target.style.borderBottomColor = "white")}
            onBlur={(e) => (e.target.style.borderBottomColor = "#555")}
          />

          <input
            name="price"
            value={artworkData.price}
            onChange={handleChange}
            className="form-control mb-3 bg-transparent border-0 border-bottom border-secondary rounded-0 text-white"
            placeholder="Price"
            style={{ color: "#fff", caretColor: "white" }}
            onFocus={(e) => (e.target.style.borderBottomColor = "white")}
            onBlur={(e) => (e.target.style.borderBottomColor = "#555")}
          />

          <button
            type="submit"
            className="btn w-100 fw-bold rounded-4 py-2 mt-3"
            style={{
              background: "white",
              color: "black",
              letterSpacing: "1px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => {
              e.target.style.background = "black";
              e.target.style.color = "white";
              e.target.style.border = "1px solid white";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "white";
              e.target.style.color = "black";
              e.target.style.border = "none";
            }}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Addwork;
