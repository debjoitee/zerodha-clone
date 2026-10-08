import React from "react";

function Universe() {
  return (
    <div className="container mt-5 text-center">
      <div className="row ">
        <div className="p-5 mt-5 mb-5">
          <h1>The Zerodha Universe</h1>
          <p className="p-3 mb-5">
            Extend your trading and investment experience further with our
            partner platform
          </p>

          <div>
            <div className="row p-3">
              <div className="col-4 p-3 ">
                <img
                  src="Media/images/zerodhaFundhouse.png"
                  style={{ width: "60%" }}
                />
                <p className=" text-small text-muted mt-2">
                  Our asset management venture that is creating simple and
                  transparent index funds to help you save for your goals.
                </p>
              </div>

              <div className="col-4 p-3  ">
                <img
                  src="Media/images/sensibullLogo.svg "
                  style={{ width: "60%" }}
                />
                <p className=" text-small text-muted mt-4">
                  {" "}
                  Options trading platform that lets you create strategies,
                  analyze positions, and examine data points like open interest,
                  FII/DII, and more.
                </p>
              </div>
              <div className="col-4 p-3 ">
                <img src="Media/images/tijori.svg " style={{ width: "50%" }} />
                <p className=" text-small text-muted ">
                  {" "}
                  Investment research platform that offers detailed insights on
                  stocks, sectors, supply chains, and more.
                </p>
              </div>
            </div>

            <div className="row p-3">
              <div className="col-4 p-3 ">
                <img
                  src="Media/images/streakLogo.png"
                  style={{ width: "60%" }}
                />
                <p className=" text-small text-muted mt-2">
                  Systematic trading platform that allows you to create and
                  backtest strategies without coding.
                </p>
              </div>

              <div className="col-4 p-3  ">
                <img
                  src="Media/images/smallcaseLogo.png "
                  style={{ width: "60%" }}
                />
                <p className=" text-small text-muted mt-4">
                  Thematic investing platform that helps you invest in
                  diversified baskets of stocks on ETFs
                </p>
              </div>
              <div className="col-4 p-3 ">
                <img
                  src="Media/images/dittoLogo.png "
                  style={{ width: "50%" }}
                />
                <p className=" text-small text-muted mt-3">
                  {" "}
                  Personalized advice on life and health insurance. No spam and
                  no mis-selling. Sign up for free
                </p>
              </div>
            </div>

            <button
              className="btn btn-primary fs-5 mb-5 mt-4"
              style={{ width: "20%", margin: "0 auto" }}
            >
              Sign up for free{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
