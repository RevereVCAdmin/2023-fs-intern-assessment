import React, { useEffect, useState } from "react";
import './App.css'

const App = () => {
  const [error, setError] = useState("");
  const [fundData, setFundData] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/funds')
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(data => {
        setFundData(data)
      })
      .catch(err => {
        console.error("Error fetching fund data: ", err)
        setError("Error fetching fund data")
      })
  }, []);

  const locations = [...new Set(fundData.map(fund => fund.location))]

  const filteredData = fundData.filter(fund => {
    if (filters.length === 0) return true;
    return filters.includes(fund.location);
  });

  const displayFundData = filteredData
  .map(fund => {
    return (
      <tr key={fund.id}>
        <td class="col">{fund.id}</td>
        <td class="col">{fund.fundName}</td>
        <td class="col">{fund.location}</td>
      </tr>
    )
  })

  return (
    <div className="body">
      <h1>Funds Information</h1>
      { error ? 
        <p>Error fetching funds data</p>
      :
        <div>
          <div>
            <p>Filter by Location:</p>
            {
              locations.map(loc => (
                <label className="filter">
                  <input
                    type="checkbox"
                    value={loc}
                    checked={filters.includes(loc)}
                    onChange={e => {
                      const checked = e.target.checked;
                      const value = e.target.value;
                      setFilters(oldFilters => 
                        checked
                        ? [...oldFilters, value]
                        : oldFilters.filter(v => v !== value)
                      )
                    }}
                  />
                  {loc}
                </label>
              ))
            }
          </div>
          <table class="table">
            <thead>
              <tr>
                <th class="col">ID</th>
                <th class="col">Fund Name</th>
                <th class="col">Location</th>
              </tr>
            </thead>
            <tbody>
              {displayFundData}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
}

export default App;
