import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  kiteConnect,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* মোবাইলে টেক্সট নিচে (order-2) এবং ডেস্কটপে বাঁয়ে (order-md-1) */}
        <div className="col-12 col-md-6 p-3 p-md-5 order-2 order-md-1 text-center text-md-start">
          <h1 className="fs-2 mb-3">{productName}</h1>
          <p className="text-muted fs-6 mb-4">{productDescription}</p>

          <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-4">
            {learnMore && (
              <a href={learnMore} style={{ textDecoration: "none" }}>
                Learn More{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
            {kiteConnect && (
              <a href={kiteConnect} style={{ textDecoration: "none" }}>
                Kite Connect{" "}
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>
        </div>

        {/* মোবাইলে ছবি উপরে (order-1) এবং ডেস্কটপে ডানে (order-md-2) */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0 order-1 order-md-2">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;