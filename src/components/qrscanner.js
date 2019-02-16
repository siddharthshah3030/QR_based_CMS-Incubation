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
    this.props.handler_qr_data(data)
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      <div className="qr-scanner">
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
        {/* <p style={style} >{this.state.result}</p> */}
      </div>
    );
  }
}
