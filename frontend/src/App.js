import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./css/App.scss";

import Auth from './components/auth/auth'
import Dashboard from './components/dashboard'
import Staff from './components/staff'
import QRshow from './components/showqr'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/qr/' component={QRshow} />
          <Route path='/staff/' component={Staff} />
          <Route path='/dashboard/' component={Dashboard} />
          <Route path='/' component={Auth} />

        </Switch>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      </div>
    );
  }
}
export default App;
