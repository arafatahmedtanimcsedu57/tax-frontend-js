import {
    GET_TAX_PAYER,
    GET_TAX_PAYER_SUCCESS,
    GET_TAX_PAYER_FAILED,

    ADD_TAX_PAYER,
    ADD_TAX_PAYER_SUCCESS,
    ADD_TAX_PAYER_FAILED,

    UPDATE_TAX_PAYER,
    UPDATE_TAX_PAYER_SUCCESS,
    UPDATE_TAX_PAYER_FAILED,

    DELETE_TAX_PAYER,
    DELETE_TAX_PAYER_SUCCESS,
    DELETE_TAX_PAYER_FAILED
} from './types.js'

const initialState = {
    tax_payers: null,
    loading: false,
    mag: null,
    error: null
}

function taxPayerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TAX_PAYER:
            return {
                ...state,
                loading: true,
            }
        case GET_TAX_PAYER_SUCCESS:
            return {
                ...state,
                tax_payers: action.payload.tax_payers,
                loading: false
            }
        case GET_TAX_PAYER_FAILED:
            return {
                ...state,
                loading: false,
                msg: 'No tax payer found',
                error: true,
            }
        case ADD_TAX_PAYER:
            return {
                ...state,
                loading: true
            }

        case ADD_TAX_PAYER_SUCCESS:
            return {
                ...state,
                tax_payers: state.tax_payers.push(action.payload.tax_payer),
                loading: false
            }
        case ADD_TAX_PAYER_FAILED:
            return {
                ...state,
                loading: false,
                msg: 'Tax Payer add faild',
                error: true
            }
        case UPDATE_TAX_PAYER:
            return {
                ...state,
                loading: true
            }

        case UPDATE_TAX_PAYER_SUCCESS:
            return {
                ...state,
                tax_payers: state.tax_payers.push(action.payload.tax_payer),
                loading: false
            }
        case UPDATE_TAX_PAYER_FAILED:
            return {
                ...state,
                loading: false,
                msg: 'Tax Payer update faild',
                error: true
            }
        case DELETE_TAX_PAYER:
            return {
                ...state,
                loading: true
            }

        case DELETE_TAX_PAYER_SUCCESS:
            return {
                ...state,
                tax_payers: state.tax_payers,// need to update
                loading: false
            }
        case DELETE_TAX_PAYER_FAILED:
            return {
                ...state,
                loading: false,
                msg: 'Tax Payer delete faild',
                error: true
            }
        default:
            return state
    }
}

export default taxPayerReducer