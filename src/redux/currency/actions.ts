import { Dispatch } from 'redux'
import { CurrencyActions, CurrencyActionTypes, Currency } from './types'
import { AlertActions, AlertActionTypes } from '../alerts/types'
import ApiService from '../../api/ApiService'

export const getCurrenciesList = () => async (dispatch: Dispatch<CurrencyActions|AlertActions>) => {
	dispatch({ type: CurrencyActionTypes.CURRENCY_LOADING })
	const { data, error } = await ApiService.apiRequest<Currency[]>('/currency', 'GET')
	if(error) {
		dispatch({ type: AlertActionTypes.ERROR, payload: { msg: error } })
		return
	}
	if(!data) return
	dispatch({ type: CurrencyActionTypes.GET_CURRENCY_LIST, payload: { currencies: data } })
}