import React, { useState, useEffect } from 'react'

import { getTaxPayers } from './../../action/taxPayer.action'
import store from './../../store'

import Heading from './../../core/heading'
import Layout from './../../core/layout'

function Dashboard() {
    const [state, dispatch] = store()
    const [tax_payers, setTaxPlayers] = useState([])

    useEffect(() => { handleTaxPlayers() }, [])

    async function handleTaxPlayers() {
        let tax_payers = await getTaxPayers(dispatch)
        console.log(tax_payers)
        setTaxPlayers(tax_payers)
    }

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