import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class menubar extends Component {
    open = false
    componentDidMount = () => {
        this.nav_wrapper = document.querySelector('.nav-wrapper')
    }

    sign_out_handler = (e) => {
        e.preventDefault()

        localStorage.removeItem('token')
        localStorage.removeItem('uid')
        this.props.history.push('/')
    }

    open_menubar_handler = (e,flag) => {
        console.log(this.nav_wrapper);
        if(flag && !this.open){
            return
        }
        if (this.open) {
            this.nav_wrapper.classList.remove('open-nav')
        } else {
            this.nav_wrapper.classList.add('open-nav')
        }
        this.open = !this.open
    }

    render() {
        return (
            <div>
                <nav className="nav-wrapper">
                    <div className="container">
                        <div className="cnav">
                            <NavLink onClick={(e) => this.open_menubar_handler(e,true)} to="/dashboard/visitor/">Visitor</NavLink>
                            <NavLink onClick={(e) => this.open_menubar_handler(e,true)} to="/dashboard/library/">Librarian</NavLink>
                            <NavLink onClick={(e) => this.open_menubar_handler(e,true)} to="/dashboard/caffeteria/">Caffeteria</NavLink>
                            <NavLink onClick={(e) => this.open_menubar_handler(e,true)} onClick={this.sign_out_handler} to="/staff/price/">Signout</NavLink>
                            <button
                                onClick={this.open_menubar_handler}
                                id="mobile_menu_btn">
                                <i className="fa fa-2x fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(menubar)
