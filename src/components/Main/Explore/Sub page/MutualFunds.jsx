import React, { useState, useEffect } from 'react';
import "./MutualFunds.css";

const MutualFunds = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All Mutual Funds");
    const [filteredMutualFunds, setFilteredMutualFunds] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const mutualFundsData = [
        { symbol: 'ABCGROWTH', name: 'ABC Growth Fund', category: 'Equity', nav: 45.50, aum: 1000.00, oneYearReturn: 12.5, threeYearReturn: 8.7 },
        { symbol: 'XYZBALANCED', name: 'XYZ Balanced Fund', category: 'Hybrid', nav: 30.25, aum: 750.50, oneYearReturn: 8.2, threeYearReturn: 7.1 },
        { symbol: 'PQRDEBT', name: 'PQR Debt Fund', category: 'Debt', nav: 20.75, aum: 500.25, oneYearReturn: 6.8, threeYearReturn: 6.5 },
        { symbol: 'LMNINDEX', name: 'LMN Index Fund', category: 'Index', nav: 50.00, aum: 1500.00, oneYearReturn: 10.5, threeYearReturn: 9.2 },
        { symbol: 'EFGSMALLCAP', name: 'EFG Small Cap Fund', category: 'Small Cap', nav: 35.75, aum: 300.50, oneYearReturn: 15.2, threeYearReturn: 11.8 },
        { symbol: 'RSTDIVIDEND', name: 'RST Dividend Yield Fund', category: 'Equity', nav: 40.50, aum: 600.75, oneYearReturn: 9.8, threeYearReturn: 8.5 },
        { symbol: 'UVWSECTOR', name: 'UVW Sector Fund', category: 'Sector', nav: 55.25, aum: 400.00, oneYearReturn: 14.5, threeYearReturn: 10.2 },
        { symbol: 'IJKGLOBAL', name: 'IJK Global Fund', category: 'International', nav: 60.00, aum: 1200.50, oneYearReturn: 11.2, threeYearReturn: 9.8 },
    ];

    useEffect(() => {
        filterMutualFunds();
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

    const filterMutualFunds = () => {
        let filtered = mutualFundsData;

        if (selectedOption !== "All Mutual Funds") {
            filtered = filtered.filter(fund => fund.category === selectedOption);
        }

        if (searchTerm) {
            filtered = filtered.filter(fund =>
                fund.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                fund.symbol.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredMutualFunds(filtered);
    };

    return (
        <div className="mutual-funds-container">
            <div className="mutual-funds-header">
                <div className="left-sec">
                    <h1>Mutual Funds</h1>
                    <div className="mutual-funds-dropdown">
                        <button className="mutual-funds-dropdown-toggle" onClick={toggleDropdown}>
                            {selectedOption}<i className="ri-arrow-down-s-line"></i>
                        </button>
                        {isDropdownOpen && (
                            <ul className="mutual-funds-dropdown-menu">
                                <li><button onClick={() => handleOptionSelect("All Mutual Funds")}>All Mutual Funds</button></li>
                                <li><button onClick={() => handleOptionSelect("Equity")}>Equity</button></li>
                                <li><button onClick={() => handleOptionSelect("Debt")}>Debt</button></li>
                                <li><button onClick={() => handleOptionSelect("Hybrid")}>Hybrid</button></li>
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
            <div className="mutual-funds-list">
                <div className="table-container">
                    <table className="mutual-funds-table">
                        <thead>
                            <tr>
                                <th>Symbol</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>NAV</th>
                                <th>AUM</th>
                                <th>1Y Return</th>
                                <th>3Y Return</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMutualFunds.map((fund) => (
                                <tr key={fund.symbol}>
                                    <td>{fund.symbol}</td>
                                    <td>{fund.name}</td>
                                    <td>{fund.category}</td>
                                    <td>₹{fund.nav.toFixed(2)}</td>
                                    <td>₹{fund.aum.toFixed(2)}Cr</td>
                                    <td className={fund.oneYearReturn >= 0 ? "positive" : "negative"}>
                                        {fund.oneYearReturn.toFixed(2)}%
                                    </td>
                                    <td className={fund.threeYearReturn >= 0 ? "positive" : "negative"}>
                                        {fund.threeYearReturn.toFixed(2)}%
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

export default MutualFunds;
