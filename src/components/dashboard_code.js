import React, { Component } from 'react'
import Qrcode from './qrcode'

export default class dashboard_code extends Component {
    render() {
        let userid = localStorage['uid']
        console.log(userid);
        
        return (
            <div>
                <Qrcode />
            </div>
        )
    }
}
