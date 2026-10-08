import React, { useState } from "react";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div className="container my-5 p-5">
      {/* Making Tabs */}

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "equity" ? "active" : ""}`}
            onClick={() => setActiveTab("equity")}
          >
            Equity
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "currency" ? "active" : ""}`}
            onClick={() => setActiveTab("currency")}
          >
            Currency
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "commodity" ? "active" : ""}`}
            onClick={() => setActiveTab("commodity")}
          >
            Commodity
          </button>
        </li>
      </ul>

      {/* Equity Table */}
      {activeTab === "equity" && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&O - Futures</th>
              <th>F&O - Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brokerage</td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>STT/CTT</td>
              <td>0.1% on buy & sell</td>
              <td>0.025% on the sell side</td>
              <td>0.05% on the sell side</td>
              <td>
                0.15% on premium (bought & exercised) / 0.15% on sell side
              </td>
            </tr>
            {/*  Same as for rest of the rows */}
          </tbody>
        </table>
      )}

      {/* Currency Table */}
      {activeTab === "currency" && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Currency futures</th>
              <th>Currency options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brokerage</td>
              <td>0.03% or ₹20/executed order whichever is lower</td>
              <td>₹20/executed order</td>
            </tr>
            {/* Same as for rest of the rows */}
          </tbody>
        </table>
      )}

      {/* Commodity Table */}
      {activeTab === "commodity" && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th></th>
              <th>Commodity futures</th>
              <th>Commodity options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brokerage</td>
              <td>0.03% or ₹20/executed order whichever is lower</td>
              <td>₹20/executed order</td>
            </tr>
            {/*  Same as rest of the rows */}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Brokerage;
