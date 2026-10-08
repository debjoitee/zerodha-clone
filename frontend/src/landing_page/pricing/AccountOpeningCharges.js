import React from "react";

function AccountOpeningCharges() {
  return (
    <div className="container my-5">
      <h4 className="mb-4">Charges for account opening</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Type of account</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Individual account</td>
            <td><span className="badge bg-success">FREE</span></td>
          </tr>
          <tr>
            <td>Minor account</td>
            <td><span className="badge bg-success">FREE</span></td>
          </tr>
          <tr>
            <td>NRI account</td>
            <td>₹500</td>
          </tr>
          <tr>
            <td>HUF account</td>
            <td><span className="badge bg-success">FREE</span> (online) / ₹500 (offline)</td>
          </tr>
          <tr>
            <td>Partnership, LLP, and Corporate accounts (offline only)</td>
            <td>₹500</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AccountOpeningCharges;