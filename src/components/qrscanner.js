import React, { Component } from "react";
import QrReader from "react-qr-reader";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: "Not scanner yet"
    };
    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      });
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    var style = {
        color: 'black',
        fontSize: 20,
        marginTop : 50,
        paddingTop : 50
      };
    return (
      <div  style={style} className="qr-scanner">
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
        <p style={style} >{this.state.result}</p>
      </div>
    );
  }
}
