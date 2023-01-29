import { AccountState, AccountActionTypes, AccountActions } from './types'
import AccountStateFactory from './store'

const initialState: AccountState = AccountStateFactory()

const accountReducer = (state = initialState, action: AccountActions): AccountState => {
	switch (action.type) {
	case AccountActionTypes.ACCOUNT_LIST_LOADING:
		return { ...state, loading: true }
	case AccountActionTypes.GET_ACCOUNT_LIST:
		return {
			...state,
			loading: false,
			accounts: action.payload.accounts,
			page: action.payload.page,
			finishLoading: action.payload.isFinished
		}
	case AccountActionTypes.GET_ACCOUNT:
		return { ...state, loading: false, selectedAccount: action.payload.account }
	case AccountActionTypes.CLEAR_ACCOUNT_LIST:
		return { ...state, accounts: [], page: 1, finishLoading: false }
	default:
		return state
	}
}

export default accountReducer
