import React from 'react';
import Card from '../card.js' 
import burl from '../../url';


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
  fetch(burl +"/api/resources/list/", {
    method: 'get',
    headers: {
      // 'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Authorization': 'Token ad309027364a277e66eb3bf325e826dadf477704'

    },
  }).then(res=>res.json())
    .then(res =>{
      console.log("fetching data")
      console.log(res);
    })
    .catch(function(e) {
      console.log(e); // "oh, no!"
    })
}

render() {
  var style = {
    // color: "white",
    // fontSize: 200,
    
    // marginTop: 100,
    // paddingTop: 100
  };
  return (
    <div style={style}>>
    <div  style={{ display: 'inline-flex' }} >
    {/* <RentList/> */}
    <Card  style={{ alignSelf: 'center' }} />
    <Card  style={{ alignSelf: 'center' }}/>

</div>

  <br/>
<div  style={{ display: 'inline-flex' }} >
    {/* <RentList/> */}
    <Card  style={{ alignSelf: 'center' }} />
    <Card  style={{ alignSelf: 'center' }}/>

</div>
  
</div>
  )
}
}
export default CategoryList;