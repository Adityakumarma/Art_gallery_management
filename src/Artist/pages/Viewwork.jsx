import { useEffect, useState } from "react";
import { addArtwork } from "../api";
import { Link } from "react-router-dom";

const Viewwork = () => {
  const [works, setWorks] = useState([]);

  const loadData = async () => {
    const res = await getArtworks();
    setWorks(res.data);
  };

  useEffect(() => { loadData(); }, []);

  const remove = async (id) => {
    await deleteArtwork(id);
    loadData();
  };

  return (
    <div className="row">
      {works.map(w => (
        <div className="col-md-4 mb-3" key={w.id}>
          <div className="card shadow">
            <img src={w.image} className="card-img-top" style={{height:"250px",objectFit:"cover"}} alt="" />
            <div className="card-body">
              <h5 className="fw-bold">{w.title}</h5>
              <p>{w.artist}</p>
              <p>₹{w.price}</p>

              <div className="d-flex justify-content-between">
                <Link to={`/edit/${w.id}`} className="btn btn-primary btn-sm">Edit</Link>
                <button onClick={() => remove(w.id)} className="btn btn-danger btn-sm">Delete</button>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Viewwork;
