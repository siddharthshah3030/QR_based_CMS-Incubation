import React, { Component } from 'react'

import QrScanner from './qrscanner'
import burl from '../url'

export default class gaurd_visitor extends Component {
    state = {
        qrcode_active: true,
        visitors: []
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

    componentDidMount = () => {
        this.fetch_visitors()
    }

    fetch_visitors = () => {
        console.log('fetch')
        fetch(burl + `/api/visitors/list/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    ...this.state,
                    visitors: res,
                })// end of setstate
            })
            .catch(function (e) {
                console.log(e); // "oh, no!"
            })
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
                    time: Date(res.time).toString().slice(0, 15),
                    qrcode_active: true
                })// end of setstate
            })
            .catch(function (e) {
                console.log(e); // "oh, no!"
            })
        this.fetch_visitors()
    }

    render() {
        return (
            <div className='gaurd container'>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="gaurd_qr_scanner">
                            {this.state.qrcode_active &&
                                <QrScanner handler_qr_data={this.handler_qr_data} />
                            }
                        </div>
                        {!this.state.qrcode_active &&
                            <div className='text-center mt-4'>
                                <button
                                    onClick={() => this.visit_handler('enter')}
                                    id="gaurd_scan" className="btn btn-dark mx-3">Enter</button>
                                <button
                                    onClick={() => this.visit_handler('exit')}
                                    id="gaurd_scan" className=" btn btn-dark mx-3">Exit</button>
                            </div>
                        }
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-center">Person details</h3>
                        <table className="table table-striped mt-3">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Option</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Enter/exit</td>
                                    <td>{this.state.enter_r_exit}</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>UserId</td>
                                    <td>{this.state.visitor_id}</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Username</td>
                                    <td> {this.state.visitor_name}</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Time</td>
                                    <td>{this.state.time}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* history */}
                <h3 className="text-center mt-5">History</h3>
                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Enter/Exit</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.visitors.map((ele, i) => (
                                <tr>
                                    <td>{i + 2}</td>
                                    <td>{ele.enter_r_exit}</td>
                                    <td>{ele.visitor_id}</td>
                                    <td>{ele.visitor_name}</td>
                                    <td>{Date(ele.time).toString().slice(0, 15)}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
