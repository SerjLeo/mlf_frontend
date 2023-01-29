export type CategoriesListState = {
    page: number
    loading: boolean
    error: string
    categories: Category[]
    finishLoading: boolean
}

export type Category = {
    id: number
    name: string
    color: string
    created_at: string
}

export enum CategoriesActionTypes {
    GET_CATEGORIES = 'GET_CATEGORIES',
    GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS',
    GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR',
    CLEAR_CATEGORIES = 'CLEAR_CATEGORIES'
}

type GetCategoriesAction = {
    type: CategoriesActionTypes.GET_CATEGORIES
}

type GetCategoriesSuccessAction = {
    type: CategoriesActionTypes.GET_CATEGORIES_SUCCESS
    payload: { categories: Category[] }
}

type GetCategoriesErrorAction = {
    type: CategoriesActionTypes.GET_CATEGORIES_ERROR
    payload: { error: string }
}

type ClearCategoriesAction = {
    type: CategoriesActionTypes.CLEAR_CATEGORIES
}

export type CategoriesListActions = GetCategoriesAction | GetCategoriesSuccessAction | GetCategoriesErrorAction | ClearCategoriesAction
