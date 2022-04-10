import {TransactionState} from "./types";

const TransactionStateFactory: () => TransactionState = () => ({
    transactionLoading: true,
    transactionListLoading: true,
    error: '',
    transactions: [],
    page: 1,
    finishLoading: false,
    currentTransaction: null
})

export default TransactionStateFactory
