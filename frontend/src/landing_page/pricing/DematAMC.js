import React from "react";

function DematAMC() {
  return (
    <div className="container my-5">
      <h4 className="mb-3">Demat AMC (Annual Maintenance Charge)</h4>

      <div className="border-start border-primary border-4 ps-3 py-2 mb-4 bg-light">
        Free for first year*
      </div>

      <p className="text-muted mb-2">From second year onwards, for BSDA accounts:</p>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Value of holdings</th>
            <th>AMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Up to ₹4 lakh</td>
            <td><span className="badge bg-success">FREE</span></td>
          </tr>
          <tr>
            <td>₹4 lakh – ₹10 lakh</td>
            <td>₹100 per year + 18% GST, charged quarterly</td>
          </tr>
          <tr>
            <td>Above ₹10 lakh</td>
            <td>₹300 per year + 18% GST, charged quarterly</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-3 mb-1">
        For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of
        holdings value, charged quarterly.
      </p>

      <p className="mb-1">
        To learn more about BSDA,{" "}
        <a href="#" className="text-decoration-none">
          click here
        </a>
        . To learn more about AMC,{" "}
        <a href="#" className="text-decoration-none">
          click here
        </a>
        .
      </p>

      <p className="text-muted small mt-3">*Resident individual accounts only.</p>
    </div>
  );
}

export default DematAMC;