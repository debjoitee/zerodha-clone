import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL, LANDING_URL } from "../config";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const checkToken = async (token) => {
  for (let attempt = 1; attempt <= 8; attempt++) {
    try {
      const res = await axios.get(`${API_URL}/verify`, {
        headers: { Authorization: `Bearer ${token}` },
        timeout: 15000,
      });
      return res.data.status ? "valid" : "invalid";
    } catch (error) {
      await wait(5000);
    }
  }
  return "unreachable";
};

const AuthGuard = ({ children }) => {
  const [state, setState] = useState("checking");

  useEffect(() => {
    // login এর পর URL এ আসা token টা browser এ রেখে দাও
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

    checkToken(token).then((result) => {
      if (result === "valid") {
        setState("ok");
      } else if (result === "invalid") {
        localStorage.removeItem("token");
        window.location.href = `${LANDING_URL}/login`;
      } else {
        setState("unreachable");
      }
    });
  }, []);

  if (state === "checking") {
    return (
      <p style={{ padding: "20px" }}>
        Loading your dashboard... the free server may need up to a minute to
        wake up.
      </p>
    );
  }

  if (state === "unreachable") {
    return (
      <div style={{ padding: "20px" }}>
        <p>Server is not responding right now.</p>
        <button onClick={() => window.location.reload()}>Try again</button>
      </div>
    );
  }

  return children;
};

export default AuthGuard;
