import axios from 'axios';

const ROOT_URL = 'http://165.22.216.191:3333'

export async function loginUser(dispatch, loginPayload) {
    dispatch({ type: 'REQUEST_LOGIN' });

    try {
        const response = await axios.post(`${ROOT_URL}/auth/login`, {
            ...loginPayload

        }, {
            withCredentials: true,
            xsrfCookieName: 'csrftoken_testtest',
            xsrfHeaderName: 'X-CSRFToken',
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