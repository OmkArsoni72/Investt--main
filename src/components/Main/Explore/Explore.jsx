import React, { useState } from "react";
import Explore_nav from "./Explore_nav.jsx";
import Stocks from "./Sub Page/Stocks";
import Mutual_Funds from "./Sub Page/MutualFunds";
import Fixed_Deposit from "./Sub Page/FixedDeposit";
import Insurance from "./Sub Page/Insurance";
import "./Explore.css";
import Mainnav from "../Mainnav";

const Explore = () => {
  const [activePage, setActivePage] = useState("Stocks");

  const renderPage = () => {
    switch (activePage) {
      case "Stocks":
        return <Stocks />;
      case "Mutual_Funds":
        return <Mutual_Funds />;
      case "Fixed_Deposit":
        return <Fixed_Deposit />;
      case "Insurance":
        return <Insurance />;
      default:
        return <Stocks />;
    }
  };

  return (
    <div className="explore">
      <Mainnav />
      <Explore_nav setActivePage={setActivePage} />
      <div className="explore-content">{renderPage()}</div>
    </div>
  );
};

export default Explore;