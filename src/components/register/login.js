
import React, { Component } from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
  // this.handlePassword = this.handlePassword.bind(this);
  // this.handleUsername= this.handleUsername.bind(this);

}
 handleClick(event){
     console.log("login button pressed")
        let url = "http://codezilla.tk:8000/api/auth/signup/"
        console.log(this.state)
       let data = {
        username:this.state.username,
        password:this.state.password
        }
        console.log(data)
        // data = {
        //   username : "ghjk",
        //   password : "fgh"
        // }



       fetch("http://codezilla.tk:8000/api/auth/signup/", {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res=>res.json())
        .then(res => console.log(res));


}

handleUsername(event) {
  console.log(event+"D")
  this.setState({username: event.target.value});
}
handlePassword(event) {
  console.log("D")

  this.setState({password: event.target.value});
}
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar             title="Login"
           />
           <TextField
                label="Name"
                margin="normal"
             hintText="Enter your Username"
             floatingLabelText="Username"
             value={this.state.value} onChange={this.handleUsername} 

             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
                label="Password"
                margin="normal"
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               value={this.state.value} onChange={this.handlePassword} 
               Onchange={console.log("field change")}
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
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



