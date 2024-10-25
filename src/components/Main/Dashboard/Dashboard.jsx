import React, { useState } from "react";
import Dash_nav from "./Dash_nav";
import Portfolio from "./Sub page/Portfolio";
import Holdings from "./Sub page/Holdings";
import Watchlist from "./Sub page/Watchlist";
import Transactions from "./Sub page/Transactions";
import "./Dashboard.css";
import Mainnav from "../Mainnav";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("Portfolio");

  const renderPage = () => {
    switch (activePage) {
      case "Portfolio":
        return <Portfolio />;
      case "Holdings":
        return <Holdings />;
      case "Watchlist":
        return <Watchlist />;
      case "Transactions":
        return <Transactions />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <div className="dashboard">
      <Mainnav />
      <Dash_nav setActivePage={setActivePage} />
      <div className="dashboard-content">{renderPage()}</div>
    </div>
  );
};

export default Dashboard;
