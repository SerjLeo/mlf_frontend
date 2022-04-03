import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as categoryActions from "../../redux/categoryPage/actions"
import {useMemo} from "react";

const useCategoryActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(categoryActions, dispatch), [dispatch])
}

export default useCategoryActions

