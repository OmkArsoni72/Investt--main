import React, { useState, useEffect } from 'react';
import "./stocks.css";

const Stocks = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All Stocks");
    const [filteredStocks, setFilteredStocks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const stocks = [
        { symbol: 'AAPL', name: 'Apple Inc.', quantity: 10, avgPrice: 150.00, ltp: 155.50, currentValue: 1555.00, pnl: 55.00, dayChange: 1.5 },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', quantity: 5, avgPrice: 2000.00, ltp: 2050.00, currentValue: 10250.00, pnl: 250.00, dayChange: -0.5 },
        { symbol: 'MSFT', name: 'Microsoft Corporation', quantity: 15, avgPrice: 220.00, ltp: 225.00, currentValue: 3375.00, pnl: 75.00, dayChange: 0.8 },
        { symbol: 'AMZN', name: 'Amazon.com Inc.', quantity: 8, avgPrice: 3200.00, ltp: 3250.00, currentValue: 26000.00, pnl: 400.00, dayChange: 1.2 },
        { symbol: 'FB', name: 'Meta Platforms Inc.', quantity: 20, avgPrice: 300.00, ltp: 310.00, currentValue: 6200.00, pnl: 200.00, dayChange: -0.3 },
        { symbol: 'TSLA', name: 'Tesla Inc.', quantity: 12, avgPrice: 700.00, ltp: 720.00, currentValue: 8640.00, pnl: 240.00, dayChange: 2.1 },
        { symbol: 'NFLX', name: 'Netflix Inc.', quantity: 6, avgPrice: 500.00, ltp: 490.00, currentValue: 2940.00, pnl: -60.00, dayChange: -1.8 },
        { symbol: 'NVDA', name: 'NVIDIA Corporation', quantity: 18, avgPrice: 180.00, ltp: 190.00, currentValue: 3420.00, pnl: 180.00, dayChange: 1.6 },
    ];

    useEffect(() => {
        filterStocks();
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

    const filterStocks = () => {
        let filtered = stocks;

        if (selectedOption === "Top Gainers") {
            filtered = filtered.filter(stock => stock.dayChange > 0).sort((a, b) => b.dayChange - a.dayChange);
        } else if (selectedOption === "Top Losers") {
            filtered = filtered.filter(stock => stock.dayChange < 0).sort((a, b) => a.dayChange - b.dayChange);
        }

        if (searchTerm) {
            filtered = filtered.filter(stock =>
                stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                stock.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredStocks(filtered);
    };

    return (
        <div className="stocks-container">
            <div className="stocks-header">
                <div className="left-sec">
                    <h1>Stocks</h1>
                    <div className="stocks-dropdown">
                        <button className="stocks-dropdown-toggle" onClick={toggleDropdown}>
                            {selectedOption}<i className="ri-arrow-down-s-line"></i>
                        </button>
                        {isDropdownOpen && (
                            <ul className="stocks-dropdown-menu">
                                <li><button onClick={() => handleOptionSelect("All Stocks")}>All Stocks</button></li>
                                <li><button onClick={() => handleOptionSelect("Top Gainers")}>Top Gainers</button></li>
                                <li><button onClick={() => handleOptionSelect("Top Losers")}>Top Losers</button></li>
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
            <div className="stocks-list">
                <div className="table-container">
                    <table className="stocks-table">
                        <thead>
                            <tr>
                                <th>Symbol</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Avg Price</th>
                                <th>LTP</th>
                                <th>Current Value</th>
                                <th>P&L</th>
                                <th>Day Change</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStocks.map((stock) => (
                                <tr key={stock.symbol}>
                                    <td>{stock.symbol}</td>
                                    <td>{stock.name}</td>
                                    <td>{stock.quantity}</td>
                                    <td>₹{stock.avgPrice.toFixed(2)}</td>
                                    <td>₹{stock.ltp.toFixed(2)}</td>
                                    <td>₹{stock.currentValue.toFixed(2)}</td>
                                    <td className={stock.pnl >= 0 ? "positive" : "negative"}>
                                        ₹{stock.pnl.toFixed(2)}
                                    </td>
                                    <td className={stock.dayChange >= 0 ? "positive" : "negative"}>
                                        {stock.dayChange.toFixed(2)}%
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

export default Stocks;