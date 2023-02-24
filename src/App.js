import React, { useState, useEffect } from 'react';
import './index.css';


function App() {
  const [funds, setFunds] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/funds')
      .then(response => response.json())
      .then(data => {
        setFunds(data);
        setFilteredList(data);
        const uniqueLocations = [...new Set(data.map(fund => fund.location))];
        setSelectedFilter(uniqueLocations[0]);
      });
  }, []);

  useEffect(() => {
    if (selectedFilter !== '') {
      const filteredFunds = funds.filter(fund => fund.location === selectedFilter);
      setFilteredList(filteredFunds);
    } else {
      setFilteredList(funds);
    }
  }, [funds, selectedFilter]);

  const handleFilterChange = event => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div className="body">
      <label>
        Filter by location:&nbsp;
        <select value={selectedFilter} onChange={handleFilterChange}>
          {[...new Set(funds.map(fund => fund.location))].map(location => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </label>
      <ul>
        {filteredList.map(fund => (
          <li key={fund.id}>{fund.fundName}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;