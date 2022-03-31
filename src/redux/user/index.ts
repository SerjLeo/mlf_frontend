import {UserAction, UserActionTypes, UserState} from "./types";

const initialState: UserState = {
    user: null,
    isAuth: false,
    loading: false,
    initialLoading: true,
    error: ''
}

const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.AUTH_STARTED:
            return {user: null, isAuth: false, loading: true, initialLoading: false, error: ''}
        case UserActionTypes.AUTH_COMPLETED:
            return {user: action.payload.user, isAuth: true, loading: false, initialLoading: false, error: ''}
        case UserActionTypes.AUTH_ERROR:
            return {user: null, isAuth: false, loading: false, initialLoading: false, error: action.payload.error}
        case UserActionTypes.GET_PROFILE:
            return state
        case UserActionTypes.LOGOUT:
            return {user: null, isAuth: false, loading: false, initialLoading: false, error: ''}
        default:
            return state
    }
}

export default userReducer
