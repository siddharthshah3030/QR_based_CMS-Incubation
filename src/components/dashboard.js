import React, { Component } from "react";
import Drawer from "./drawer";
import RentList from "./rentList";
import categoryList from "./categoryList.js";
import Card from "./card.js";
import QrCodeValue from "./qrcode.js";
import QrScanner from "./qrscanner";
import { Switch, Route, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    var style = {
      color: "white",
      fontSize: 200,
      marginTop: 50,
      paddingTop: 50
    };
    return (
      <div>
        <div >
          {/* <QrCodeValue style={style} /> */}
          <div className="frame">
            <Switch>
              <Route  path="/dashboard/scanner" component={QrScanner} />
              <Route  path="/dashboard/code" component={QrCodeValue} />
              <Route  path="/dashboard/rental" component={categoryList} />
              <Route path="/dashboard/rentlist" component={RentList} />
            </Switch>
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.props.history.push('/dashboard/scanner')}
          >
            Scanner
          </Button>
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
