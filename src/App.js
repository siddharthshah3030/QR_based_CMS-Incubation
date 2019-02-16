import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./css/App.scss";

import Auth from './components/auth/auth'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' component={Auth} />

        </Switch>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"></link>
      </div>
    );
  }
}
export default App;
