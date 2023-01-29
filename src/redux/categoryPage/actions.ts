import { Dispatch } from 'redux'
import { CategoryActions, CategoryActionTypes, CreateCategoryForm } from './types'
import ApiService from '../../api/ApiService'
import { Category } from '@/redux/categoriesList/types'

export const getCategoryById = (id: number) => async (dispatch: Dispatch<CategoryActions>) => {
	dispatch({ type: CategoryActionTypes.GET_CATEGORY })
	const { data, error } = await ApiService.apiRequest<Category>(`/category/${id}`, 'GET')
	if(error) {
		dispatch({ type: CategoryActionTypes.CATEGORY_ERROR, payload: { error: error } })
		return
	}
	if(!data) return
	dispatch({ type: CategoryActionTypes.CATEGORY_SUCCESS, payload: { category: data } })
}

export const createCategory = (form: CreateCategoryForm) => async (dispatch: Dispatch<CategoryActions>) => {
	dispatch({ type: CategoryActionTypes.GET_CATEGORY })
	const { data, error } = await ApiService.apiRequest<Category>('/category', 'POST', form)
	if(error) {
		dispatch({ type: CategoryActionTypes.CATEGORY_ERROR, payload: { error: error } })
		return
	}
	if(!data) return
	dispatch({ type: CategoryActionTypes.CATEGORY_SUCCESS, payload: { category: data } })
}

export const updateCategory = (id: number, form: Partial<CreateCategoryForm>) => async (dispatch: Dispatch<CategoryActions>) => {
	dispatch({ type: CategoryActionTypes.UPDATE_CATEGORY })
	const { data, error } = await ApiService.apiRequest<Category>(`/category/${id}`, 'PUT', form)
	if(error) {
		dispatch({ type: CategoryActionTypes.CATEGORY_ERROR, payload: { error: error } })
		return
	}
	if(!data) return
	dispatch({ type: CategoryActionTypes.CATEGORY_SUCCESS, payload: { category: data } })
}
