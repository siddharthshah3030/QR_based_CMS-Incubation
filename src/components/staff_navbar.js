import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class menubar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <div className='nnavbar'>
                            <div>

                            </div>
                            <div>
                                
                            </div>
                            <div className='logout-btn text-primary'>
                                <i className="fa fa-sign-out"></i>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
