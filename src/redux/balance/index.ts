import { BalanceState, BalanceActionTypes, BalanceActions } from './types'
import BalanceStateFactory from './store'

const initialState: BalanceState = BalanceStateFactory()

const balanceReducer = (state = initialState, action: BalanceActions): BalanceState => {
	switch (action.type) {
	case BalanceActionTypes.GET_TOTAL_BALANCES:
		return { ...state, totalBalances: action.payload.balances }
	default:
		return state
	}
}

export default balanceReducer
