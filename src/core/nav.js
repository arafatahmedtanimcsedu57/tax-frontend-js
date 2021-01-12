import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import store from './../store'

import { logout } from './../action/auth.action.js'

import Button from './button'

import brand_logo_image from './../images/brand_logo.png'
import dashboard_image from './../images/dashboard.svg'
import return_register_image from './../images/return_register.svg'
import user_actios_image from './../images/user_actions.svg'

import './../styles/nav.style.css'

function Nav() {
    let user = localStorage.getItem("currentUser")
        ? JSON.parse(localStorage.getItem("currentUser"))
        : null

    const [state, dispatch] = store()
    const [show_actions, setShowActions] = useState(false)

    const showActions = () => setShowActions(!show_actions)
    return (
        <div className="nav nav--bar">
            <div className="nav__items">
                <div className="brand-logo-container">
                    <img src={brand_logo_image} className="brand-logo" />
                </div>


                <NavLink
                    exact
                    to={{
                        pathname: "/",
                    }}
                    className="link-container"
                    activeClassName='link-container--active'
                >
                    <img src={dashboard_image} alt="dashbaord" />
                    <div className="link-text">Dashboard</div>
                </NavLink>


                <NavLink
                    to={{
                        pathname: "/return-register",
                    }}
                    className="link-container"
                    activeClassName='link-container--active'
                >
                    <img src={return_register_image} alt="return register" />
                    <div className="link-text">Return Register</div>
                </NavLink>

            </div>
            {user && <div className="user-actions">
                <div className="user-info">
                    {user && user.fullName[0].toUpperCase()}
                </div>

                <Button
                    handleClick={showActions}
                    classNameMod="user-action"
                >
                    <img src={user_actios_image} alt="actions" />
                </Button>
                {show_actions &&
                    <div className="actions">< NavLink
                        onClick={() => {
                            logout(dispatch)
                            // props.history.push('/login')
                            return
                        }}
                        to={{
                            pathname: "/login",
                        }}
                        className="link-container"
                    >
                        <div className="link-text">Sign out</div>
                    </NavLink>
                    </div>}
            </div>}
        </div>
    )
}

export default Nav