import {UserAction, UserActionTypes, UserState} from './types'
import UserStateFactory from './store'

const initialState: UserState = UserStateFactory()

const userReducer = (state = initialState, action: UserAction): UserState => {
	switch (action.type) {
	case UserActionTypes.AUTH_STARTED:
		return { user: null, isAuth: false, loading: true, initialLoading: false }
	case UserActionTypes.AUTH_COMPLETED:
		return { user: action.payload.user, isAuth: true, loading: false, initialLoading: false }
	case UserActionTypes.AUTH_ERROR:
		return { user: null, isAuth: false, loading: false, initialLoading: false }
	case UserActionTypes.EDIT_PROFILE:
		return { ...state, user: action.payload.user, loading: false }
	case UserActionTypes.LOGOUT:
		return { user: null, isAuth: false, loading: false, initialLoading: false }
	default:
		return state
	}
}

export default userReducer
