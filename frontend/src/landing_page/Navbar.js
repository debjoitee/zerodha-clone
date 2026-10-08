import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container sticky-top ">
      <nav className="navbar navbar-expand-lg bg-white border-bottom ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="Media/images/logo.svg"
              style={{ width: "30%" }}
              alt="Logo"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button "
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/signup">
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/About#">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/Products">
                  Products
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/Pricing">
                  Pricing
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-muted" to="/Support">
                  Support
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active text-muted" to="#">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
