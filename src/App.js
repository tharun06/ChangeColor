import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ColoredBlock from './ColoredBlock.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to MyWorld</h2>
        </div>
        <p className="App-intro">
          Hi People {this.props.name}!
        </p>
        <ColoredBlock ></ColoredBlock>
      </div>
    );
  }
}
export default App;
