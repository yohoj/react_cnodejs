import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import './App.css';
import Header from './views/components/header/Header';
import Home from './views/pages/home/Home';
import UserInfo from './views/pages/userInfo/UserInfo';

class App extends Component {
  render() {
    return (
        <div className="App">
        <Header />
        <HashRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/userInfo/:userName" component={UserInfo}/>
            </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
