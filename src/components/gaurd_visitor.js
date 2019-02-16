import React, { Component } from 'react'

import QrScanner from './qrscanner'
import burl from '../url'

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
            <div className='gaurd'>
                <div className="row">
                    <div className="col-md-6">
                        {this.state.qrcode_active &&
                            <QrScanner handler_qr_data={this.handler_qr_data} />
                        }
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h3 className='text-center'>Person details</h3>
                            <div className="mt-2 vhead">UserId:</div>
                            <div className="mt-2 vhead">Username:</div>
                            <div className="mt-2 vhead">Phone:</div>
                            <div className="mt-2 vhead">Email:</div>
                            <div className="mt-2 vhead">Created_on:</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
