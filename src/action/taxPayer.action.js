import axios from 'axios';
axios.defaults.withCredentials=true;
const ROOT_URL = 'http://localhost:3333'

export async function getTaxPayers(dispatch) {
    dispatch({ type: 'GET_TAX_PAYER' });

    try {
        const user = localStorage.getItem("currentUser")
            ? JSON.parse(localStorage.getItem("currentUser"))
            : null

        const response = await axios.get(`${ROOT_URL}/tax-payer`, {
            headers: {
                "Authorization": user.token
            }
        })
        const data = await response.data;
        dispatch({ type: 'GET_TAX_PAYER_SUCCESS', payload: data });
        return data;
    } catch (error) {
        dispatch({ type: 'GET_TAX_PAYER_FAILED' });
        return;
    }
}

export async function addTaxPayer(dispatch, new_tax_payer){
    dispatch({type: 'ADD_TAX_PAYER'})
    console.log(new_tax_payer)
    try{
        const user = localStorage.getItem("currentUser")
            ? JSON.parse(localStorage.getItem("currentUser"))
            : null
            const response = await axios.post(`${ROOT_URL}/tax-payer`, {...new_tax_payer, tin_date: new Date(new_tax_payer.tin_date).toISOString()}, {
                headers: {
                    "Authorization": user.token
                }
            })
            
            const data = await response.data;
            dispatch({ type: 'ADD_TAX_PAYER_SUCCESS', payload: data });
            return data;
    }catch (error) {
        dispatch({ type: 'ADD_TAX_PAYER_FAILED' });
        return;
    }
}

export async function deteleTaxPayer(dispatch, new_tin){
    dispatch({type: 'DELETE_TAX_PAYER'})

    try{
        const user = localStorage.getItem("currentUser")
            ? JSON.parse(localStorage.getItem("currentUser"))
            : null
            const response = await axios.delete(`${ROOT_URL}/tax-payer/${new_tin}`, {
                headers: {
                    "Authorization": user.token
                }
            })
            const data = await response.data;
            dispatch({ type: 'DELETE_TAX_PAYER_SUCCESS', payload: data });
            return data;
    } catch (error) {
        dispatch({ type: 'DELETE_TAX_PAYER_FAILED' });
        return;
    }
}
