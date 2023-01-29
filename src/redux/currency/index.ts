import { CurrencyState, CurrencyActionTypes, CurrencyActions } from './types'
import CurrencyStateFactory from './store'

const initialState: CurrencyState = CurrencyStateFactory()

const accountReducer = (state = initialState, action: CurrencyActions): CurrencyState => {
	switch (action.type) {
	case CurrencyActionTypes.CURRENCY_LOADING:
		return { ...state, loading: true }
	case CurrencyActionTypes.GET_CURRENCY_LIST:
		return {
			...state,
			currencies: action.payload.currencies
		}
	default:
		return state
	}
}

export default accountReducer
