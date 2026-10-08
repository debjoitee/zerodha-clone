import React from "react";

function Hero() {
  return (
    <div className="container p-5 border-bottom mb-5">
      <div className="text-center text-muted p-5">
        <h1 className=" mt-4" > Zerodha Products</h1>
        <h3 className=" mt-4 mb-4" > Sleek, modern, and intuitive trading platforms</h3>
        <p className="mt-5">
          {" "}
          Check out our{" "}
          <a href="" className="mx-0" style={{ textDecoration: "none" }}>
            {" "}
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
