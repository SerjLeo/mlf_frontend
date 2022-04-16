import {CategoriesActionTypes, CategoriesListActions, CategoriesListState} from './types'
import CategoriesStateFactory from './store'

const initialState: CategoriesListState = CategoriesStateFactory()

const userReducer = (state = initialState, action: CategoriesListActions): CategoriesListState => {
	switch (action.type) {
	case CategoriesActionTypes.GET_CATEGORIES:
		return {...state, loading: true}
	case CategoriesActionTypes.GET_CATEGORIES_SUCCESS:
		return {...state, loading: false, categories: [...state.categories, ...action.payload.categories], page: state.page + 1, finishLoading: !action.payload.categories.length}
	case CategoriesActionTypes.GET_CATEGORIES_ERROR:
		return { ...state, loading: false, error: action.payload.error }
	case CategoriesActionTypes.CLEAR_CATEGORIES:
		return CategoriesStateFactory()
	default:
		return state
	}
}

export default userReducer
