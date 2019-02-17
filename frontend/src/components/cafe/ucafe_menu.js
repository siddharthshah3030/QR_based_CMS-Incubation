import React, { Component } from 'react'
import burl from '../../url'

export default class ucafe_menu extends Component {
    state = {
        menu: []
    }

    componentDidMount = () => {
        fetch(burl + `/api/cafe/category/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage['token']
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                res.forEach(ele => {
                    ele.items.forEach(ele2 => {
                        ele2.amount = 0
                    })
                })
                this.setState({
                    ...this.state,
                    menu: res,
                })// end of setstate
            })
            .catch(function (e) {
                console.log(e); // "oh, no!"
            })
    }

    update_amount = (i, j, k) => {
        let temp = this.state.menu
        if (temp[i].items[j].amount < 1 && k < 0) {
            return
        }
        temp[i].items[j].amount += k

        this.setState({
            ...this.state,
            menu: temp
        })// end of setstate
    }

    gmenu = (item, i) => {
        // console.log(item);
        let menuname = <h2 className='mt-3'>{item.name}</h2>
        let menuitems = item.items.map((ele, j) => (
            <tr>
                <td>{j + 1}</td>
                <td>{ele.name}</td>
                <td>$ {ele.price}</td>
                <td className='d-flex'>
                    <button
                        onClick={() => this.update_amount(i, j, -1)}
                        className="btn  btn-sm btn-danger mx-3">
                        <i className="fas fa-minus"></i>
                    </button>
                    {this.state.menu[i].items[j].amount}
                    <button
                        onClick={() => this.update_amount(i, j, 1)}
                        className="btn btn-sm btn-success mx-3">
                        <i className="fas fa-plus"></i>
                    </button>
                </td>
            </tr>
        ))
        return (
            <div>
                {menuname}
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                        {menuitems}
                    </tbody>
                </table>
            </div>
        )
    }

    render() {
        let hmenu = this.state.menu.map((ele, i) => this.gmenu(ele, i))

        return (
            <div>
                <div className="text-right">
                    <button
                        onClick={() => this.props.history.push({
                            pathname: '/dashboard/cafe/checkout/',
                            state: this.state
                        })}
                        className="btn btn-primary">
                        <span>Proceed to checkout</span>
                    </button>
                </div>
                {hmenu}
            </div>
        )
    }
}
