import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import AuthGuard from "./components/AuthGuard";

// URL থেকে টোকেন চেক করে LocalStorage-এ সংরক্ষণ
const queryParams = new URLSearchParams(window.location.search);
const tokenFromUrl = queryParams.get("token");

if (tokenFromUrl) {
  localStorage.setItem("token", tokenFromUrl);
  // ব্রাউজারের অ্যাড্রেস বার থেকে টোকেন কুয়েরি সরিয়ে ক্লিন URL করা
  window.history.replaceState({}, document.title, window.location.pathname);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <AuthGuard>
              <Home />
            </AuthGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
