import axios from 'axios';

axios.defaults.withCredentials=true;
const ROOT_URL = 'http://localhost:3333'

export async function loginUser(dispatch, loginPayload) {
    dispatch({ type: 'REQUEST_LOGIN' });

    try {
        const response = await axios.post(`${ROOT_URL}/auth/login`, {
            ...loginPayload
        })
        const data = await response.data;

        dispatch({ type: 'LOGIN_SUCCESS', payload: data });
        localStorage.setItem('currentUser', JSON.stringify(data));

        return data;
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: 'User not found' });
        return;
    }

}

export function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
}

export function isAuthenticated() {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('currentUser')) {
        return JSON.parse(localStorage.getItem('currentUser'));
    } else {
        return false;
    }
};