import { Dispatch } from 'redux'
import { CreateTransactionInputForm, Transaction, TransactionActionTypes, TransactionsActions } from './types'
import ApiService from '../../api/ApiService'
import { RootState } from '@/redux'

export const getTransactionsById = (id: number) => async (dispatch: Dispatch<TransactionsActions>) => {
	dispatch({ type: TransactionActionTypes.GET_TRANSACTION })
	const { data, error } = await ApiService.apiRequest<Transaction>('/transaction', 'GET', { id })
	if(error) {
		dispatch({ type: TransactionActionTypes.TRANSACTION_ERROR, payload: { error: error } })
		return
	}
	if(!data) return
	dispatch({ type: TransactionActionTypes.TRANSACTION_SUCCESS, payload: { transaction: data } })
}

export const getTransactionsList = () => async (dispatch: Dispatch<TransactionsActions>, getState: () => RootState) => {
	dispatch({ type: TransactionActionTypes.GET_TRANSACTION_LIST })
	const { page } = getState().transaction
	const { data, error } = await ApiService.apiRequest<Transaction[]>('/transaction', 'GET', { page })
	if(error) {
		dispatch({ type: TransactionActionTypes.TRANSACTION_LIST_ERROR, payload: { error: error } })
		return
	}
	if(!data) return
	dispatch({ type: TransactionActionTypes.TRANSACTION_LIST_SUCCESS, payload: { transactions: data } })
}

export const getInitialTransactionsList = () => async (dispatch: Dispatch<TransactionsActions>, getState: () => RootState) => {
	dispatch({ type: TransactionActionTypes.CLEAR_TRANSACTION_LIST })
	await getTransactionsList()(dispatch, getState)
}

export const createTransaction = (form: CreateTransactionInputForm) => async (dispatch: Dispatch<TransactionsActions>, getState: () => RootState) => {
	dispatch({ type: TransactionActionTypes.GET_TRANSACTION })
	const { data, error } = await ApiService.apiRequest<Transaction>('/transaction', 'POST', form)
	if(error) {
		dispatch({ type: TransactionActionTypes.TRANSACTION_ERROR, payload: { error: error } })
		return
	}
	if(!data) return
	dispatch({ type: TransactionActionTypes.TRANSACTION_SUCCESS, payload: { transaction: data } })
	await getInitialTransactionsList()(dispatch, getState)
}

// export const updateTransaction = (id: number, form: any) => async (dispatch: Dispatch<TransactionsActions>) => {
//
// }
//
// export const deleteTransaction = (id: number) => async (dispatch: Dispatch<TransactionsActions>) => {
//
// }
