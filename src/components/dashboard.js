import React, { Component } from 'react';
import Drawer from './drawer';


class DashBoard extends React.Component {
    constructor(props){
        super(props)
    }
    render() {

      return (
        <div>
            <Drawer/>
        </div>
      );
    }
  }
  export default DashBoard;


