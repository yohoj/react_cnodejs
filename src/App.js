import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import Header from './views/components/header/Header';
import Home from './views/pages/home/Home';
import UserInfo from './views/pages/userInfo/UserInfo';
import Content from './views/pages/content/Content';
import Login from './views/pages/login/Login';
import 'antd/dist/antd.css';
library.add(faStroopwafel,fab);
class App extends Component {
  render() {
    return (
        <div className="App">
            <HashRouter>
              
                <div>
                  <Header />
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/user/:userName" component={UserInfo}/>
                    <Route path="/content/:id" component={Content}/>
                </div>
            </HashRouter>
      </div>
    );
  }
}


export default App;
