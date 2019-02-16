import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";

import Login from './login'
import Signup from './singup'

export default class auth extends Component {
    render() {
        return (
            <div>
                <div className='auth row mx-0'>
                    <div  className='col-md-6 cover-pic' md={6}>
                    </div>
                    <div className='col-md-6 form text-center' md={6}>
                        <Switch>
                            <Route path='/signup/' component={Signup} />
                            <Route path='/' component={Login} />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
