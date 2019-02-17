import React from "react";
import Rental from "./rental/rentallist.js";
import Dashboard_code from './dashboard_code'
import { Switch, Route, withRouter } from "react-router-dom";
import ItemList from "./rental/itemList.js";
import ItemBook from "./rental/itemBook.js";
import Navbar from './dashboard_navbar'
import Dcafe from './dashboard_cafe'
import Faq from './faq'
import Home from './home'
import Profile from './profile'

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
              <Route path="/dashboard/home" component={Home} />
              <Route path="/dashboard/faq" component={Faq} />
              <Route path="/dashboard/visitor" component={Dashboard_code} />
              <Route path="/dashboard/rental" component={Rental} />
              <Route path="/dashboard/itemlist" component={ItemList} />qas
              <Route path="/dashboard/itembook" component={ItemBook} />
              <Route path="/dashboard/cafe" component={Dcafe} />
              {/* <Route path="/dashboard/rentlist" component={RentList} /> */}
            </Switch>
            {/* <Profile /> */}
          </div>
        </div>
      </div>
    );
  }

}
export default withRouter(DashBoard);
