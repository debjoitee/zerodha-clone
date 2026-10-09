import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescripton,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* মোবাইলে সম্পূর্ণ প্রস্থ (col-12) এবং ডেস্কটপে অর্ধেক (col-md-6) */}
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        {/* মোবাইলে সেন্টারে এবং ডেস্কটপে বাঁয়ে এলাইনমেন্ট */}
        <div className="col-12 col-md-6 p-3 p-md-5 text-center text-md-start">
          <h1 className="fs-2 mb-3">{productName}</h1>
          <p className="text-muted fs-6 mb-4">{productDescripton}</p>

          <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-4">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>

          <div className="mt-4 d-flex justify-content-center justify-content-md-start gap-3">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
