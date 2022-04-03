import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as categoriesListActions from "../../redux/categoriesList/actions"
import {useMemo} from "react";

const useCategoriesListActions = () => {
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(categoriesListActions, dispatch), [dispatch])
}

export default useCategoriesListActions
