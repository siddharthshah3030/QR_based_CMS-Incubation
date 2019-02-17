import React, { Component } from 'react'
import QRcode from './qrcode'
import { QRCode } from 'react-qr-svg';

export default class showqr extends Component {
    state = {
        qr: ''
    }
    componentDidMount = () => {
        this.qr = this.props.location.state
        this.setState({
            ...this.state,
            qr: this.qr
        })// end of setstate
    }

    render() {
        return (
            <div className='dashboard-qr-code text-center mt-5'>
                {this.state.qr ? <QRCode qrvalue={this.state.qr} /> : ''}
                <buttton
                    onClick={() => this.props.history.goBack()}
                    className="btn btn-primary mt-3">GoBack</buttton>
            </div>
        )
    }
}
