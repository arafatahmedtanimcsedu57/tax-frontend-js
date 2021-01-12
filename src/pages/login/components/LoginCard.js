import React, { useState } from 'react'

import Input from './../../../core/input'
import Button from './../../../core/button'
import Card from './../../../core/card'
import Msg from './../../../core/msg'

import { loginUser } from './../../../action/auth.action.js'
import store from './../../../store'

import brand_logo_image from './../images/brand_logo.png'

function LoginCard(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [state, dispatch] = store()

    const { auth } = state
    const { error } = auth

    const handleEmail = (user_email) => setEmail(user_email)
    const handlePassword = (user_password) => setPassword(user_password)

    async function handleLogin(e) {
        e.preventDefault()
        let payload = { email, password }
        try {
            //loginUser action makes the request and handles all the neccessary state changes
            let response = await loginUser(dispatch, payload)
            console.log(response)
            if (!response) {
                console.log('none')
                return
            }
            if (response) {
                console.log(response)
                props.history.push('/')
            }
            console.log(response)
            // if (response.role === "2") props.history.push("/admin-action")
        } catch (error) {
            console.log(error)
        }
    }


    // create login card
    const getLoginCardHeader = () => <>
        <img className="login_image" src={brand_logo_image} alt="login" />
    </>
    const getLoginCardBody = () => <>
        <div className="login-input-wrapper">
            <label>
                Your work email address
            </label>
            <Input
                type="text"
                handleChange={handleEmail}
                classNameMod='login'
                name='email'
                placeholder='Please enter your work email address...'
            />
        </div>

        <div className="login-input-wrapper">
            <label>
                Password
            </label>
            <Input
                type="password"
                handleChange={handlePassword}
                classNameMod='login'
                name='password'
                placeholder='Enter your password...'
            />
        </div>
        {error &&
            <div className="login-input-wrapper">
                <Msg classNameMod="error">
                    <span>
                        {error}
                    </span>
                </Msg>
            </div>}
    </>
    const getLoginCardFooter = () =>
        <div className="login-button-wrapper">
            <Button
                handleClick={handleLogin}
                classNameMod="login"
            >
                <span>Login</span>
            </Button>
        </div>

    return (
        <Card
            header={getLoginCardHeader}
            body={getLoginCardBody}
            footer={getLoginCardFooter}
            classNameMod="login"
        />
    )
}

export default LoginCard