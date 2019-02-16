import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import burl from '../../url';
// import axios from 'axios';
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      phone:'',
      email:'',
      password:'',
      user_type:""
    }
  }
  handleClick(event){
    let url = burl+"/api/auth/signup/"
    console.log(this.state)
    let data = {
      username:this.state.username,
      password:this.state.password,
      user_type : this.state.user_type,
      phone : this.state.phone,
      email : this.state.email

     }
     console.log(data)
     // data = {
       //   username : "ghjk",
       //   password : "fgh"
       // }
       
       
       
       console.log("login button pressed")
        fetch(burl+"/api/auth/signup/", {
         method: 'post',
         headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(data)
       }).then(res=>res.json())
         .then(res =>{
           if(!res.error)
           localStorage.setItem("token", res.token);
           console.log(res);

           console.log(localStorage.getItem("token"))
         })
         .catch(function(e) {
           console.log(e); // "oh, no!"
         })
       }

  handleChange = event => {
    this.setState({ user_type: event.target.value });
  };
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
                  <TextField
                inputRef={el => this.a = el} 

                label="username"
                margin="normal"
             hintText="Enter your Username"
             floatingLabelText="Username"
             value={this.state.value}
             onChange = {(event,newValue) => {
              this.setState({username:this.a.value})
             }}
             />
           <br/>
           <br/>
           <TextField
                inputRef={el => this.b = el} 

                label="password"
                margin="normal"
             hintText="Enter your password"
             floatingLabelText="password"
             value={this.state.value}
             onChange = {(event,newValue) => {
              this.setState({password:this.b.value})
             }}
             />
           <br/>
           <br/>
           <TextField
                inputRef={el => this.c = el} 

                label="email"
                margin="normal"
             hintText="Enter your email"
             floatingLabelText="email"
             value={this.state.value}
             onChange = {(event,newValue) => {
              this.setState({email:this.c.value})
             }}
             />
           <br/>
           <br/>
           <TextField
                inputRef={el => this.d = el} 

                label="phone"
                margin="normal"
             hintText="Enter your phone"
             floatingLabelText="phone"
             value={this.state.value}
             onChange = {(event,newValue) => {
              this.setState({phone:this.d.value})
             }}
             />
             <br/>
                     <FormControl component="fieldset" >
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="Role"
            name="Role"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="Startup Worker" control={<Radio />} label="FemalStartup Worker" />
            <FormControlLabel value="Receptionist" control={<Radio />} label="Receptionist" />
            <FormControlLabel value="Librarian" control={<Radio />} label="Librarian" />
            <FormControlLabel value="Gaurd" control={<Radio />} label="Gaurd" />
            <FormControlLabel value="Cafeteria" control={<Radio />} label="Cafeteria" />
            <FormControlLabel value="Others" control={<Radio />} label="Other" />
            <FormControlLabel
              value="Admin"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl>
           <br/>
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
export default Register;

//localStorage.removeItem('token')

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