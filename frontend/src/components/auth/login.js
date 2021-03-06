
import React, { Component } from 'react';
import burl from '../../url';

import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom'

class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  componentWillMount = () => {
    if (localStorage['token']) {
      this.props.history.push('/dashboard/')
    }
  }


  handleClick(event) {
    let data = {
      username: this.state.username,
      password: this.state.password
    }
    console.log(data)

    fetch(burl + "/api/auth/login/", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
      .then(res => {
        if (res.error) {
          this.setState({
            ...this.state,
            error: true
          })// end of setstate
          return
        }
        localStorage.setItem("token", res.token);
        localStorage.setItem("uid", res.id);

        if (res.user === 'Startup Worker') {
          this.props.history.push('/dashboard/visitor/')
        } else {
          this.props.history.push('/staff/')
        }
        console.log(res);
      })
      .catch(function (e) {
        console.log(e); // "oh, no!"
      })
  }





  render() {
    return (
      <div>
        <div>
          <div className="text-center display-4">Welcome!!!</div>
          <div className="text-danger">{this.state.error && "Please check your credentials"}</div>
          <AppBar title="Login"
          />
          <TextField
            inputRef={el => this.he = el}

            label="Name"
            margin="normal"
            hintText="Enter your Username"
            floatingLabelText="Username"
            value={this.state.value}
            onChange={(event, newValue) => {
              this.setState({ username: this.he.value })
            }}
          />
          <br />
          <TextField
            inputRef={el => this.fv = el}
            label="Password"
            margin="normal"
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            value={this.state.value}
            onChange={(event, newValue) => {
              this.setState({ password: this.fv.value })

            }
            }
          />
          <br />
          <div className="text-center mt-3">
            <Button variant="contained" color="primary" onClick={(event) => this.handleClick(event)}>
              Submit
              </Button>
          </div>
        </div>
        <div className="text-center mt-3">
          <span>New user? </span>
          <NavLink to='/signup/'>Signup</NavLink>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);



