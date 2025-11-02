import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Viewwork() {
  const [works, setWorks] = useState([]);

  // Fetch artworks from JSON Server
  useEffect(() => {
    axios
      .get("http://localhost:3000/artworks")
      .then((res) => setWorks(res.data))
      .catch((err) => console.error("Error fetching artworks:", err));
  }, []);

  // Delete artwork
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/artworks/${id}`);
      setWorks(works.filter((w) => w.id !== id));
    } catch (err) {
      console.error("Error deleting artwork:", err);
    }
  };

  return (
    <div className="row justify-content-center mt-4">
      {works.length > 0 ? (
        works.map((w) => (
          <div
            className="col-md-4 col-lg-3 col-sm-6 mb-4"
            key={w.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className="card shadow-lg rounded-4 overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #121212, #1a1a1a)",
                color: "white",
                width: "100%",
                maxWidth: "320px",
                transition: "transform 0.3s, box-shadow 0.3s",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <img
                  src={w.image}
                  alt={w.title}
                  className="card-img-top"
                  style={{
                    height: "250px",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                />
              </div>

              <div className="card-body text-center">
                <h5
                  className="fw-bold"
                  style={{
                    color: "white",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {w.title}
                </h5>

                {/* ✅ Artist name now white */}
                <p className="mb-1" style={{ color: "white", opacity: 0.8 }}>
                  {w.artist}
                </p>

                <p
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                >
                  ₹{w.price}
                </p>

                <div className="d-flex justify-content-center gap-3 mt-3">
                  <Link
                    to={`/edit/${w.id}`}
                    className="btn btn-sm rounded-3 fw-semibold"
                    style={{
                      background: "white",
                      color: "black",
                      width: "80px",
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
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(w.id)}
                    className="btn btn-sm rounded-3 fw-semibold"
                    style={{
                      background: "transparent",
                      color: "#ff4d4d",
                      width: "80px",
                      transition: "0.3s",
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = "#ff4d4d";
                      e.target.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = "transparent";
                      e.target.style.color = "#ff4d4d";
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h5 className="text-center text-white mt-5">No artworks found 🎨</h5>
      )}
    </div>
  );
}

export default Viewwork;
