import React from "react";

function ChargesExplained() {
  return (
    <div className="container my-5">
      <h4 className="mb-4">Charges explained</h4>

      <div className="row">





        {/* Left column */}





        <div className="col-md-6">
          <h6 className="fw-bold">Securities/Commodities transaction tax</h6>
          <p>
            Tax by the government when transacting on the exchanges. Charged
            as above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or F&O.
            Important to keep a tab.
          </p>

          <h6 className="fw-bold">Transaction/Turnover Charges</h6>
          <p>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p>
            BSE has revised transaction charges for XC, XD, XT, Z and ZP
            groups to ₹10,000 per crore w.e.f 01.01.2018 (XC and XD groups
            have been merged into new group X w.e.f 01.12.2017).
          </p>
          <p>
            BSE has revised transaction charges in SS and ST groups to
            ₹1,00,000 per crore of turnover.
          </p>
          <p>
            BSE has revised transaction charges for group A, B and other
            non-exclusive scripts from group E, F, CG, CW, W, T at ₹375 per
            crore of turnover on flat rate basis w.e.f December 1, 2022.
          </p>
          <p>
            BSE has revised transaction charges in M, MT, TS and MS groups to
            ₹275 per crore of gross turnover.
          </p>

          <h6 className="fw-bold">Call & trade</h6>
          <p>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including auto square off orders.
          </p>

          <h6 className="fw-bold">Stamp charges</h6>
          <p>
            Stamp charges by the Government of India as the Indian Stamp Act
            of 1899 for transacting in instruments on the stock exchanges and
            depositories.
          </p>

          <h6 className="fw-bold">NRI brokerage charges</h6>
          <p>
            For a non-PIS account, 0.5% or ₹50 per executed order for equity
            and F&O (whichever is lower).
          </p>
          <p>
            For a PIS account, 0.5% or ₹200 per executed order for equity
            (whichever is lower).
          </p>
          <p>₹500 + GST as yearly account maintenance charges (AMC).</p>

          <h6 className="fw-bold">Account with debit balance</h6>
          <p>
            Accounts with a debit balance will be charged an additional ₹20
            per executed order.
          </p>

          <h6 className="fw-bold">Charges for Investor's Protection Fund Trust (IPFT) by NSE</h6>
          <p>Equity and Futures: ₹0.01 per crore + GST of the traded value.</p>
          <p>Options: ₹0.01 per crore + GST traded value (premium value).</p>
          <p>
            Currency: ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
            lakh + GST of premium for Options.
          </p>

          <h6 className="fw-bold">Margin Trading Facility (MTF)</h6>
          <p>MTF Interest: 0.04% per day/₹40 per lakh. The amount is applied from T+1 day until the MTF stocks are sold.</p>
          <p>MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.</p>
          <p>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</p>
        </div>




        {/* Right column */}




        <div className="col-md-6">
          <h6 className="fw-bold">GST</h6>
          <p>
            Tax levied by the government on the services rendered. 18% of
            (brokerage + SEBI charges + transaction charges).
          </p>

          <h6 className="fw-bold">SEBI Charges</h6>
          <p>
            Charged at ₹10 per crore + GST by Securities and Exchange Board
            of India for regulating the markets.
          </p>

          <h6 className="fw-bold">DP (Depository participant) charges</h6>
          <p>
            ₹15.34 per scrip (₹13 CDSL fee + ₹0.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p>
            Female demat account holders (as first holder) will enjoy a
            discount of ₹0.25 on the CDSL fee.
          </p>
          <p>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>

          <h6 className="fw-bold">Pledging charges</h6>
          <p>₹30 + GST per pledge request per ISIN.</p>

          <h6 className="fw-bold">AMC (Account maintenance charges)</h6>
          <p>Free for the first year on all new resident individual accounts.</p>
          <p>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn more about BSDA,{" "}
            <a href="#" className="text-decoration-none">Click here</a>
          </p>
          <p>
            For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
            (90 days). To learn more about AMC,{" "}
            <a href="#" className="text-decoration-none">Click here</a>
          </p>

          <h6 className="fw-bold">Corporate action order charges</h6>
          <p>
            ₹20 plus GST will be charged for OFS / buyback / takeover /
            delisting orders placed through Console.
          </p>

          <h6 className="fw-bold">Off-market transfer charges</h6>
          <p>₹25 per transaction.</p>

          <h6 className="fw-bold">Physical CMR request</h6>
          <p>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
            for subsequent requests.
          </p>

          <h6 className="fw-bold">Payment gateway charges</h6>
          <p>₹9 + GST (Not levied on transfers done via UPI).</p>

          <h6 className="fw-bold">Delayed Payment Charges</h6>
          <p>
            Interest is levied at 18% a year or 0.05% per day on the debit
            balance in your trading account.{" "}
            <a href="#" className="text-decoration-none">Learn more.</a>
          </p>

          <h6 className="fw-bold">Trading using 3-in-1 account with block functionality</h6>
          <p>Delivery & MTF Brokerage: 0.5% per executed order.</p>
          <p>Intraday Brokerage: 0.05% per executed order.</p>
        </div>
      </div>

      

      <p className="text-muted small mt-5">
        <strong>Disclaimer</strong>
        <br  />
        For Delivery based trades, a minimum of ₹0.01 will be charged per
        contract note. Clients who opt to receive physical contract notes
        will be charged ₹20 per contract note plus courier charges. All
        statutory and regulatory charges will be levied at actuals. Brokerage
        is also charged on expired, exercised, and assigned options
        contracts. Free investments are available only for our retail
        individual clients. Companies, Partnerships, Trusts, and HUFs need to
        pay 0.1% or ₹20 (whichever is less) as brokerage. Brokerage a
        percentage of the contract value will be charged for contracts where
        physical delivery happens. For netted off positions in physically
        settled contracts, a brokerage of 0.25% will be charged.
      </p>
    </div>
  );
}

export default ChargesExplained;