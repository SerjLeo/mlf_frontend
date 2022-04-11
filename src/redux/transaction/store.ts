import {TransactionState} from "./types";

const TransactionStateFactory: () => TransactionState = () => ({
    transactionLoading: false,
    transactionListLoading: false,
    error: '',
    transactions: [],
    page: 1,
    finishLoading: false,
    currentTransaction: null
})

export default TransactionStateFactory
