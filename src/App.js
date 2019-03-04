import React, { Component } from 'react';
import Restaurants from './Components/Restaurants/Restaurants';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Restaurants/>
      </div>
    );
  }
}

export default App;
