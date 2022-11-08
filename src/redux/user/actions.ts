import ApiService from '../../api/ApiService'
import {UserAction, UserActionTypes, UserSignInForm, UserSignUpForm} from './types'
import {Dispatch} from 'redux'

export const signIn = (form: UserSignInForm) => async (dispatch: Dispatch<UserAction>) => {
	dispatch({ type: UserActionTypes.AUTH_STARTED })
	const {data, errors} = await ApiService.apiRequest('/auth/sign-in', 'POST', form)
	if(errors) {
		dispatch({type: UserActionTypes.AUTH_ERROR, payload: {error: 'Error'}})
		return
	}
	localStorage.setItem('token', `Bearer ${data}`)
	dispatch({type: UserActionTypes.AUTH_COMPLETED, payload: {user: data}})
}

export const signUp = (form: UserSignUpForm) => async (dispatch: Dispatch<UserAction>) => {
	dispatch({ type: UserActionTypes.AUTH_STARTED })
	const {data, errors} = await ApiService.apiRequest('/auth/sign-up', 'POST', form)
	if(errors) {
		dispatch({type: UserActionTypes.AUTH_ERROR, payload: {error: 'Error'}})
		return
	}
	localStorage.setItem('token', `Bearer ${data}`)
	dispatch({type: UserActionTypes.AUTH_COMPLETED, payload: {user: data}})
}

export const checkoutAuthToken = () => async (dispatch: Dispatch<UserAction>) => {
	if (!localStorage.getItem('token')) {
		dispatch({ type: UserActionTypes.LOGOUT })
		return
	}
	const {data, errors} = await ApiService.apiRequest('/auth/check', 'GET')
	if (errors) {
		dispatch({type: UserActionTypes.AUTH_ERROR, payload: {error: 'Error'}})
		return
	}
	dispatch({type: UserActionTypes.AUTH_COMPLETED, payload: {user: data}})
}

export const signOut = () => async (dispatch: Dispatch<UserAction>) => {
	localStorage.removeItem('token')
	dispatch({ type: UserActionTypes.LOGOUT })
}

export const getProfile = () => async (dispatch: Dispatch<UserAction>) => {
	dispatch({ type: UserActionTypes.GET_PROFILE })
}