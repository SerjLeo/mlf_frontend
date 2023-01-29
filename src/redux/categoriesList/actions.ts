import { Dispatch } from 'redux'
import { CategoriesActionTypes, CategoriesListActions, Category } from './types'
import ApiService from '../../api/ApiService'
import { RootState } from '../index'

export const getCategoriesList = () => async (dispatch: Dispatch<CategoriesListActions>, getState: () => RootState) => {
	const { page, finishLoading } = getState().categoriesList
	if(finishLoading) return
	dispatch({ type: CategoriesActionTypes.GET_CATEGORIES })
	const { data, error } = await ApiService.apiRequest<Category[]>('/category', 'GET', { page })
	if(error) {
		dispatch({ type: CategoriesActionTypes.GET_CATEGORIES_ERROR, payload: { error } })
		return
	}
	if(!data) return
	dispatch({ type: CategoriesActionTypes.GET_CATEGORIES_SUCCESS, payload: { categories: data } })
}
