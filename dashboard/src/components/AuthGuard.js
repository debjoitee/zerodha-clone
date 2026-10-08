import React, { useEffect, useState } from "react";
import axios from "axios";

const AuthGuard = ({ children }) => {
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3002/verify", { withCredentials: true })
      .then((res) => {
        if (res.data.status) {
          setIsChecking(false);
        } else {
          window.location.href = "http://localhost:3000/login";
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:3000/login";
      });
  }, []);

  if (isChecking) {
    return <p>Loading...</p>;
  }

  return children;
};

export default AuthGuard;