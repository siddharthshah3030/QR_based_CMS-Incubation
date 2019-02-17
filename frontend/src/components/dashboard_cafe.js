import React, { Component } from 'react'
import burl from '../url'
import { NavLink, Switch, Route } from 'react-router-dom'
import Ucafe_menu from './cafe/ucafe_menu'
import Ucafe_history from './cafe/ucafe_history'
import ucafe_history from './cafe/ucafe_history';
import ucafe_menu from './cafe/ucafe_menu';

let curl = '/dashboard/caffeteria/'
export default class dashboard_cafe extends Component {
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
                this.setState({
                    ...this.state,
                    menu: res,
                })// end of setstate
            })
            .catch(function (e) {
                console.log(e); // "oh, no!"
            })
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="mt-3">
                        <NavLink activeClassName='badge-primary'
                            className='mx-3 badge badge-secondary'
                            to={curl}>Menu</NavLink>
                        <NavLink activeClassName='badge-primary'
                            className='mx-3 badge badge-secondary'
                            to={curl+"previous_orders/"}>Previous Orders</NavLink>
                    </div>
                    <div className="mt-5">
                        <Switch>
                            <Route path={curl+'previous_orders/'} component={ucafe_history} />
                            <Route path={curl} component={ucafe_menu} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
