import {Dispatch} from 'redux'
import {CategoriesActionTypes, CategoriesListActions} from './types'
import ApiService from '../../api/ApiService'
import {RootState} from '../index'

export const getCategoriesList = () => async (dispatch: Dispatch<CategoriesListActions>, getState: () => RootState) => {
	const {page, finishLoading} = getState().categoriesList
	if(finishLoading) return
	dispatch({type: CategoriesActionTypes.GET_CATEGORIES})
	const {data, errors} = await ApiService.apiRequest('/category', 'GET', {page})
	if(errors) {
		dispatch({type: CategoriesActionTypes.GET_CATEGORIES_ERROR, payload: { error: errors }})
		return
	}
	dispatch({type: CategoriesActionTypes.GET_CATEGORIES_SUCCESS, payload: { categories: data }})
}
