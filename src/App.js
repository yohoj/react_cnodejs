import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './views/components/header/Header';
import Home from './views/pages/home/Home';
import UserInfo from './views/pages/userInfo/UserInfo';

class App extends Component {
  render() {
    return (
    <Router>
        <div className="App">
        <Header />
            <Switch> 
                <Route path="/" component={Home}/>
                <Route path="/userInfo" component={UserInfo}/>
            </Switch>
      </div>
    </Router>
      
    );
  }
}

export default App;
