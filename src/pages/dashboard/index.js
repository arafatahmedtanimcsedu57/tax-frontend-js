import React, { useState, useEffect } from 'react'

import { getTaxPayers, addTaxPayer,  deteleTaxPayer } from './../../action/taxPayer.action'
import store from './../../store'

import Heading from './../../core/heading'
import Layout from './../../core/layout'
import EditableGrid from './../../core/editableGrid'
import Msg from './../../core/msg'


function Dashboard() {
    const [state, dispatch] = store()
    const {tax_payers} = state
    const {error, msg} = tax_payers
    const [columns, setColumns] = useState([]);
    const [rows, setRows] = useState([])
    useEffect(()=>{async function handleGet() {
        let rows = await getTaxPayers(dispatch)

        let columns = rows && rows[0] ? await Object.keys(rows[0]).map(key=> ({'name': key, 'title': key.replaceAll('_', ' ')})):[]
        console.log(rows)
        console.log(columns)
        setColumns(columns)
        setRows(rows)
    }handleGet()},[])

    async function commitChanges  ({ added, changed, deleted }){
        let changedRows;
        if (added) {
            const new_tax_payer = await addTaxPayer(dispatch, added[0])
            changedRows = new_tax_payer ?[new_tax_payer].concat(rows): rows
        }
        if (changed) {
            console.log(changed)
            changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
        }
        if (deleted) {
            const delete_new_tin = rows[deleted[0]].new_tin
            let deleted_new_tin = await deteleTaxPayer(dispatch, delete_new_tin)
            changedRows = deleted_new_tin? rows.filter(row => row.new_tin !== deleted_new_tin): rows;
        }
        setRows(changedRows);
    };
    
    return (
        <Layout>
            <div 
                className="wrapper--main" 
                style={{
                    "marginLeft": "152px",
                }}
            >
                <Heading page={"Dashboard"} />
                <div 
                    className="wrapper--table"
                    style={{
                        'padding': '24px',
                        'overflow': 'auto',
                        'display': 'flex',
                        'flexWrap':'wrap'
                    }}
                >
                    <div 
                        className="table-container" 
                        // style={{'maxWidth': 'calc(100% - 30px)'}}
                    >
                        {error &&   
                        <Msg classNameMod="error">
                            <span>
                                {msg}
                            </span>
                        </Msg>}
                        <EditableGrid
                            rows={rows} 
                            columns={columns} 
                            commitChanges={commitChanges} 
                            leftFixed={['new_tin']}
                            rules={[  'new tin have to be unique',
                            `tin date format "YYYY-MM-DD"`,
                            'contract email addr have to be unique',
                            'contract telephone have to be unique']} 
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard