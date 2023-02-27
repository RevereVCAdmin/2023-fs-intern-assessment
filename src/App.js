import React, { useEffect, useState } from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function App() {
  const [funds, setFunds] = useState([])
  const [filteredFunds, setFilteredFunds] = useState([])

  const locations = funds.map(fund => (fund.location))
  const uniqueLocations = [...new Set(locations)];

  useEffect(() => {
    fetchFundData()
  }, [])

  const handleFilterChange = (event, filterValue) => {
    console.log("Filter Value: " + filterValue)
    if (filterValue) {
      setFilteredFunds(funds.filter(fund => fund.location == filterValue))
    }
    else {
      setFilteredFunds(funds)
    }
  }

  const fetchFundData = () => {
    fetch("http://localhost:5000/funds")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setFunds(data)
        setFilteredFunds(data)
      })
    }
  
  return (
    <div className="App">
      <Autocomplete
      disablePortal
      onChange={handleFilterChange}
      id="filter-box"
      options={uniqueLocations}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Filter By Location" />}
      />

      <List>
      {filteredFunds.length > 0 && (       
        filteredFunds.map(fund => (
          <ListItem key={fund.id}>
            <ListItemText primary={fund.fundName} />
          </ListItem>
        ))
      )}
      </List>
    </div>
  );
}

export default App;
