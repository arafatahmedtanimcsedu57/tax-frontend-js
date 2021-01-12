import React from 'react'

import Heading from './../../core/heading'

import Layout from './../../core/layout'

function Dashboard() {
    return (
        <Layout>
            <div className="wrapper--main" style={{
                "marginLeft": "152px",
                "marginRight": "320px"
                // "width": "100%"
            }}>
                <Heading page={"Dashboard"} />
            </div>
        </Layout>
    )
}

export default Dashboard