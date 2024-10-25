import React, { useState, useEffect } from 'react';
import "./Transactions.css";

const Transactions = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All transactions");
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const transactions = [
        {
            id: 1,
            type: "Buy",
            stock: "Reliance Industries",
            quantity: 10,
            price: 2200,
            date: "2023-06-01",
            total: 22000
        },
        {
            id: 2,
            type: "Sell",
            stock: "TCS",
            quantity: 5,
            price: 3300,
            date: "2023-05-28",
            total: 16500
        },
        {
            id: 3,
            type: "Buy",
            stock: "HDFC Bank",
            quantity: 15,
            price: 1450,
            date: "2023-05-25",
            total: 21750
        },
        {
            id: 4,
            type: "Buy",
            stock: "Infosys",
            quantity: 20,
            price: 1350,
            date: "2023-05-20",
            total: 27000
        },
        {
            id: 5,
            type: "Sell",
            stock: "Bharti Airtel",
            quantity: 30,
            price: 620,
            date: "2023-05-15",
            total: 18600
        },
        {
            id: 6,
            type: "Buy",
            stock: "ITC",
            quantity: 50,
            price: 275,
            date: "2023-05-10",
            total: 13750
        },
        {
            id: 7,
            type: "Sell",
            stock: "Sun Pharma",
            quantity: 18,
            price: 860,
            date: "2023-05-05",
            total: 15480
        },
        {
            id: 8,
            type: "Buy",
            stock: "Bajaj Finance",
            quantity: 6,
            price: 6800,
            date: "2023-05-01",
            total: 40800
        },
        {
            id: 9,
            type: "Sell",
            stock: "Tata Motors",
            quantity: 35,
            price: 450,
            date: "2023-04-28",
            total: 15750
        },
        {
            id: 10,
            type: "Buy",
            stock: "Asian Paints",
            quantity: 2,
            price: 3100,
            date: "2023-04-25",
            total: 6200
        }
    ];

    useEffect(() => {
        filterTransactions();
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

    const filterTransactions = () => {
        let filtered = transactions;

        if (selectedOption !== "All transactions") {
            filtered = filtered.filter(transaction => transaction.type === selectedOption);
        }

        if (searchTerm) {
            filtered = filtered.filter(transaction =>
                transaction.stock.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredTransactions(filtered);
    };

    return (
        <div className="transactions-container">
            <div className="transactions-header">
                <div className="left-sec">
                    <h1>Transactions</h1>
                    <div className="transactions-dropdown">
                        <button className="transactions-dropdown-toggle" onClick={toggleDropdown}>
                            {selectedOption}<i className="ri-arrow-down-s-line"></i>
                        </button>
                        {isDropdownOpen && (
                            <ul className="transactions-dropdown-menu">
                                <li><button onClick={() => handleOptionSelect("All transactions")}>All transactions</button></li>
                                <li><button onClick={() => handleOptionSelect("Buy")}>Buy</button></li>
                                <li><button onClick={() => handleOptionSelect("Sell")}>Sell</button></li>
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
            <div className="transactions-list">
                <div className="table-container">
                    <table className="transactions-table">
                        <thead>
                            <tr>
                                <th>Type</th>
                                <th>Stock</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredTransactions.map((transaction) => (
                                <tr key={transaction.id}>
                                    <td className={transaction.type.toLowerCase()}>{transaction.type}</td>
                                    <td>{transaction.stock}</td>
                                    <td>{transaction.quantity}</td>
                                    <td>₹{transaction.price.toFixed(2)}</td>
                                    <td>{transaction.date}</td>
                                    <td>₹{transaction.total.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Transactions;