import { useEffect, useState } from "react";
import { addArtwork } from "../api";
import { useParams, useNavigate } from "react-router-dom";

const Editwork = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [art, setArt] = useState({});

  useEffect(() => {
    getArtwork(id).then(res => setArt(res.data));
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateArtwork(id, art);
    alert("Updated ✅");
    navigate("/view");
  };

  return (
    <div className="card p-4 shadow">
      <h3 className="text-center fw-bold mb-3">Edit Artwork</h3>

      <form onSubmit={handleUpdate}>
        <input className="form-control mb-2" value={art.title || ""} 
          onChange={e => setArt({...art, title:e.target.value})} />

        <input className="form-control mb-2" value={art.artist || ""} 
          onChange={e => setArt({...art, artist:e.target.value})} />

        <input className="form-control mb-2" value={art.image || ""} 
          onChange={e => setArt({...art, image:e.target.value})} />

        <textarea className="form-control mb-2" value={art.desc || ""} 
          onChange={e => setArt({...art, desc:e.target.value})}></textarea>

        <input className="form-control mb-2" value={art.price || ""} 
          onChange={e => setArt({...art, price:e.target.value})} />

        <button className="btn btn-dark w-100">Update</button>
      </form>
    </div>
  );
};

export default Editwork;
