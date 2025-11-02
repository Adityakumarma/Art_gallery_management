import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getArtworkAPI, updateArtworkAPI } from "../../Service/allApi";

function Editwork() {
  const { id } = useParams(); // get the artwork ID from URL
  const navigate = useNavigate();

  const [art, setArt] = useState({
    title: "",
    artist: "",
    image: "",
    description: "",
    price: "",
  });

  // Fetch existing artwork details when component loads
  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const response = await getArtworkAPI(id);
        setArt(response.data); // since axios returns { data: {...} }
      } catch (error) {
        console.error("Error fetching artwork:", error);
        alert("Failed to load artwork details");
      }
    };
    fetchArtwork();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setArt({ ...art, [name]: value });
  };

  // Handle form submit (update artwork)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateArtworkAPI(id, art);
      alert("✅ Artwork updated successfully!");
      navigate("/"); // redirect to gallery or homepage
    } catch (error) {
      console.error("Error updating artwork:", error);
      alert("Failed to update artwork");
    }
  };

  return (
    <div className="card p-4 shadow">
      <h3 className="text-center fw-bold mb-3">Edit Artwork</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="title"
          value={art.title || ""}
          onChange={handleChange}
          placeholder="Title"
        />

        <input
          className="form-control mb-2"
          name="artist"
          value={art.artist || ""}
          onChange={handleChange}
          placeholder="Artist Name"
        />

        <input
          className="form-control mb-2"
          name="image"
          value={art.image || ""}
          onChange={handleChange}
          placeholder="Image URL"
        />

        <textarea
          className="form-control mb-2"
          name="description"
          value={art.description || ""}
          onChange={handleChange}
          placeholder="Description"
        ></textarea>

        <input
          className="form-control mb-2"
          name="price"
          value={art.price || ""}
          onChange={handleChange}
          placeholder="Price"
        />

        <button type="submit" className="btn btn-dark w-100">
          Update
        </button>
      </form>
    </div>
  );
}

export default Editwork;
