import { Dispatch } from 'redux'
import { BalanceActionTypes, BalanceActions, BalanceOfCurrency } from './types'
import ApiService from '../../api/ApiService'
import { AlertActionTypes, AlertActions } from '../alerts/types'

export const getTotalBalances = () => async (dispatch: Dispatch<BalanceActions|AlertActions>) => {
	const { data, error } = await ApiService.apiRequest<BalanceOfCurrency[]>('/balance/total', 'GET')
	if(error) {
		dispatch({ type: AlertActionTypes.ERROR, payload: { msg: error } })
		return
	}
	if(!data) return
	dispatch({ type: BalanceActionTypes.GET_TOTAL_BALANCES, payload: { balances: data } })
}