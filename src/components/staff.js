import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";

import Visitor from './visitor/gaurd_visitor'

export default class staff extends Component {
    render() {
        return (
            <div>

                <Switch>
                    <Route path="/staff/visitor/" component={Visitor} />
                    {/* <Route path="/dashboard/code" component={QrCodeValue} />
                    <Route path="/dashboard/rental" component={categoryList} />
                    <Route path="/dashboard/rentlist" component={RentList} /> */}
                </Switch>
            </div>
        )
    }
}
