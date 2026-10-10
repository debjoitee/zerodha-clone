import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL, DASHBOARD_URL } from "../config";

function LoginForm() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(
  //       `axios.get(`${API_URL}/login`)`,
  //       inputValue,
  //       { withCredentials: true }
  //     );

  //     if (data.success) {
  //       window.location.href = "http://localhost:3001";
  //     } else {
  //       setMessage(data.message);
  //     }
  //   } catch (error) {
  //     setMessage("Something went wrong. Please try again.");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      // API_URL শেষে স্ল্যাশ থাকলে তা সরিয়ে নেওয়া
      const baseUrl = (API_URL || "").replace(/\/$/, "");
      const { data } = await axios.post(`${baseUrl}/login`, inputValue);

      if (data.success && data.token) {
        // ড্যাশবোর্ড লিঙ্ক ফরম্যাট ঠিক করা
        const dashUrl = (
          DASHBOARD_URL || "https://zerodha-dashboard-app.netlify.app"
        ).replace(/\/$/, "");
        window.location.href = `${dashUrl}?token=${data.token}`;
      } else {
        setMessage(data.message || "Login failed. Please check credentials.");
      }
    } catch (error) {
      console.error("Login API Error:", error.response || error);
      setMessage(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "420px" }}>
      <h2 className="mb-4">Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={inputValue.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="form-control"
              value={inputValue.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {message && <p className="text-danger">{message}</p>}

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        <p className="mt-3">
          New here? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
