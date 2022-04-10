import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as transactionActions from "../../redux/transaction/actions"
import {useMemo} from "react";

const useTransactionActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(transactionActions, dispatch), [dispatch])
}

export default useTransactionActions

