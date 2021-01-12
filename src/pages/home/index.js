import React from 'react'
import { Link } from 'react-router-dom'

import Layout from './../../core/layout'

import store from './../../store'

import './home.style.css'
import './../../styles/link.style.css'

import home_banner_image from './images/home_banner.svg'

export default function Home() {

    const [state] = store()
    const { auth } = state
    const { userDetails } = auth

    return (
        <Layout>
            <div className="container container--home">
                Home
            </div>
        </Layout>
    )

}