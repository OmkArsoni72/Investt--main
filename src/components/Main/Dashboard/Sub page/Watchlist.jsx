import React, { useState, useEffect } from 'react';
import "./Watchlist.css";

const Watchlist = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All stocks");
    const [filteredWatchlist, setFilteredWatchlist] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const watchlist = [
        {
            name: "Reliance Industries",
            ltp: 2200,
            change: 50,
            changePercent: 2.33,
            volume: 1000000,
            marketCap: 1500000000000
        },
        {
            name: "TCS",
            ltp: 3300,
            change: -20,
            changePercent: -0.60,
            volume: 500000,
            marketCap: 1200000000000
        },
        {
            name: "HDFC Bank",
            ltp: 1450,
            change: 30,
            changePercent: 2.11,
            volume: 750000,
            marketCap: 800000000000
        },
        {
            name: "Infosys",
            ltp: 1350,
            change: 15,
            changePercent: 1.12,
            volume: 600000,
            marketCap: 550000000000
        },
        {
            name: "Bharti Airtel",
            ltp: 620,
            change: -5,
            changePercent: -0.80,
            volume: 400000,
            marketCap: 350000000000
        },
        {
            name: "ITC",
            ltp: 275,
            change: 8,
            changePercent: 3.00,
            volume: 900000,
            marketCap: 340000000000
        },
        {
            name: "Hindustan Unilever",
            ltp: 2450,
            change: -15,
            changePercent: -0.61,
            volume: 300000,
            marketCap: 575000000000
        },
        {
            name: "ICICI Bank",
            ltp: 720,
            change: 25,
            changePercent: 3.59,
            volume: 850000,
            marketCap: 500000000000
        },
        {
            name: "Axis Bank",
            ltp: 780,
            change: 10,
            changePercent: 1.30,
            volume: 450000,
            marketCap: 240000000000
        },
        {
            name: "Wipro",
            ltp: 410,
            change: -8,
            changePercent: -1.91,
            volume: 550000,
            marketCap: 225000000000
        },
        {
            name: "Asian Paints",
            ltp: 3100,
            change: 45,
            changePercent: 1.47,
            volume: 200000,
            marketCap: 297000000000
        },
        {
            name: "Maruti Suzuki",
            ltp: 7500,
            change: 120,
            changePercent: 1.63,
            volume: 100000,
            marketCap: 226000000000
        },
        {
            name: "Sun Pharma",
            ltp: 860,
            change: -12,
            changePercent: -1.38,
            volume: 350000,
            marketCap: 206000000000
        },
        {
            name: "Bajaj Finance",
            ltp: 6800,
            change: 150,
            changePercent: 2.26,
            volume: 150000,
            marketCap: 410000000000
        },
        {
            name: "Tata Motors",
            ltp: 450,
            change: 18,
            changePercent: 4.17,
            volume: 1200000,
            marketCap: 150000000000
        }
    ];

    useEffect(() => {
        filterWatchlist();
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

    const filterWatchlist = () => {
        let filtered = watchlist.filter(stock =>
            stock.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (selectedOption === "Gainers") {
            filtered = filtered.filter(stock => stock.change > 0);
        } else if (selectedOption === "Losers") {
            filtered = filtered.filter(stock => stock.change < 0);
        }

        setFilteredWatchlist(filtered);
    };

    return (
        <div className="watchlist-container">
            <div className="watchlist-header">
                <div className="left-sec">
                    <h1>Watchlist</h1>
                    <div className="watchlist-dropdown">
                        <button className="watchlist-dropdown-toggle" onClick={toggleDropdown}>
                            {selectedOption}<i className="ri-arrow-down-s-line"></i>
                        </button>
                        {isDropdownOpen && (
                            <ul className="watchlist-dropdown-menu">
                                <li><button onClick={() => handleOptionSelect("All stocks")}>All stocks</button></li>
                                <li><button onClick={() => handleOptionSelect("Gainers")}>Gainers</button></li>
                                <li><button onClick={() => handleOptionSelect("Losers")}>Losers</button></li>
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
            <div className="watchlist-list">
                <div className="table-container">
                    <table className="watchlist-table">
                        <thead>
                            <tr>
                                <th>Stock</th>
                                <th>LTP</th>
                                <th>Change</th>
                                <th>% Change</th>
                                <th>Volume</th>
                                <th>Market Cap</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredWatchlist.map((stock, index) => (
                                <tr key={index}>
                                    <td>{stock.name}</td>
                                    <td>₹{stock.ltp.toFixed(2)}</td>
                                    <td className={stock.change >= 0 ? "positive" : "negative"}>
                                        {stock.change >= 0 ? "+" : ""}{stock.change.toFixed(2)}
                                    </td>
                                    <td className={stock.changePercent >= 0 ? "positive" : "negative"}>
                                        {stock.changePercent >= 0 ? "+" : ""}{stock.changePercent.toFixed(2)}%
                                    </td>
                                    <td>{stock.volume.toLocaleString()}</td>
                                    <td>₹{(stock.marketCap / 10000000).toFixed(2)}Cr</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Watchlist;