import React from 'react';
import burl from '../../url';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';

class CategoryList extends React.Component {
  constructor(props){
    super(props);
    this.state={
        data: ""
    }
    // this.handlePassword = this.handlePassword.bind(this);
    // this.handleUsername= this.handleUsername.bind(this);
  
  }

componentWillMount() {
    console.log("making fetch request")
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
    //   console.log(res);
      this.setState({

          data : res
      }
      )
    })
    .catch(function(e) {
        // console.log(burl); // "oh, no!"

      console.log(e); // "oh, no!"
    })
}

render() {
    console.log(this.state.data)
  var style = {
    // color: "white",
    // fontSize: 200,
    
    // marginTop: 100,
    // paddingTop: 100
  };
  var str = JSON.stringify(this.state.dat, null, 4); // (Optional) beautiful indented output.
console.log(this.state.dat); // Logs output to dev tools console.
  // console.log(typeof(this.state.data[0]))


  return (
    <div style={style}>
 <CardGroup>
{/* 
   { this.state.data.forEach(function(element) {
  console.log(element);
})} */}
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>

    </CardGroup>
  
</div>
  )
}
}
export default CategoryList;