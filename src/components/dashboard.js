import React, { Component } from "react";
import Drawer from "./drawer";
import Rental from "./rental/rentallist.js";
import categoryList from "./categoryList.js";
import Card from "./card.js";
import QrCodeValue from "./qrcode.js";
import QrScanner from "./qrscanner";
import { Switch, Route, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ItemList from "./rental/itemList.js";
class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <div >
          <div className="frame">
            <Switch>
              <Route  path="/dashboard/scanner" component={QrScanner} />
              {/* <Route  path="/dashboard/code" component={QrCodeValue} /> */}
              <Route  path="/dashboard/rental" component={Rental} />
              <Route  path="/dashboard/itemlist" component={ItemList} />
              {/* <Route path="/dashboard/rentlist" component={RentList} /> */}
            </Switch>
          </div>
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
export default withRouter(DashBoard);
