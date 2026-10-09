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
  try {
    const { data } = await axios.post(`${API_URL}/login`, inputValue);

    if (data.success) {
      window.location.href = `${DASHBOARD_URL}/?token=${data.token}`;
    } else {
      setMessage(data.message);
    }
  } catch (error) {
    setMessage("Something went wrong. Please try again.");
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