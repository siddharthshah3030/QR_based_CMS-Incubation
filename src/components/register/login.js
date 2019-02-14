
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


render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar             title="Login"
           />
           <TextField
                inputRef={el => this.he = el} 

                label="Name"
                margin="normal"
             hintText="Enter your Username"
             floatingLabelText="Username"
             value={this.state.value}
             onChange = {(event,newValue) => {
              this.setState({username:this.he.value})
             }}
             />
           <br/>
             <TextField
              inputRef={el => this.fv = el} 
                label="Password"
                margin="normal"
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               value={this.state.value} 
               onChange = {(event,newValue) => {
                 this.setState({password:this.fv.value})
             
               }
                }
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


