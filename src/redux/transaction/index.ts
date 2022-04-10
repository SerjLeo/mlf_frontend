import {TransactionActionTypes, TransactionsActions, TransactionState} from "./types";
import TransactionStateFactory from "./store";

const initialState: TransactionState = TransactionStateFactory()

const transactionReducer = (state = initialState, action: TransactionsActions): TransactionState => {
    switch (action.type) {
        case TransactionActionTypes.GET_TRANSACTION_LIST:
            return state
        case TransactionActionTypes.TRANSACTION_LIST_SUCCESS:
            return state
        case TransactionActionTypes.TRANSACTION_LIST_ERROR:
            return state
        case TransactionActionTypes.CLEAR_TRANSACTION_LIST:
            return state
        case TransactionActionTypes.GET_TRANSACTION:
            return state
        case TransactionActionTypes.TRANSACTION_SUCCESS:
            return state
        case TransactionActionTypes.TRANSACTION_ERROR:
            return state
        case TransactionActionTypes.CLEAR_TRANSACTION:
            return state
        default:
            return state
    }
}

export default transactionReducer
