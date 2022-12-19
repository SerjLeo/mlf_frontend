import { Category } from '../categoriesList/types'
import { Currency } from '@/redux/currency/types'

export type Transaction = {
    transaction_id: number
    amount: number
    description: string
    type: boolean
    currency: Currency
    created_at: string
    categories?: Category[]
}

export type TransactionState = {
    transactions: Transaction[]
    page: number
    transactionListLoading: boolean
    finishLoading: boolean
    currentTransaction: Transaction | null
    transactionLoading: boolean
    error: string
}

export type CreateTransactionInputForm = {
    amount: number
    description?: string
    type: boolean
    categories?: Category[]
}

export enum TransactionActionTypes {
    GET_TRANSACTION = 'GET_TRANSACTION',
    UPDATE_TRANSACTION = 'UPDATE_TRANSACTION',
    TRANSACTION_SUCCESS = 'TRANSACTION_SUCCESS',
    TRANSACTION_ERROR = 'TRANSACTION_ERROR',
    CLEAR_TRANSACTION = 'CLEAR_CATEGORY',

    GET_TRANSACTION_LIST = 'GET_TRANSACTION_LIST',
    UPDATE_TRANSACTION_LIST = 'UPDATE_TRANSACTION_LIST',
    TRANSACTION_LIST_SUCCESS = 'TRANSACTION_LIST_SUCCESS',
    TRANSACTION_LIST_ERROR = 'TRANSACTION_LIST_ERROR',
    CLEAR_TRANSACTION_LIST = 'CLEAR_TRANSACTION_LIST'
}

type GetTransactionAction = {
    type: TransactionActionTypes.GET_TRANSACTION
}

type UpdateTransactionAction = {
    type: TransactionActionTypes.UPDATE_TRANSACTION
}

type TransactionSuccessAction = {
    type: TransactionActionTypes.TRANSACTION_SUCCESS
    payload: { transaction: Transaction }
}

type TransactionErrorAction = {
    type: TransactionActionTypes.TRANSACTION_ERROR
    payload: { error: string }
}

type ClearTransactionAction = {
    type: TransactionActionTypes.CLEAR_TRANSACTION
}

type GetTransactionListAction = {
    type: TransactionActionTypes.GET_TRANSACTION_LIST
}

type UpdateTransactionListAction = {
    type: TransactionActionTypes.UPDATE_TRANSACTION_LIST
}

type TransactionListSuccessAction = {
    type: TransactionActionTypes.TRANSACTION_LIST_SUCCESS
    payload: { transactions: Transaction[] }
}

type TransactionListErrorAction = {
    type: TransactionActionTypes.TRANSACTION_LIST_ERROR
    payload: { error: string }
}

type ClearTransactionListAction = {
    type: TransactionActionTypes.CLEAR_TRANSACTION_LIST
}

export type TransactionsActions =
    ClearTransactionListAction | TransactionListErrorAction | TransactionListSuccessAction | UpdateTransactionListAction | GetTransactionListAction |
    ClearTransactionAction | GetTransactionAction | UpdateTransactionAction | TransactionSuccessAction | TransactionErrorAction
