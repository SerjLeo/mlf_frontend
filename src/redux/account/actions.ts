import { Dispatch } from 'redux'
import { Account, AccountActions, AccountActionTypes } from './types'
import ApiService from '../../api/ApiService'
import { AlertActions, AlertActionTypes } from '../alerts/types'
import { RootState } from '../index'

export const getInitialAccounts = () => async (dispatch: Dispatch<AccountActions|AlertActions>, getState: () => RootState) => {
	dispatch({ type: AccountActionTypes.CLEAR_ACCOUNT_LIST })
	const { page } = getState().account
	const { data, error } = await ApiService.apiRequest<Account[]>('/account', 'GET')
	if(error) {
		dispatch({ type: AlertActionTypes.ERROR, payload: { msg: error } })
		return
	}
	if(!data) return
	dispatch({ type: AccountActionTypes.GET_ACCOUNT_LIST, payload: {
		accounts: data,
		page: page+1,
		isFinished: data.length === 0
	} })
}

export const uploadAccounts = () => async (dispatch: Dispatch<AccountActions|AlertActions>, getState: () => RootState) => {
	const { page, finishLoading } = getState().account
	if(finishLoading) return
	const { data, error } = await ApiService.apiRequest<Account[]>('/account', 'GET', { page })
	if(error) {
		dispatch({ type: AlertActionTypes.ERROR, payload: { msg: error } })
		return
	}
	if(!data) return
	dispatch({ type: AccountActionTypes.GET_ACCOUNT_LIST, payload: {
		accounts: data,
		page: page+1,
		isFinished: data.length === 0
	} })
}