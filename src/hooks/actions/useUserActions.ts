import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as userActions from "../../redux/user/actions"
import {useMemo} from "react";

const useUserActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(userActions, dispatch), [dispatch])
}

export default useUserActions
