import React from 'react';
import Card from './card.js' 
import burl from '../url';


class CategoryList extends React.Component {
  constructor(props){
    super(props);
    this.state={
    username:'',
    password:''
    }
    // this.handlePassword = this.handlePassword.bind(this);
    // this.handleUsername= this.handleUsername.bind(this);
  
  }

componentWillMount() {
  fetch(burl +"/api/auth/login/", {
    method: 'get',
    headers: {
      // 'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': 'Token ad309027364a277e66eb3bf325e826dadf477704'

    },
  }).then(res=>res.json())
    .then(res =>{
      localStorage.setItem("token", res.token);
      console.log(localStorage.getItem("token"))
      console.log(res.token);
    })
    .catch(function(e) {
      console.log(e.message); // "oh, no!"
    })
}

render() {
  return (
    <div  style={{ display: 'inline-flex' }} >
    {/* <RentList/> */}
    <Card  style={{ alignSelf: 'center' }} />
    <Card  style={{ alignSelf: 'center' }}/>
    <Card  style={{ alignSelf: 'center' }} />
    <Card  style={{ alignSelf: 'center' }}/>

</div>
  )
}
}
export default CategoryList;