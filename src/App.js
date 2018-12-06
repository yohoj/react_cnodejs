import React, { Component } from 'react';
import './App.css';
import Header from './views/components/header/Header';
import Home from './views/pages/home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
