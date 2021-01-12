import React from 'react'

import LoginCard from './components/LoginCard'
import FootNote from './components/FootNote'

import bg_top_left_image from './images/bg_top_left.svg'
import bg_top_right_image from './images/bg_top_right.svg'
import bg_bottom_left_image from './images/bg_bottom_left.svg'
import bg_bottom_right_image from './images/bg_bottom_right.svg'

import './login.style.css';

function Login(props) {
    return (
        <div
            className="container container--login"
            style={{ 'backgroundImage': `url(${bg_top_left_image}), url(${bg_top_right_image}), url(${bg_bottom_right_image}), url(${bg_bottom_left_image})` }}
        >
            <LoginCard history={props.history} />

            <FootNote />
        </div>
    );
}

export default Login;