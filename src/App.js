import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import DashBoard from "./components/dashboard";
import "./css/App.css";
import Drawer from "./components/drawer";

import Loginscreen from "./components/loginpage";
import QRCode from "./components/qrcode";
import { Switch, Route } from "react-router-dom";

// injectTapEventPlugin();
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: false,
      loginPage: [],
      uploadScreen: []
    };
  }
  componentWillMount() {
    var loginPage = [];
    loginPage.push(<Loginscreen parentContext={this} />);
    var uploadScreen = [];
    uploadScreen.push(<DashBoard parentContext={this} />);
    if (localStorage.getItem("token")) {
      this.setState({
        token: true,
        uploadScreen: uploadScreen
      });
    } else
      this.setState({
        loginPage: loginPage
      });
  }
  render() {
    
    return (
      <div className="App">
        <div>
          <Drawer />
          {/* <DashBoard/> */}
        </div>
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}
const style = {
  margin: 15
};
export default App;
