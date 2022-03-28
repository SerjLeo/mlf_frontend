import ApiService from "../../api/ApiService";
import {UserAction, UserActionTypes} from "./types";
import {Dispatch} from "redux";

export const signIn = (form: any) => async (dispatch: Dispatch<UserAction>) => {
     try {
         dispatch({ type: UserActionTypes.AUTH_STARTED })
         const res = await ApiService.apiRequest('/auth/sign-in', 'POST', form)
         dispatch({type: UserActionTypes.AUTH_COMPLETED, payload: {user: res.data}})
     } catch (err) {
        dispatch({type: UserActionTypes.AUTH_ERROR, payload: {error: 'Error'}})
     }
}

export const signOut = (form: any) => async (dispatch: Dispatch<UserAction>) => {
    localStorage.removeItem('token')
    dispatch({ type: UserActionTypes.LOGOUT })
}
