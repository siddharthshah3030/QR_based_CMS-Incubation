
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

}
 handleClick(event){
     console.log("login button pressed")
        let url = "http://13.233.216.255:7000/api/auth/signup/"
       let data = {
        "email":this.state.username,
        "password":this.state.password
        }
        fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(
                response => response.json(),
            console.log(JSON.stringify())
                
            
            
        ) // parses response to JSON
       .catch(error => console.error(error));
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



