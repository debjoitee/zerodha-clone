import React from "react";

function Left_Section({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container p-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        <div className="col-12 col-md-6 p-3 p-md-5 text-center text-md-start ">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>

          <div className="mb-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              try Demo{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "20%", textDecoration: "none" }}
            >
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="Google Play" />
            </a>
            <a href={appStore} style={{ marginLeft: "15px" }}>
              <img src="media/images/appstoreBadge.svg" alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left_Section;
