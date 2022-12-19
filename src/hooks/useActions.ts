import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../redux/user/actions'
import * as transactionActions from '../redux/transaction/actions'
import * as categoryActions from '../redux/categoryPage/actions'
import * as categoriesListActions from '../redux/categoriesList/actions'
import { useMemo } from 'react'

const allActions = {
	...userActions,
	...transactionActions,
	...categoryActions,
	...categoriesListActions
}

const useActions = () => {
	const dispatch = useDispatch()
	return useMemo(() => bindActionCreators(allActions, dispatch), [ dispatch ])
}

export default useActions
