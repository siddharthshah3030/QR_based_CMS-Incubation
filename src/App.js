import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import DashBoard from './components/dashboard'
import './css/App.css';
import Drawer from './components/drawer';

import Loginscreen from './components/loginpage'
import QRCode from './components/qrcode'
// injectTapEventPlugin();
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
        <div>
        <Drawer/>
            {/* <DashBoard/> */}
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default App;