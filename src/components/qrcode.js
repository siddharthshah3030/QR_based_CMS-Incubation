import React, { Component } from 'react';
var QRCode = require('qrcode.react');

class QRcode extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        let QR = "http://facebook.github.io/react/"

      return (
        <QRCode value={QR} />
      );
    }
  }
  export default QRcode;


