import React, { Component } from 'react'
import burl from '../url'
import { NavLink, Switch, Route } from 'react-router-dom'
import Ucafe_menu from './cafe/ucafe_menu'
import ucafe_history from './cafe/ucafe_history'
import ucafe_menu from './cafe/ucafe_menu';
import ucafe_checkout from './cafe/ucafe_checkout';

let curl = '/dashboard/cafe/'
export default class dashboard_cafe extends Component {
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
                            <Route path={curl+'checkout/'} component={ucafe_checkout} />
                            <Route path={curl} component={ucafe_menu} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
