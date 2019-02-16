import React, { Component } from 'react'

import QrScanner from '../qrscanner'
import burl from '../../url'

export default class gaurd_visitor extends Component {
    state = {
        qrcode_active: true
    }

    handler_qr_data = (data) => {
        if (data) {
            this.setState({
                ...this.state,
                qrcode_active: false

            })// end of setstate

            let token = localStorage['token']
            console.log(token)

            fetch(burl + "/api/visitors/enter/", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage['token']
                },
                body: JSON.stringify({
                    vid: data
                })
            }).then(res => res.json())
                .then(res => {
                    console.log(res);
                })
                .catch(function (e) {
                    console.log(e); // "oh, no!"
                })
        }
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        {this.state.qrcode_active &&
                            <QrScanner handler_qr_data={this.handler_qr_data} />
                        }
                    </div>
                    <div className="col-md-6">
                        <div className="text-center">
                            user here
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
