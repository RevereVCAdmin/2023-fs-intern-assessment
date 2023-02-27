import React, { useEffect, useState} from 'react';

function App() {
  const [funds, setFunds] = useState([])
  const [filteredFunds, setFilteredFunds] = useState([])
  const [filter, setFilter] = useState('')


  useEffect(() => {
    fetch('http://localhost:5000/funds/')
      .then(response => response.json())
      .then(data => {
        setFunds(data);
        setFilteredFunds(data);
      })
      .catch(error => console.error(error))
  }, []);

  const handleFilterChange = event => {
    const value = event.target.value;
    setFilter(value);

    const filtered = funds.filter(item =>
      item.location.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFunds(filtered)
  }
  
  return (
    <>
    <h1>Funds</h1>
    Filter by Location: <input type='text' value={filter} onChange={handleFilterChange} />
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Funds</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {filteredFunds.map((item, id) => {
          return (
            <tr key={id}>
              <td>{item.fundName}</td>
              <td>{item.location}</td>
            </tr>
          );
        }
        )}
      </tbody>
    </table>
    </>
  );
}

export default App;
