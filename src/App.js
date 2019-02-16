import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./css/App.scss";

import Auth from './components/auth/auth'
import Dashboard from './components/dashboard.js'
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     token: false,
  //     loginPage: [],
  //     uploadScreen: []
  //   };
  // }
  // componentWillMount() {
  //   var loginPage = [];
  //   loginPage.push(<Loginscreen parentContext={this} />);
  //   var uploadScreen = [];
  //   uploadScreen.push(<DashBoard parentContext={this} />);
  //   if (localStorage.getItem("token")) {
  //     this.setState({
  //       token: true,
  //       uploadScreen: uploadScreen
  //     });
  //   } else
  //     this.setState({
  //       loginPage: loginPage
  //     });
  // }
  render() {
    return (
      // <div className="App">
      //   {this.state.loginPage}
      //   {this.state.uploadScreen}
      //   <div>
      //     <Drawer />
      //     {/* <DashBoard/> */}
      //   </div>
      // </div>
      <Switch>
        <Route path='/dashboard' component={Dashboard} />

        <Route path='/' component={Auth} />
      </Switch>
    );
  }
}
export default App;
