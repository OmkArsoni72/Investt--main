import React, { useState, useEffect } from 'react';
import "./FixedDeposit.css";

const FixedDeposit = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All Banks");
    const [filteredDeposits, setFilteredDeposits] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const fixedDepositData = [
        { id: 1, bank: 'ABC Bank', interestRate: 5.5, tenure: 12, minAmount: 10000, maxAmount: 1000000 },
        { id: 2, bank: 'XYZ Bank', interestRate: 6.0, tenure: 24, minAmount: 5000, maxAmount: 500000 },
        { id: 3, bank: 'PQR Bank', interestRate: 5.75, tenure: 36, minAmount: 25000, maxAmount: 2000000 },
        { id: 4, bank: 'LMN Bank', interestRate: 5.25, tenure: 6, minAmount: 1000, maxAmount: 100000 },
        { id: 5, bank: 'EFG Bank', interestRate: 6.25, tenure: 48, minAmount: 50000, maxAmount: 5000000 },
        { id: 6, bank: 'RST Bank', interestRate: 5.9, tenure: 18, minAmount: 15000, maxAmount: 1500000 },
        { id: 7, bank: 'UVW Bank', interestRate: 6.5, tenure: 60, minAmount: 100000, maxAmount: 10000000 },
        { id: 8, bank: 'IJK Bank', interestRate: 5.8, tenure: 9, minAmount: 5000, maxAmount: 750000 },
    ];

    useEffect(() => {
        filterDeposits();
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

    const filterDeposits = () => {
        let filtered = fixedDepositData;

        if (selectedOption !== "All Banks") {
            switch (selectedOption) {
                case "Top Interest Rates":
                    filtered.sort((a, b) => b.interestRate - a.interestRate);
                    break;
                case "Shortest Tenure":
                    filtered.sort((a, b) => a.tenure - b.tenure);
                    break;
                case "Longest Tenure":
                    filtered.sort((a, b) => b.tenure - a.tenure);
                    break;
                default:
                    break;
            }
        }

        if (searchTerm) {
            filtered = filtered.filter(deposit =>
                deposit.bank.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredDeposits(filtered);
    };

    return (
        <div className="fixed-deposit-container">
            <div className="fixed-deposit-header">
                <div className="left-sec">
                    <h1>Fixed Deposits</h1>
                    <div className="fixed-deposit-dropdown">
                        <button className="fixed-deposit-dropdown-toggle" onClick={toggleDropdown}>
                            {selectedOption}<i className="ri-arrow-down-s-line"></i>
                        </button>
                        {isDropdownOpen && (
                            <ul className="fixed-deposit-dropdown-menu">
                                <li><button onClick={() => handleOptionSelect("All Banks")}>All Banks</button></li>
                                <li><button onClick={() => handleOptionSelect("Top Interest Rates")}>Top Interest Rates</button></li>
                                <li><button onClick={() => handleOptionSelect("Shortest Tenure")}>Shortest Tenure</button></li>
                                <li><button onClick={() => handleOptionSelect("Longest Tenure")}>Longest Tenure</button></li>
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
            <div className="fixed-deposit-list">
                <div className="table-container">
                    <table className="fixed-deposit-table">
                        <thead>
                            <tr>
                                <th>Bank</th>
                                <th>Interest Rate (%)</th>
                                <th>Tenure (months)</th>
                                <th>Min Amount</th>
                                <th>Max Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredDeposits.map((deposit) => (
                                <tr key={deposit.id}>
                                    <td>{deposit.bank}</td>
                                    <td>{deposit.interestRate.toFixed(2)}%</td>
                                    <td>{deposit.tenure}</td>
                                    <td>₹{deposit.minAmount.toLocaleString()}</td>
                                    <td>₹{deposit.maxAmount.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FixedDeposit;
