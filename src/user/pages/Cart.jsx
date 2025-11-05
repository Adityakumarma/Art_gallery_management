import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
  emptyCart,
} from "../../Redux/CartSlice";
import { Button, Table, Container, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserHeader from "../components/UserHeader";
import { useNavigate } from "react-router-dom"; // ✅ Added for navigation

function Cart() {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ For redirecting after checkout

  // 🧾 Calculate total price
  const totalAmount = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  // ✅ Checkout Handler
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // You could later add logic here to POST purchases to /purchases if needed
    dispatch(emptyCart());
    alert("✅ Checkout complete! Thank you for your purchase.");
    navigate("/userhome"); // redirect to user home
  };

  return (
    <>
      <UserHeader />
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #000000, #1e1e1e, #3a3a3a)",
          padding: "80px 0",
          color: "#fff",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Container>
          <Card
            className="shadow-lg border-0"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              borderRadius: "25px",
              padding: "30px",
            }}
          >
            <h2
              className="text-center mb-4 fw-bold"
              style={{
                background: "linear-gradient(90deg, #ffcc00, #ff8800, #ffffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              🛒 Your Art Cart
            </h2>

            {cart.length === 0 ? (
              <div className="text-center py-5">
                <h5 className="fw-semibold text-light">Your cart is empty!</h5>
                <p className="text-secondary">
                  Browse and add items to your cart.
                </p>
              </div>
            ) : (
              <>
                <div
                  className="table-responsive"
                  style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  <Table
                    striped
                    bordered
                    hover
                    variant="dark"
                    className="align-middle mb-0"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      color: "#f8f9fa",
                    }}
                  >
                    <thead
                      style={{
                        background: "linear-gradient(90deg, #ffcc00, #ff8800)",
                        color: "#000",
                        fontWeight: "600",
                        textTransform: "uppercase",
                      }}
                    >
                      <tr>
                        <th>#</th>
                        <th>Artwork</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item, index) => {
                        const imageSrc =
                          item.img ||
                          item.image ||
                          item.thumbnail ||
                          "https://via.placeholder.com/100x100?text=No+Image";

                        return (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>
                              <img
                                src={imageSrc}
                                alt={item.title}
                                style={{
                                  width: "80px",
                                  height: "80px",
                                  borderRadius: "10px",
                                  objectFit: "cover",
                                  boxShadow:
                                    "0 0 8px rgba(255,255,255,0.2)",
                                }}
                              />
                            </td>
                            <td className="fw-semibold">{item.title}</td>
                            <td>${item.price}</td>
                            <td>
                              <div className="d-flex align-items-center justify-content-center">
                                <Button
                                  variant="outline-light"
                                  size="sm"
                                  onClick={() =>
                                    dispatch(decrementQuantity(item.id))
                                  }
                                  style={{
                                    borderRadius: "50%",
                                    fontSize: "1rem",
                                    width: "32px",
                                    height: "32px",
                                  }}
                                >
                                  −
                                </Button>
                                <span className="mx-3 fw-bold fs-5">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="outline-light"
                                  size="sm"
                                  onClick={() =>
                                    dispatch(incrementQuantity(item.id))
                                  }
                                  style={{
                                    borderRadius: "50%",
                                    fontSize: "1rem",
                                    width: "32px",
                                    height: "32px",
                                  }}
                                >
                                  +
                                </Button>
                              </div>
                            </td>
                            <td className="fw-semibold text-warning">
                              ${item.totalPrice}
                            </td>
                            <td>
                              <Button
                                variant="danger"
                                size="sm"
                                className="rounded-pill px-3 fw-semibold"
                                onClick={() =>
                                  dispatch(removeItemFromCart(item.id))
                                }
                              >
                                Remove
                              </Button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>

                {/* ✅ Bottom Section with Total, Empty Cart, and Checkout */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
                  <h4
                    className="fw-bold mb-3 mb-md-0"
                    style={{
                      background: "linear-gradient(90deg, #ffd700, #ffa500)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Total Amount: ${totalAmount}
                  </h4>
                  <div>
                    <Button
                      variant="outline-danger"
                      className="me-3 rounded-pill px-4 fw-semibold"
                      onClick={() => dispatch(emptyCart())}
                    >
                      Empty Cart
                    </Button>

                    {/* 🧾 Checkout Button */}
                    <Button
                      variant="success"
                      className="rounded-pill px-4 fw-semibold"
                      onClick={handleCheckout}
                    >
                      Checkout
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Card>
        </Container>
      </div>
    </>
  );
}

export default Cart;
