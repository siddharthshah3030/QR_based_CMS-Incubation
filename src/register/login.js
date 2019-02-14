
import React, { Component } from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'user',
  password:''
  }
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
                     label="Name"
                     margin="normal"

             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
                     label="Password"
                     margin="normal"
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             {/* <RaisedButton variant="contained" color="primary" label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/> */}
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
export default Login;



// handleClick(event){
//     var apiBaseUrl = "http://localhost:4000/api/";
//     var self = this;
//     var payload={
//     "email":this.state.username,
//     "password":this.state.password
//     }
//     axios.post(apiBaseUrl+'login', payload)
//     .then(function (response) {
//     console.log(response);
//     if(response.data.code == 200){
//     console.log("Login successfull");
//     var uploadScreen=[];
//     uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
//     self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
//     }
//     else if(response.data.code == 204){
//     console.log("Username password do not match");
//     alert("username password do not match")
//     }
//     else{
//     console.log("Username does not exists");
//     alert("Username does not exist");
//     }
//     })
//     .catch(function (error) {
//     console.log(error);
//     });
//     }