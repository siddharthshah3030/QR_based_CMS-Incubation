import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";

import Visitor from './gaurd_visitor'
import Staff_caf from './staff_caf'
import Navbar from './staff_navbar'

export default class staff extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route path="/staff/caffeteria/" component={Staff_caf} />
                    <Route path="/staff/visitor/" component={Visitor} />
                    <Route path="/staff/" component={Visitor} />
                </Switch>
            </div>
        )
    }
}
