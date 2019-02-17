import React, { Component } from 'react'
import burl from '../../url'

export default class ucafe_history extends Component {
    state = {
        orders: []
    }

    componentDidMount = () => {
        fetch(burl + `/api/cafe/history/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    ...this.state,
                    orders: res
                })// end of setstate
            })
            .catch(function (e) {
                console.log(e); // "oh, no!"
            })
    }


    render() {
        return (
            <div>
                <h3>History</h3>
                <table className='table table-stripped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Total</th>
                            <th>Received</th>
                            <th>QR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map(ele => (
                            <tr key={ele.id}>
                                <td>{ele.id}</td>
                                <td>{ele.items.length}</td>
                                <td>{ele.delivered ? 'True' : 'False'}</td>
                                <td>
                                    {!ele.delivered ? <button
                                        onClick={() => this.props.history.push({
                                            pathname: '/qr/',
                                            state: { qr: ele.id }
                                        })}
                                        className="btn btn-primary">
                                        QRcode
                                    </button> : '-'}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
