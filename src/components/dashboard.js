import React, { Component } from "react";
import Drawer from "./drawer";
import RentList from "./rentList";
import categoryList from "./categoryList.js";
import Card from "./card.js";
import QrCodeValue from "./qrcode.js";
import QrScanner from "./qrscanner";
import { Switch, Route } from "react-router-dom";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    var style = {
      color: "white",
      fontSize: 200,
      marginTop: 100,
      paddingTop: 100
    };
    return (
      <div>
        <div style={style}>
          {/* <QrCodeValue style={style} /> */}
          <Switch>
            <Route path="/scanner" component={QrScanner} />
            <Route path="/code" component={QrCodeValue} />
          </Switch>
        </div>
      </div>
    );
  }

  //     render() {

  //       return (
  //         <div>
  //         <div  style={{ display: 'inline-flex' }} >
  //             {/* <RentList/> */}
  //             <Card  style={{ alignSelf: 'center' }} />
  //             <Card  style={{ alignSelf: 'center' }}/>

  //         </div>
  // <div>
  // <div  style={{ display: 'inline-flex' }} >
  //             {/* <RentList/> */}
  //             <Card  style={{ alignSelf: 'center' }} />
  //             <Card  style={{ alignSelf: 'center' }}/>

  //         </div>
  // </div>

  //         </div>
  //       );
  //     }
}
export default DashBoard;
