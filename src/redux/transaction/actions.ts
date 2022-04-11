import {Dispatch} from "redux";
import {TransactionActionTypes, TransactionsActions} from "./types";
import ApiService from "../../api/ApiService";
import {RootState} from "../index";

export const getTransactionsById = (id: number) => async (dispatch: Dispatch<TransactionsActions>) => {
    dispatch({type: TransactionActionTypes.GET_TRANSACTION})
    const {data, errors} = await ApiService.apiRequest(`/transaction`, 'GET', {id})
    if(errors) {
        dispatch({type: TransactionActionTypes.TRANSACTION_ERROR, payload: { error: errors }})
        return
    }
    dispatch({type: TransactionActionTypes.TRANSACTION_SUCCESS, payload: { transaction: data }})
}

export const getTransactionsList = () => async (dispatch: Dispatch<TransactionsActions>, getState: () => RootState) => {
    dispatch({type: TransactionActionTypes.GET_TRANSACTION_LIST})
    const {page} = getState().transaction
    const {data, errors} = await ApiService.apiRequest('/transaction', 'GET', {page})
    if(errors) {
        dispatch({type: TransactionActionTypes.TRANSACTION_LIST_ERROR, payload: { error: errors }})
        return
    }
    dispatch({type: TransactionActionTypes.TRANSACTION_LIST_SUCCESS, payload: { transactions: data }})
}

export const getInitialTransactionsList = () => async (dispatch: Dispatch<TransactionsActions>, getState: () => RootState) => {
    dispatch({type: TransactionActionTypes.CLEAR_TRANSACTION_LIST})
    await getTransactionsList()(dispatch, getState)
}

export const createTransaction = (form: any) => async (dispatch: Dispatch<TransactionsActions>, getState: () => RootState) => {
    dispatch({type: TransactionActionTypes.GET_TRANSACTION})
    const {data, errors} = await ApiService.apiRequest(`/transaction`, 'POST', form)
    if(errors) {
        dispatch({type: TransactionActionTypes.TRANSACTION_ERROR, payload: { error: errors }})
        return
    }
    dispatch({type: TransactionActionTypes.TRANSACTION_SUCCESS, payload: { transaction: data }})
    await getInitialTransactionsList()(dispatch, getState)
}

export const updateTransaction = (id: number, form: any) => async (dispatch: Dispatch<TransactionsActions>) => {

}
