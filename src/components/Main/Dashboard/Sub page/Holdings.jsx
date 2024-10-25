import React, { useState, useEffect } from 'react';
import "./Holdings.css";

const Holdings = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All items");
    const [filteredHoldings, setFilteredHoldings] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const holdings = [
        {
            name: "Reliance Industries",
            type: "Stock",
            quantity: 10,
            avgPrice: 2100,
            ltp: 2200,
            currentValue: 22000,
            pnl: 1000,
            dayChange: 2.5,
        },
        {
            name: "TCS",
            type: "Stock",
            quantity: 5,
            avgPrice: 3200,
            ltp: 3300,
            currentValue: 16500,
            pnl: 500,
            dayChange: 1.8,
        },
        {
            name: "HDFC Bank",
            type: "Stock",
            quantity: 15,
            avgPrice: 1400,
            ltp: 1450,
            currentValue: 21750,
            pnl: 750,
            dayChange: -0.5,
        },
        {
            name: "Axis Bluechip Fund",
            type: "Mutual Fund",
            quantity: 100,
            avgPrice: 35,
            ltp: 37,
            currentValue: 3700,
            pnl: 200,
            dayChange: 1.2,
        },
        {
            name: "ICICI Prudential Technology Fund",
            type: "Mutual Fund",
            quantity: 50,
            avgPrice: 80,
            ltp: 85,
            currentValue: 4250,
            pnl: 250,
            dayChange: 0.8,
        },
        {
            name: "LIC Jeevan Anand",
            type: "Insurance",
            quantity: 1,
            avgPrice: 50000,
            ltp: 52000,
            currentValue: 52000,
            pnl: 2000,
            dayChange: 0.5,
        },
        {
            name: "HDFC Life Insurance",
            type: "Insurance",
            quantity: 1,
            avgPrice: 30000,
            ltp: 31000,
            currentValue: 31000,
            pnl: 1000,
            dayChange: 0.7,
        },
        {
            name: "Government Bond 2030",
            type: "Bond",
            quantity: 10,
            avgPrice: 1000,
            ltp: 1020,
            currentValue: 10200,
            pnl: 200,
            dayChange: 0.3,
        },
        {
            name: "Corporate Bond XYZ Ltd",
            type: "Bond",
            quantity: 5,
            avgPrice: 2000,
            ltp: 2050,
            currentValue: 10250,
            pnl: 250,
            dayChange: 0.4,
        },
    ];

    useEffect(() => {
        filterHoldings();
    }, [selectedOption, searchTerm]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filterHoldings = () => {
        let filtered = holdings;

        if (selectedOption !== "All items") {
            filtered = filtered.filter(holding => {
                const type = selectedOption.toLowerCase().replace("all ", "");
                return holding.type.toLowerCase() === (type === "insurance" ? "insurance" : type.slice(0, -1));
            });
        }

        if (searchTerm) {
            filtered = filtered.filter(holding =>
                holding.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredHoldings(filtered);
    };

    return (
        <div className="holdings-container">
            <div className="holdings-header">
                <div className="left-sec">
                    <h1>Holdings</h1>
                    <div className="holdings-dropdown">
                        <button className="holdings-dropdown-toggle" onClick={toggleDropdown}>
                            {selectedOption}<i className="ri-arrow-down-s-line"></i>
                        </button>
                        {isDropdownOpen && (
                            <ul className="holdings-dropdown-menu">
                                <li><button onClick={() => handleOptionSelect("All items")}>All items</button></li>
                                <li><button onClick={() => handleOptionSelect("All Stocks")}>All Stocks</button></li>
                                <li><button onClick={() => handleOptionSelect("All Mutual Funds")}>All Mutual Funds</button></li>
                                <li><button onClick={() => handleOptionSelect("All Bonds")}>All Bonds</button></li>
                                <li><button onClick={() => handleOptionSelect("All Insurance")}>All Insurance</button></li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className="right-sec">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-input"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <i className="ri-search-line search-icon"></i>
                    </div>
                </div>
            </div>
            <div className="holdings-list">
                <div className="table-container">
                    <table className="holdings-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Quantity</th>
                                <th>Avg Price</th>
                                <th>LTP</th>
                                <th>Current Value</th>
                                <th>P&L</th>
                                <th>Net Change</th>
                                <th>Day Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredHoldings.map((holding, index) => (
                                <tr key={index}>
                                    <td>{holding.name}</td>
                                    <td>{holding.type}</td>
                                    <td>{holding.quantity}</td>
                                    <td>₹{holding.avgPrice.toFixed(2)}</td>
                                    <td>₹{holding.ltp.toFixed(2)}</td>
                                    <td>₹{holding.currentValue.toFixed(2)}</td>
                                    <td className={holding.pnl >= 0 ? "positive" : "negative"}>
                                        ₹{holding.pnl.toFixed(2)}
                                    </td>
                                    <td className={(holding.ltp - holding.avgPrice) >= 0 ? "positive" : "negative"}>
                                        ₹{(holding.ltp - holding.avgPrice).toFixed(2)}
                                    </td>
                                    <td className={holding.dayChange >= 0 ? "positive" : "negative"}>
                                        {holding.dayChange.toFixed(2)}%
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Holdings;
