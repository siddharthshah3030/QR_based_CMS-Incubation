import React, { Component } from 'react'
import burl from '../../url'

export default class ucafe_checkout extends Component {
    state = {
        menu: [],
        total: 0
    }

    componentDidMount = () => {
        let temp = []
        let pstate = this.props.location.state.menu
        let total = 0
        pstate.forEach(ele => {
            ele.items.forEach(ele2 => {
                console.log(ele2);
                if (ele2.amount) {
                    temp.push(ele2)
                    total += ele2.price
                }
            })
        })

        this.setState({
            ...this.state,
            menu: temp,
            total
        })// end of setstate
    }

    place_order = () => {
        if (this.state.total < 1) {
            this.props.history.goBack()
        }

        fetch(burl + `/api/cafe/place_order/`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            },
            body: JSON.stringify({
                items: this.state.menu
            })
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                this.props.history.push('/dashboard/cafe/previous_orders/')
            })
            .catch(function (e) {
                console.log(e); // "oh, no!"
            })
    }

    render() {
        return (
            <div>
                <h4>Total $ {this.state.total} for {this.state.menu.length} items:</h4>
                <ol>
                    {
                        this.state.menu.map(ele => (
                            <li key={ele.id}>
                                {ele.name}
                                <span className="badge badge-primary mx-2 badge-pill">{ele.amount}</span>
                            </li>
                        ))
                    }
                </ol>
                <button
                    onClick={this.place_order}
                    className="mx-3 btn btn-success">Submit</button>
                <button
                    onClick={() => this.props.history.goBack()}
                    className="mx-3 btn btn-danger">Go back</button>
            </div>
        )
    }
}
