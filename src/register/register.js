import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import axios from 'axios';
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
                                label="First Name"
                                margin="normal"
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
                                label="Last Name"
                                margin="normal"
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
                                label="Email"
                                margin="normal"
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
                                label="Password"
                                margin="normal"
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           {/* <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/> */}
           <Button variant="contained" color="primary"  onClick={(event) => this.handleClick(event)}>
             Submit
            </Button>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Register;


// import Login from './Login';
// class Register extends Component {
// ...
// handleClick(event){
//     var apiBaseUrl = "http://localhost:4000/api/";
//     console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
//     //To be done:check for empty values before hitting submit
//     var self = this;
//     var payload={
//     "first_name": this.state.first_name,
//     "last_name":this.state.last_name,
//     "email":this.state.email,
//     "password":this.state.password
//     }
//     axios.post(apiBaseUrl+'/register', payload)
//    .then(function (response) {
//      console.log(response);
//      if(response.data.code == 200){
//       //  console.log("registration successfull");
//        var loginscreen=[];
//        loginscreen.push(<Login parentContext={this}/>);
//        var loginmessage = "Not Registered yet.Go to registration";
//        self.props.parentContext.setState({loginscreen:loginscreen,
//        loginmessage:loginmessage,
//        buttonLabel:"Register",
//        isLogin:true
//         });
//      }
//    })
//    .catch(function (error) {
//      console.log(error);
//    });
//   }
// }