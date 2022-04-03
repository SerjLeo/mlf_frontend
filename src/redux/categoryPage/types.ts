import {Category} from "../categoriesList/types";
import {Nullable} from "../../utils/types";

export type CategoryState = Nullable<Category> & {
    loading: boolean
    error: string
}

export enum CategoryActionTypes {
    GET_CATEGORY = "GET_CATEGORY",
    UPDATE_CATEGORY = "UPDATE_CATEGORY",
    CATEGORY_SUCCESS = "CATEGORY_SUCCESS",
    CATEGORY_ERROR = "CATEGORY_ERROR",
    CLEAR_CATEGORY = "CLEAR_CATEGORY"
}

type GetCategoryAction = {
    type: CategoryActionTypes.GET_CATEGORY
}

type UpdateCategoryAction = {
    type: CategoryActionTypes.UPDATE_CATEGORY
}

type CategorySuccessAction = {
    type: CategoryActionTypes.CATEGORY_SUCCESS
    payload: { category: Category }
}

type CategoryErrorAction = {
    type: CategoryActionTypes.CATEGORY_ERROR
    payload: { error: string }
}

type ClearCategoryAction = {
    type: CategoryActionTypes.CLEAR_CATEGORY
}

export type CategoryActions = GetCategoryAction | UpdateCategoryAction | CategorySuccessAction | CategoryErrorAction | ClearCategoryAction
