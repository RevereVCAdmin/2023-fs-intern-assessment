import React from 'react';

export default class App extends React.Component{
  
  state = {
    data: [],
    initialRender: true,
    filter: ""
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
    
  }


  render() {

    // To reduce calls to the backend, only renders on initial request (refresh page to update list)
    if (this.state.initialRender) {
      fetch("http://localhost:5000/funds")
      .then((response) => response.json())
      .then((response) => this.setState({ data: response}) );
      this.setState( {initialRender: false} );
    }

    return (      
      
      <ol style={{ listStyle: 'square' }}>
        <label>
          Filter (by location):
          <input type="text" onChange={this.handleFilterChange} />
        </label>
        {
      
        this.state.data.filter(item => item.location.toLowerCase().includes(this.state.filter.toLowerCase() ) )
        .map(item => (
          <li key={item.id}>
            <div style = {{ fontSize: 24}}>
              <b>ID:</b> {item.id}, <b>Fund Name:</b> {item.fundName}, <b>Location:</b> {item.location} 
            </div>
          </li>
          
        ))}
      </ol>

    )
  }


}
