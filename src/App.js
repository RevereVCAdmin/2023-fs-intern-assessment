import React, { useState, useEffect } from 'react';
import './FundList.css';

function FundList() {
  const [funds, setFunds] = useState([]);
  const [filteredFunds, setFilteredFunds] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/funds')
      .then(response => response.json())
      .then(data => {
        setFunds(data);
        setFilteredFunds(data);
      })
      .catch(error => console.error(error));
  }, [filteredFunds]);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
    const filtered = funds.filter(fund => fund.location === event.target.value);
    setFilteredFunds(filtered);
  };

  return (
    <div className="container">
      <h1 className="title">2023 Full Stack Developer Intern Assessment</h1>
      <div className="filter-container">
        <label htmlFor="location-filter">Filter By Location:</label>
        <select id="location-filter" value={selectedLocation} onChange={handleLocationChange}>
          <option value="">All</option>
          <option value="New York">New York</option>
          <option value="London">London</option>
          <option value="Tokyo">Tokyo</option>
        </select>
      </div>
      <h2 className="subtitle">List of Funds</h2>
      <ul className="list">
        {filteredFunds.map(fund => (
          <li key={fund.id} className="list-item">
            <div className="fund-name">{fund.fundName}</div>
            <div className="fund-location">{fund.location}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FundList;
