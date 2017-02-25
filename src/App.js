import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Endzone from './Endzone';


class App extends Component {
  render() {
    return (
      <div>
        <Endzone text="Paddle" />
        <Endzone text="Battle" />
      </div>
    )
  }
}

export default App;
