import ApiService from '../../api/ApiService'
import { User, UserAction, UserActionTypes, UserSignInForm, UserSignUpForm } from './types'
import { Dispatch } from 'redux'
import { AlertActions, AlertActionTypes } from '@/redux/alerts/types'

export const signIn = (form: UserSignInForm) => async (dispatch: Dispatch<UserAction|AlertActions>) => {
	dispatch({ type: UserActionTypes.AUTH_STARTED })
	const { data, error } = await ApiService.apiRequest<User>('/auth/sign-in', 'POST', form)
	if(error) {
		dispatch({ type: UserActionTypes.AUTH_ERROR, payload: { error: 'Error' } })
		return
	}
	if(!data) return
	localStorage.setItem('token', `Bearer ${data}`)
	dispatch({ type: UserActionTypes.AUTH_COMPLETED, payload: { user: data } })
}

export const signUp = (form: UserSignUpForm) => async (dispatch: Dispatch<UserAction|AlertActions>) => {
	dispatch({ type: UserActionTypes.AUTH_STARTED })
	const { data, error } = await ApiService.apiRequest<User>('/auth/sign-up', 'POST', form)
	if(error) {
		dispatch({ type: AlertActionTypes.ERROR, payload: { msg: '' } })
		dispatch({ type: UserActionTypes.AUTH_ERROR, payload: { error: 'Error' } })
		return
	}
	localStorage.setItem('token', `Bearer ${data}`)
	if(!data) return
	dispatch({ type: UserActionTypes.AUTH_COMPLETED, payload: { user: data } })
}

export const checkoutAuthToken = () => async (dispatch: Dispatch<UserAction|AlertActions>) => {
	if (!localStorage.getItem('token')) {
		dispatch({ type: UserActionTypes.LOGOUT })
		return
	}
	const { data, error } = await ApiService.apiRequest<User>('/auth/check', 'GET')
	if (error) {
		dispatch({ type: UserActionTypes.AUTH_ERROR, payload: { error: 'Error' } })
		return
	}
	if(!data) return
	dispatch({ type: UserActionTypes.AUTH_COMPLETED, payload: { user: data } })
}

export const signOut = () => async (dispatch: Dispatch<UserAction>) => {
	localStorage.removeItem('token')
	dispatch({ type: UserActionTypes.LOGOUT })
}

// export const editProfile = (fields: Partial<User>) => async (dispatch: Dispatch<UserAction|AlertActions>) => {
// 	const { data, error } = await ApiService.apiRequest('/user/profile', 'PUT', { fields })
// 	if (error) {
// 		dispatch({ type: AlertActionTypes.ERROR, payload: { msg: 'Server error' } })
// 		return
// 	}
// 	dispatch({ type: UserActionTypes.EDIT_PROFILE, payload: { user: data } })
// 	dispatch({ type: AlertActionTypes.SUCCESS, payload: { msg: 'Changes applied' } })
// }