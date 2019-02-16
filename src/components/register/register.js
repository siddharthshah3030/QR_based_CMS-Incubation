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
                inputRef={el => this.he = el} 

                label="username"
                margin="normal"
             hintText="Enter your Username"
             floatingLabelText="Username"
             value={this.state.value}
             onChange = {(event,newValue) => {
              this.setState({username:this.he.value})
             }}
             />
           <br/>
           <br/>
           <TextField
                inputRef={el => this.he = el} 

                label="password"
                margin="normal"
             hintText="Enter your password"
             floatingLabelText="password"
             value={this.state.value}
             onChange = {(event,newValue) => {
              this.setState({username:this.he.value})
             }}
             />
           <br/>
           <br/>
           <TextField
                inputRef={el => this.he = el} 

                label="email"
                margin="normal"
             hintText="Enter your email"
             floatingLabelText="email"
             value={this.state.value}
             onChange = {(event,newValue) => {
              this.setState({username:this.he.value})
             }}
             />
           <br/>
           <br/>
           <TextField
                inputRef={el => this.he = el} 

                label="phone"
                margin="normal"
             hintText="Enter your phone"
             floatingLabelText="phone"
             value={this.state.value}
             onChange = {(event,newValue) => {
              this.setState({username:this.he.value})
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