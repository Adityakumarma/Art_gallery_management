import { useState } from "react";
import { addArtwork } from "../api";
import { useNavigate } from "react-router-dom";

const Addwork = () => {
  const navigate = useNavigate();
  const [art, setArt] = useState({ title: "", artist: "", image: "", desc: "", price: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addArtwork(art);
    alert("Artwork Added ✅");
    navigate("/view");
  };

  return (
    <div className="card p-4 shadow">
      <h3 className="text-center fw-bold mb-3">Add Artwork</h3>
      <form onSubmit={handleSubmit}>
        
        <input className="form-control mb-2" placeholder="Title"
          onChange={e => setArt({...art, title:e.target.value})} />

        <input className="form-control mb-2" placeholder="Artist Name"
          onChange={e => setArt({...art, artist:e.target.value})} />

        <input className="form-control mb-2" placeholder="Image URL"
          onChange={e => setArt({...art, image:e.target.value})} />

        <textarea className="form-control mb-2" placeholder="Description"
          onChange={e => setArt({...art, desc:e.target.value})}></textarea>

        <input className="form-control mb-2" placeholder="Price"
          onChange={e => setArt({...art, price:e.target.value})} />

        <button className="btn btn-dark w-100">Submit</button>
      </form>
    </div>
  );
};

export default Addwork;
