import React, { Component } from 'react';
import Drawer from './drawer';
import RentList from './rentList'

class DashBoard extends React.Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {

      return (
        <div>
            <RentList/>

        </div>
      );
    }
  }
  export default DashBoard;


