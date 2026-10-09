import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, LANDING_URL } from "../config";

const AuthGuard = ({ children }) => {
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("token");
    if (urlToken) {
      localStorage.setItem("token", urlToken);
      window.history.replaceState({}, "", window.location.pathname);
    }

    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = `${LANDING_URL}/login`;
      return;
    }

    axios
      .get(`${API_URL}/verify`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.status) {
          setIsChecking(false);
        } else {
          localStorage.removeItem("token");
          window.location.href = `${LANDING_URL}/login`;
        }
      })
      .catch(() => {
        window.location.href = `${LANDING_URL}/login`;
      });
  }, []);

  if (isChecking) {
    return <p>Loading...</p>;
  }

  return children;
};

export default AuthGuard;