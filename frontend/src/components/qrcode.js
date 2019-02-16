import React from "react";
import { QRCode } from "react-qr-svg";

class Demo extends React.Component {
    render() {
        let user_id = localStorage['uid']
        return (
            <QRCode
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{ width: 256 }}
                value={this.props.qrvalue}
            />
        );
    }
}
export default Demo