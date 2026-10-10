import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL, DASHBOARD_URL } from "../config";

function SignupForm() {
  const [inputValue, setInputValue] = useState({
    username: "",
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
  //       `${API_URL}/signup`,
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
  setLoading(true);
  try {
    const baseUrl = (API_URL || "").replace(/\/$/, "");
    const { data } = await axios.post(`${baseUrl}/login`, inputValue);

    if (data.success && data.token) {
      const dashUrl = (DASHBOARD_URL || "").replace(/\/$/, "");
      window.location.href = `${dashUrl}/?token=${data.token}`;
    } else {
      setMessage(data.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  } catch (error) {
    console.error("Auth error:", error);
    setMessage("Server did not respond. Please wait a moment and try again.");
    setLoading(false);
  }
};







  return (
    <div className="container my-5" style={{ maxWidth: "420px" }}>
      <h2 className="mb-4">Signup</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={inputValue.username}
            onChange={handleChange}
            required
          />
        </div>

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
          Signup
        </button>

        <p className="mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default SignupForm;