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
      <div className="row">
        <div className="col-6 ">
          <img src={imageURL} />
        </div>

        <div className="col-6 p-5 ">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

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

          <a href={googlePlay}>
            <img src="Media/images/googlePlayBadge.svg"></img>
          </a>
          <a href={appStore} style={{ marginLeft: "5%" }}>
            <img src="Media/images/appstoreBadge.svg"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Left_Section;
