import {TransactionActionTypes, TransactionsActions, TransactionState} from "./types";
import TransactionStateFactory from "./store";

const initialState: TransactionState = TransactionStateFactory()

const transactionReducer = (state = initialState, action: TransactionsActions): TransactionState => {
    switch (action.type) {
        case TransactionActionTypes.GET_TRANSACTION_LIST:
            return { ...state, transactionListLoading: true, error: '' }
        case TransactionActionTypes.TRANSACTION_LIST_SUCCESS:
            return {
                ...state,
                transactionListLoading: false,
                transactions: action.payload.transactions,
                page: state.page + 1,
                finishLoading: !action.payload.transactions.length,
                error: ''
            }
        case TransactionActionTypes.TRANSACTION_LIST_ERROR:
            return { ...state, transactionListLoading: false, error: action.payload.error }
        case TransactionActionTypes.CLEAR_TRANSACTION_LIST:
            return {...state, transactionListLoading: false, finishLoading: false, transactions: [], page: 1, error: ''}

        case TransactionActionTypes.GET_TRANSACTION:
            return {...state, transactionLoading: true, error: ''}
        case TransactionActionTypes.TRANSACTION_SUCCESS:
            return {...state, currentTransaction: action.payload.transaction, transactionLoading: false, error: ''}
        case TransactionActionTypes.TRANSACTION_ERROR:
            return {...state, transactionLoading: false, error: action.payload.error}
        case TransactionActionTypes.CLEAR_TRANSACTION:
            return {...state, transactionLoading: false, currentTransaction: null, error: ''}
        default:
            return state
    }
}

export default transactionReducer
