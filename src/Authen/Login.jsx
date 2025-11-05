import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUserAPI } from "../Service/UserApi";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState(""); // user must select
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!role) {
      alert("⚠️ Please select a role");
      return;
    }

    try {
      const res = await loginUserAPI(username, password, role);

      if (res.data.length > 0) {
        localStorage.setItem("user", JSON.stringify(res.data[0]));
        alert("✅ Login successful!");

        // Navigate based on role
        if (role === "user") {
          navigate("/userhome");
        } else if (role === "artist") {
          navigate("/home");
        }
      } else {
        alert("❌ Invalid credentials!");
      }
    } catch (error) {
      alert("⚠️ Error logging in!");
      console.error(error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundColor: "black",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="rounded-4 shadow-lg p-5 text-center"
        style={{
          width: "400px",
          backgroundColor: "#1c1c1c",
          color: "white",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <style>
          {`
            ::placeholder {
              color: #ffffff !important;
              opacity: 1 !important;
            }
          `}
        </style>

        <h2 className="fw-bold mb-4 text-warning">Galleria</h2>
        <h5 className="fw-semibold mb-4">Great to have you back!</h5>

        <form onSubmit={handleLogin} autoComplete="off">
          <div className="mb-3 text-start">
            <label className="form-label text-white-50">Username</label>
            <input
              type="text"
              className="form-control bg-transparent text-white border-light"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="new-username"
              style={{ borderRadius: "8px", caretColor: "white" }}
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label text-white-50">Password</label>
            <input
              type="password"
              className="form-control bg-transparent text-white border-light"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
              style={{ borderRadius: "8px", caretColor: "white" }}
            />
          </div>

          <div className="mb-4 text-start">
            <label className="form-label text-white-50">Select Role</label>
            <select
              className="form-select bg-transparent text-white border-light"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              style={{ borderRadius: "8px" }}
            >
              <option value="" disabled>Select a role</option>
              <option value="user" className="text-dark">User</option>
              <option value="artist" className="text-dark">Artist</option>
            </select>
          </div>

          <button
            type="submit"
            className="btn w-100 fw-bold bg-warning"
            style={{
              border: "none",
              borderRadius: "8px",
              letterSpacing: "1px",
              color: "black",
            }}
          >
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="text-white-50">
            Don’t have an account?{" "}
            <Link to="/register" className="text-info text-decoration-none fw-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
