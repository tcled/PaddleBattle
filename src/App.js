import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Endzone from './Endzone';


class App extends Component {
  render() {
    return (
      <div className="background">
        <Endzone text="Paddle" side="left" />
        <Endzone text="Battle" side="right" />
      </div>
    )
  }
}

export default App;
