import React from "react";
import { QRCode } from "react-qr-svg";
 
class Demo extends React.Component {
        constructor(props){
          super(props);
          this.state={
          value: "siddharth shah",
        
          }
          // this.handlePassword = this.handlePassword.bind(this);
          // this.handleUsername= this.handleUsername.bind(this);
        
        }
      
    render() {
        var style = {
            color: 'white',
            fontSize: 200,
            marginTop : 50,
            paddingTop : 50
          };
        return (
            <QRCode style={style}
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{ width: 256 }}
                value={this.state.value}
            />
        );
    }
}
export default  Demo