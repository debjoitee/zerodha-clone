import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import AccountOpeningCharges from "./AccountOpeningCharges";
import DematAMC from "./DematAMC";
import ValueAddedServices from "./ValueAddedServices";
import ChargesExplained from "./ChargesExplained";

function PricingPage() {
  return (
    <>
      <Hero />
      <Brokerage />
      <AccountOpeningCharges />
      <DematAMC />
      <ValueAddedServices />
      <ChargesExplained />
    </>
  );
}

export default PricingPage;