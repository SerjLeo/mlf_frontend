import {Dispatch} from "redux";
import {CategoryActions, CategoryActionTypes} from "./types";
import ApiService from "../../api/ApiService";
import {CategoriesListActions} from "../categoriesList/types";

export const getCategoryById = (id: number) => async (dispatch: Dispatch<CategoryActions>) => {
    dispatch({type: CategoryActionTypes.GET_CATEGORY})
    const {data, errors} = await ApiService.apiRequest(`/category/${id}`, 'GET')
    if(errors) {
        dispatch({type: CategoryActionTypes.CATEGORY_ERROR, payload: { error: errors }})
        return
    }
    dispatch({type: CategoryActionTypes.CATEGORY_SUCCESS, payload: { category: data }})
}

export const createCategory = (form: any) => async (dispatch: Dispatch<CategoryActions>) => {
    dispatch({type: CategoryActionTypes.GET_CATEGORY})
    const {data, errors} = await ApiService.apiRequest(`/category`, 'POST', form)
    if(errors) {
        dispatch({type: CategoryActionTypes.CATEGORY_ERROR, payload: { error: errors }})
        return
    }
    dispatch({type: CategoryActionTypes.CATEGORY_SUCCESS, payload: { category: data }})
}

export const updateCategory = (id: number, form: any) => async (dispatch: Dispatch<CategoryActions>) => {
    dispatch({type: CategoryActionTypes.UPDATE_CATEGORY})
    const {data, errors} = await ApiService.apiRequest(`/category/${id}`, 'PUT', form)
    if(errors) {
        dispatch({type: CategoryActionTypes.CATEGORY_ERROR, payload: { error: errors }})
        return
    }
    dispatch({type: CategoryActionTypes.CATEGORY_SUCCESS, payload: { category: data }})
}
