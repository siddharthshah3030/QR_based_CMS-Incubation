import React, { Component } from 'react'
import Qrcode from './qrcode'

export default class dashboard_code extends Component {
    state = {
        uid: ''
    }

    componentDidMount = () => {
        let uid = localStorage['uid']
        console.log(uid)
        this.setState({
            ...this.state,
            uid: uid
        })// end of setstate
    }

    render() {
        return (
            <div>
                <div className="dashboard-qr-code">
                    <Qrcode qrvalue={this.state.uid} />
                </div>
            </div>
        )
    }
}
