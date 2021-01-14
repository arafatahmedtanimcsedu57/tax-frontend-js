import axios from 'axios';

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
