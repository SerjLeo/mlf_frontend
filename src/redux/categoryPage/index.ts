import {CategoryActionTypes, CategoryActions, CategoryState} from "./types";
import CategoryStateFactory from "./store";

const initialState: CategoryState = CategoryStateFactory()

const categoryReducer = (state = initialState, action: CategoryActions): CategoryState => {
    switch (action.type) {
        case CategoryActionTypes.GET_CATEGORY:
            return {...CategoryStateFactory(), loading: true}
        case CategoryActionTypes.UPDATE_CATEGORY:
            return {...state, loading: true}
        case CategoryActionTypes.CATEGORY_SUCCESS:
            return {...CategoryStateFactory(), ...action.payload.category, loading: false}
        case CategoryActionTypes.CATEGORY_ERROR:
            return { ...CategoryStateFactory(), loading: false, error: action.payload.error }
        case CategoryActionTypes.CLEAR_CATEGORY:
            return CategoryStateFactory()
        default:
            return state
    }
}

export default categoryReducer
