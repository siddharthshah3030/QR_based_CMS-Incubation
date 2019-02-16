import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./css/App.scss";

import Auth from './components/auth/auth'
import Dashboard from './components/dashboard'
import Staff from './components/staff'


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/staff/' component={Staff} />
          <Route path='/dashboard/' component={Dashboard} />
          <Route path='/' component={Auth} />

        </Switch>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
      </div>
    );
  }
}
export default App;
