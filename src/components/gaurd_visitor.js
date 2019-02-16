import React, { Component } from 'react'

import QrScanner from './qrscanner'
import burl from '../url'

export default class gaurd_visitor extends Component {
    state = {
        qrcode_active: true,
    }

    handler_qr_data = (data) => {
        if (data) {
            this.setState({
                ...this.state,
                qrcode_active: false,
                uid: data
            })// end of setstate


        }
    }

    visit_handler = (route) => {
        let token = localStorage['token']
        console.log(token)

        fetch(burl + `/api/visitors/${route}/`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: JSON.stringify({
                vid: this.state.uid
            })
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    ...this.state,
                    ...res,
                    time: Date(res.time).toString().slice(0,15),
                    qrcode_active: true
                })// end of setstate
            })
            .catch(function (e) {
                console.log(e); // "oh, no!"
            })
    }

    render() {
        return (
            <div className='gaurd container'>
                <div className="row">
                    <div className="col-md-6">
                        <div className="gaurd_qr_scanner">
                            {this.state.qrcode_active &&
                                <QrScanner handler_qr_data={this.handler_qr_data} />
                            }
                        </div>
                        {!this.state.qrcode_active &&
                            <div>
                                <button
                                    onClick={() => this.visit_handler('enter')}
                                    id="gaurd_scan btn btn-success">Enter</button>
                                <button
                                    onClick={() => this.visit_handler('exit')}
                                    id="gaurd_scan btn btn-default">Exit</button>
                            </div>
                        }
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h3 className='text-center'>Person details</h3>
                            <div className="mt-2 vhead">Enter/exit: {this.state.enter_r_exit}</div>
                            <div className="mt-2 vhead">UserId: {this.state.visitor_id}</div>
                            <div className="mt-2 vhead">Username: {this.state.visitor_name}</div>
                            <div className="mt-2 vhead">Time: {this.state.time}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
