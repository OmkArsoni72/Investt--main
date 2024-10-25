import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./Portfolio.css";

const Portfolio = () => {
  // Dummy user data
  const user = {
    name: "Alice Johnson",
    totalInvestment: 83591.48,
    currentValue: 112934.34,
    totalReturns: 29345.33
  };

  const indices = [
    { name: "NIFTY 50", shortName: "NIFTY", value: "18,563.40", change: "+0.25%" },
    { name: "SENSEX", shortName: "BSE", value: "62,501.69", change: "+0.20%" },
    { name: "BANK NIFTY", shortName: "BANKNIFTY", value: "44,327.80", change: "+0.15%" }
  ];

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Current Value",
            data: [85000, 90000, 95000, 100000, 105000, user.currentValue],
            borderColor: "#4CAF50",
            backgroundColor: "rgba(76, 175, 80, 0.1)",
            fill: true,
            tension: 0.4,
          },
          {
            label: "Total Investment",
            data: [80000, 81000, 82000, 83000, 83500, user.totalInvestment],
            borderColor: "#2196F3",
            backgroundColor: "rgba(33, 150, 243, 0.1)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            mode: "index",
            intersect: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: false,
            grid: {
              color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              callback: function(value) {
                return '₹' + value.toLocaleString();
              },
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [user.currentValue, user.totalInvestment]);
    
  return (
    <div className="hero">
      <div className="upper-sec">
        <div className="first">
          <h1>Hi, {user.name}</h1>
          <h2>Welcome to Investt+</h2>
        </div>
        <div className="second">
        <h5>Total Investment</h5>
        <h1 data-decimal="48">₹ {Math.floor(user.totalInvestment).toLocaleString()}<span style={{ fontSize: '0.7em' }}>.{user.totalInvestment.toFixed(2).split('.')[1]}</span></h1>
        </div>
        <div className="third">
        <h5>Current Value</h5>
        <h1 data-decimal="34">₹ {Math.floor(user.currentValue).toLocaleString()}<span style={{ fontSize: '0.7em' }}>.{user.currentValue.toFixed(2).split('.')[1]}</span></h1>
        </div>
        <div className="fourth">
        <h5>Total Returns</h5>
        <h1 data-decimal="33">₹ {Math.floor(user.totalReturns).toLocaleString()}<span style={{ fontSize: '0.7em' }}>.{user.totalReturns.toFixed(2).split('.')[1]}</span></h1>
        </div>
      </div>
      <div className="lower-sec">
        <div className="left">
            <h3>INDEX</h3>
            <p>Market Closes At 5:00 PM</p>
            {indices.map((index, i) => (
              <div key={i} className="index-card">
               <div className="index-left">
                <h4>{index.name} </h4>
                <h6>{index.shortName}</h6>
               </div>
               <div className="index-right">
                <h4>{index.value}</h4>
                <h6>{index.change}</h6>
               </div>
              </div>
            ))}
            <button className="view-all-btn">View All</button>
        </div>
        <div className="right">
            <h3>Portfolio Performance</h3>
            <div className="portfolio-graph">
                <canvas ref={chartRef} style={{ width: "100%", height: "300px" }}></canvas>
            </div>
            <div className="graph-legend">
                <div className="legend-item">
                    <div className="legend-color" style={{backgroundColor: "#4CAF50"}}></div>
                    <span>Current Value</span>
                </div>
                <div className="legend-item">
                    <div className="legend-color" style={{backgroundColor: "#2196F3"}}></div>
                    <span>Total Investment</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
