import React, { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";
import { useDispatch } from "react-redux";
import { addToWishListItem } from "../../Redux/WishSlice";
import { addToCart } from "../../Redux/CartSlice";
import { getAllArtworksAPI } from "../../Service/allApi";

function Collection() {
  const dispatch = useDispatch();
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const result = await getAllArtworksAPI();
        if (result.status === 200) {
          setArtworks(result.data);
        } else {
          console.error("Failed to fetch artworks");
        }
      } catch (error) {
        console.error("Error fetching artworks:", error);
      }
    };
    fetchArtworks();
  }, []);

  const handleFavorite = (art) => {
    dispatch(addToWishListItem(art));
    alert(`${art.title} added to Wishlist ❤️`);
  };

  const handleCart = (art) => {
    dispatch(addToCart(art));
    alert(`${art.title} added to Cart 🛒`);
  };

  return (
    <>
      <UserHeader />

      <div
        className="text-white min-vh-100"
        style={{
          background:
            "linear-gradient(180deg, #000000 0%, #121212 50%, #1b1b1b 100%)",
          paddingTop: "100px",
          paddingBottom: "120px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div className="container">
          {/* 🔹 Heading Section */}
          <div className="text-center mb-5">
            <h1
              className="fw-bold display-4"
              style={{
                background:
                  "linear-gradient(90deg, #e4e4e4, #f5d36b, #f2a900, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Galleria Collection
            </h1>
            <p className="text-secondary">
              Discover artworks uploaded by our talented artists — where
              creativity meets eternity.
            </p>
          </div>

          {/* 🔹 Artwork Cards */}
          <div className="row g-4 justify-content-center">
            {artworks.length > 0 ? (
              artworks.map((art) => (
                <div
                  key={art.id}
                  className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
                >
                  <div
                    className="card border-0 shadow-lg text-center"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      borderRadius: "20px",
                      backdropFilter: "blur(6px)",
                      overflow: "hidden",
                      height: "440px", // ✅ slightly reduced for better compactness
                      width: "100%",
                      maxWidth: "320px",
                      transition: "transform 0.4s ease, box-shadow 0.4s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.boxShadow =
                        "0 0 25px rgba(255,255,255,0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {/* Artwork Image */}
                    <div style={{ overflow: "hidden" }}>
                      <img
                        src={art.image}
                        alt={art.title}
                        className="img-fluid"
                        style={{
                          height: "210px",
                          width: "100%",
                          objectFit: "cover",
                          borderTopLeftRadius: "20px",
                          borderTopRightRadius: "20px",
                          transition: "transform 0.5s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.08)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                    </div>

                    {/* Artwork Info */}
                    <div
                      className="card-body d-flex flex-column justify-content-between"
                      style={{ padding: "35px" }}
                    >
                      <div>
                        <h5 className="fw-semibold text-white mb-1">
                          {art.title}
                        </h5>
                        <p
                          className="small mb-1"
                          style={{ color: "#dcdcdc", fontStyle: "italic" }}
                        >
                          {art.artist || ""}
                        </p>
                        <p className="fw-bold text-warning mb-1">
                          ₹{art.price || "—"}
                        </p>
                      </div>

                      {/* Buttons - tighter spacing */}
                      <div className="d-flex justify-content-center gap-2 mt-1">
                        <button
                          onClick={() => handleFavorite(art)}
                          className="btn btn-outline-danger btn-sm rounded-pill px-3 py-1"
                        >
                          ❤️ Wishlist
                        </button>
                        <button
                          onClick={() => handleCart(art)}
                          className="btn btn-outline-light btn-sm rounded-pill px-3 py-1"
                        >
                          🛒 Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-white-50">
                No artworks available yet. 🎨
              </p>
            )}
          </div>
        </div>
      </div>

      <UserFooter />
    </>
  );
}

export default Collection;
