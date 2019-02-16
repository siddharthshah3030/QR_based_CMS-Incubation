import React, { Component } from "react";
import Drawer from "./drawer";
import Rental from "./rental/rentallist.js";
import categoryList from "./categoryList.js";
import Card from "./card.js";
import Dashboard_code from './dashboard_code'
import { Switch, Route, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ItemList from "./rental/itemList.js";
import ItemBook from "./rental/itemBook.js";
import Navbar from './dashboard_navbar'


class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div>
        <div >
          <Navbar />
          <div className="frame">
            <Switch>
              <Route  path="/dashboard/visitor" component={Dashboard_code} />
              <Route path="/dashboard/rental" component={Rental} />
              <Route path="/dashboard/itemlist" component={ItemList} />
              <Route path="/dashboard/itembook" component={ItemBook} />
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
