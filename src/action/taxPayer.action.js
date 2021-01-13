import axios from 'axios';

const ROOT_URL = 'http://165.22.216.191:3333'

export async function getTaxPayers(dispatch) {
    dispatch({ type: 'GET_TAX_PAYER' });

    try {
        const user = localStorage.getItem("currentUser")
            ? JSON.parse(localStorage.getItem("currentUser"))
            : null

        const instance = axios.create({
            withCredentials: true,
            baseURL: ROOT_URL
        })
        // instance.get('tax-payer')
        const response = await instance.get(`tax-payer`)
        const data = await response.data;

        dispatch({ type: 'GET_TAX_PAYER_SUCCESS', payload: data });
        return data;
    } catch (error) {
        dispatch({ type: 'GET_TAX_PAYER_FAILED' });
        return;
    }

}
