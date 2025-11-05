import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getArtworkAPI, updateArtworkAPI } from "../../Service/allApi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Editwork() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [art, setArt] = useState({
    title: "",
    artist: "",
    image: "",
    description: "",
    price: "",
  });

  // Fetch existing artwork details
  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const response = await getArtworkAPI(id);
        setArt(response.data);
      } catch (error) {
        console.error("Error fetching artwork:", error);
        alert("Failed to load artwork details");
      }
    };
    fetchArtwork();
  }, [id]);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setArt({ ...art, [name]: value });
  };

  // Handle update
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateArtworkAPI(id, art);
      alert("✅ Artwork updated successfully!");
      navigate("/view");
    } catch (error) {
      console.error("Error updating artwork:", error);
      alert("Failed to update artwork");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="card p-5 shadow-lg rounded-5 mx-auto mt-5 mb-5"
        style={{
          maxWidth: "650px",
          background: "linear-gradient(145deg, #0e0e0e, #1b1b1b)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow:
            "0 0 25px rgba(255,255,255,0.06), inset 0 0 10px rgba(255,255,255,0.05)",
          color: "white",
        }}
      >
        {/* Inline style for white placeholders */}
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
          Edit Artwork
        </h3>

        <form onSubmit={handleSubmit} className="mt-4">
          <input
            name="title"
            value={art.title}
            onChange={handleChange}
            className="form-control mb-3 bg-transparent border-0 border-bottom border-secondary rounded-0 text-white"
            placeholder="Title"
            style={{ color: "#fff", caretColor: "white" }}
            onFocus={(e) => (e.target.style.borderBottomColor = "white")}
            onBlur={(e) => (e.target.style.borderBottomColor = "#555")}
          />

          <input
            name="artist"
            value={art.artist}
            onChange={handleChange}
            className="form-control mb-3 bg-transparent border-0 border-bottom border-secondary rounded-0 text-white"
            placeholder="Artist Name"
            style={{ color: "#fff", caretColor: "white" }}
            onFocus={(e) => (e.target.style.borderBottomColor = "white")}
            onBlur={(e) => (e.target.style.borderBottomColor = "#555")}
          />

          <input
            name="image"
            value={art.image}
            onChange={handleChange}
            className="form-control mb-3 bg-transparent border-0 border-bottom border-secondary rounded-0 text-white"
            placeholder="Image URL"
            style={{ color: "#fff", caretColor: "white" }}
            onFocus={(e) => (e.target.style.borderBottomColor = "white")}
            onBlur={(e) => (e.target.style.borderBottomColor = "#555")}
          />

          <textarea
            name="description"
            value={art.description}
            onChange={handleChange}
            className="form-control mb-3 bg-transparent border border-secondary rounded-3 text-white"
            placeholder="Description"
            rows="3"
            style={{ color: "#fff", caretColor: "white" }}
            onFocus={(e) => (e.target.style.borderColor = "white")}
            onBlur={(e) => (e.target.style.borderColor = "#555")}
          ></textarea>

          <input
            name="price"
            value={art.price}
            onChange={handleChange}
            className="form-control mb-3 bg-transparent border-0 border-bottom border-secondary rounded-0 text-white"
            placeholder="Price"
            style={{ color: "#fff", caretColor: "white" }}
            onFocus={(e) => (e.target.style.borderBottomColor = "white")}
            onBlur={(e) => (e.target.style.borderBottomColor = "#555")}
          />

          <button
            type="submit"
            className="btn w-100 fw-bold rounded-4 py-2 mt-2"
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
            Update
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Editwork;
