import React, { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
  // Initialize state for funds data
  const [funds, setFunds] = useState();

  // Fetch funds data
  const getFunds = async () => {
    const res = await fetch("http://localhost:5000/funds");
    const data = await res.json();
    setFunds(data);
  };

  // Fetch funds data on page load
  useEffect(() => {
    getFunds();
  }, []);

  return (
    <div className="App">
      <Header />
      <Body funds={funds} />
    </div>
  );
}

export default App;
