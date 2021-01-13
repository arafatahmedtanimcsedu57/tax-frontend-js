import { combineReducers } from 'redux'

import taxPayerReducer from './taxPayer.reducer'
import authReducer from './auth.reducer'

export default combineReducers({
    tax_payer: taxPayerReducer,
    auth: authReducer
});