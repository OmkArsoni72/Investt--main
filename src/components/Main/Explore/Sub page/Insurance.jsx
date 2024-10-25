import React, { useState, useEffect } from 'react';
import "./Insurance.css";

const Insurance = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("All Insurance");
    const [filteredInsurance, setFilteredInsurance] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const insuranceData = [
        { id: 1, name: 'Life Insurance', provider: 'ABC Insurance', premium: 1000, coverage: 100000, type: 'Term' },
        { id: 2, name: 'Health Insurance', provider: 'XYZ Health', premium: 500, coverage: 50000, type: 'Comprehensive' },
        { id: 3, name: 'Auto Insurance', provider: 'Car Protect', premium: 300, coverage: 25000, type: 'Full Coverage' },
        { id: 4, name: 'Home Insurance', provider: 'Safe Home Co.', premium: 800, coverage: 200000, type: 'Property' },
        { id: 5, name: 'Travel Insurance', provider: 'Globe Trotter', premium: 150, coverage: 10000, type: 'Short-term' },
        { id: 6, name: 'Disability Insurance', provider: 'Secure Future', premium: 400, coverage: 75000, type: 'Long-term' },
        { id: 7, name: 'Pet Insurance', provider: 'Paw Protector', premium: 50, coverage: 5000, type: 'Accident & Illness' },
        { id: 8, name: 'Dental Insurance', provider: 'Bright Smile', premium: 75, coverage: 2000, type: 'Preventive' },
    ];

    useEffect(() => {
        filterInsurance();
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

    const filterInsurance = () => {
        let filtered = insuranceData;

        if (selectedOption !== "All Insurance") {
            filtered = filtered.filter(insurance => insurance.type.includes(selectedOption));
        }

        if (searchTerm) {
            filtered = filtered.filter(insurance =>
                insurance.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                insurance.provider.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredInsurance(filtered);
    };

    return (
        <div className="insurance-container">
            <div className="insurance-header">
                <div className="left-sec">
                    <h1>Insurance</h1>
                    <div className="insurance-dropdown">
                        <button className="insurance-dropdown-toggle" onClick={toggleDropdown}>
                            {selectedOption}<i className="ri-arrow-down-s-line"></i>
                        </button>
                        {isDropdownOpen && (
                            <ul className="insurance-dropdown-menu">
                                <li><button onClick={() => handleOptionSelect("All Insurance")}>All Insurance</button></li>
                                <li><button onClick={() => handleOptionSelect("Life")}>Life</button></li>
                                <li><button onClick={() => handleOptionSelect("Health")}>Health</button></li>
                                <li><button onClick={() => handleOptionSelect("Auto")}>Auto</button></li>
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
            <div className="insurance-list">
                <div className="table-container">
                    <table className="insurance-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Provider</th>
                                <th>Premium</th>
                                <th>Coverage</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredInsurance.map((insurance) => (
                                <tr key={insurance.id}>
                                    <td>{insurance.name}</td>
                                    <td>{insurance.provider}</td>
                                    <td>₹{insurance.premium.toFixed(2)}</td>
                                    <td>₹{insurance.coverage.toFixed(2)}</td>
                                    <td>{insurance.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Insurance;
