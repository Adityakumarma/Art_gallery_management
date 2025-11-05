import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeartCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeWishListItem } from "../../Redux/WishSlice";
import { addToCart } from "../../Redux/CartSlice";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";

function UserWish() {
  const wishlist = useSelector((state) => state.wishlistReducer);
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  // Add to Cart handler
  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert(`${product.title} is already in your cart!`);
    } else {
      dispatch(addToCart(product));
      dispatch(removeWishListItem(product.id));
      alert(`${product.title} added to cart 🛒`);
    }
  };

  return (
    <>
      <UserHeader />
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #000000, #1c1c1c, #2e2e2e)",
          color: "#fff",
          paddingTop: "80px",
          paddingBottom: "60px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Container>
          <div className="text-center mb-5">
            <h2
              className="fw-bold text-uppercase"
              style={{
                background: "linear-gradient(90deg, #ffcc00, #ffa500, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ❤️ My Wishlist
            </h2>
            <p className="text-secondary">
              Your saved art pieces, waiting to be part of your collection ✨
            </p>
          </div>

          {wishlist.length === 0 ? (
            <div className="text-center py-5">
              <h5 className="text-light mb-3 fw-semibold">
                Your wishlist is empty 💔
              </h5>
              <Link
                to="/collection"
                className="btn btn-outline-warning rounded-pill px-4 py-2 fw-semibold shadow-sm"
              >
                Explore Collection 🎨
              </Link>
            </div>
          ) : (
            <Row className="g-4 justify-content-center">
              {wishlist.map((product) => (
                <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <Card
                    className="border-0 shadow-lg h-100 text-white rounded-4"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(10px)",
                      transition: "all 0.4s ease",
                      transform: "translateY(0px)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "translateY(-8px)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "translateY(0px)")
                    }
                  >
                    <div className="overflow-hidden rounded-top-4">
                      <Card.Img
                        variant="top"
                        src={
                          product.img ||
                          product.image ||
                          product.thumbnail ||
                          "https://via.placeholder.com/300x250?text=No+Image"
                        }
                        alt={product.title}
                        style={{
                          height: "250px",
                          objectFit: "cover",
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

                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <Card.Title
                          className="fw-semibold text-warning text-truncate"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {product.title}
                        </Card.Title>
                        <Card.Text className="text-secondary small mb-1">
                          {product.artist || "Unknown Artist"}
                        </Card.Text>
                        <Card.Text className="fw-bold text-light">
                          ${product.price}
                        </Card.Text>
                      </div>

                      <div className="d-flex justify-content-center gap-3 mt-3">
                        <Button
                          variant="outline-danger"
                          size="sm"
                          className="rounded-pill fw-semibold px-3"
                          onClick={() =>
                            dispatch(removeWishListItem(product.id))
                          }
                        >
                          <FontAwesomeIcon icon={faHeartCircleXmark} /> Remove
                        </Button>
                        <Button
                          variant="outline-warning"
                          size="sm"
                          className="rounded-pill fw-semibold px-3 text-dark bg-warning border-0"
                          onClick={() => handleAddToCart(product)}
                        >
                          <FontAwesomeIcon icon={faCartShopping} /> Add to Cart
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </div>
      <UserFooter />
    </>
  );
}

export default UserWish;
