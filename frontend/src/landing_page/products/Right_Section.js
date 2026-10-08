import React from 'react';

function Right_Section({
  imageURL,
  productName,
  productDescription,
  learnMore,
  KiteConnect,

}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5 ">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div className="mb-3">
            <a href={learnMore} style={{ marginLeft: "0%", textDecoration: "none" }}>
              Learn More {" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true" ></i>
            </a>
          </div>

        </div>

        <div className="col-6 p-5 ">
          <img src={imageURL} /></div>
      </div>
    </div>
  );
}
export default Right_Section;