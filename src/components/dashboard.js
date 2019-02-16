import React from "react";
import QrScanner from "./qrscanner";
import { Switch, Route, withRouter } from "react-router-dom";

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
              {/* <Route  path="/dashboard/rental" component={categoryList} /> */}
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
