import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />

        <h1 className="mt-5 mb-4">Invest in Everything</h1>

        <p>
          Online platform for investing in everything you want, from stocks to
          crypto, all in one place.
        </p>

        <button
          className="btn btn-primary fs-5 mb-5 mt-4"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up for free{" "}
        </button>
      </div>
    </div>
  );
}

export default Hero;
