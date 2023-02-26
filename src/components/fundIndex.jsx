import { useState, useEffect } from "react";
import FundIndexItem from "./fundIndexItem";
import './FundIndex.css';

function FundIndex() {
  const [funds, setFunds] = useState([]);
  const [filteredFunds, setFilteredFunds] = useState([]);

  useEffect(() => {
    const fetchFunds = async () => {
      const data = await fetch("http://localhost:5000/funds", {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if(data.ok) {
        const parsedData = await data.json();
        setFunds(parsedData);
        setFilteredFunds(parsedData);
      } else {
        alert("Error fetching data")
      }
    }

    fetchFunds();
  }, [])

  const locations = ["See All", ...new Set(funds.map(fund => fund.location))];

  const handleFilterChange = (e) => {
    let result;
    if (e.target.value === 'See All') {
      result = funds;
    } else {
      result = funds.filter(fund => fund.location === e.target.value);
    }
    setFilteredFunds(result);
  }

  return(
    <>
      <div className="fund-index-page">
        <div className="fund-index-header">
          <div className="logo-and-header">
            <img src="../icon.png" id="logo"></img>
            <h1 id="page-header">Available Funds</h1>
          </div>
          <div className="location-filter-container">
            <div className="location-filter-header">
              <h2>Filter by Location</h2>
            </div>
            <div className="dropdown-container">
              <select name="location" id="location-dropdown" onChange={handleFilterChange}>
                {
                  locations.map(location => (
                    <option value={location}>{location}</option>
                  ))
                }
              </select>
            </div>
          </div>
        </div>
        <div className="fund-index-container">
          {filteredFunds?.map(fund => <FundIndexItem fund={fund} key={fund.id} />)}
        </div>
      </div>
    </>
  )
}

export default FundIndex;