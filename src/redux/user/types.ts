import { Currency } from '@/redux/currency/types'

export enum UserActionTypes {
    EDIT_PROFILE = 'EDIT_PROFILE',
    AUTH_STARTED = 'AUTH_STARTED',
    AUTH_COMPLETED = 'AUTH_COMPLETED',
    AUTH_ERROR = 'AUTH_ERROR',
    LOGOUT = 'LOGOUT'
}

export type User = {
    name: string
    email: string
    currency: Currency
}

export type UserState = {
    user: User | null
    isAuth: boolean
    loading: boolean
    initialLoading: boolean
}

export type UserSignInForm = {
    email: string
    password: string
}

export type UserSignUpForm = UserSignInForm & {
    name: string
}

type AuthStartedAction = {
    type: UserActionTypes.AUTH_STARTED
}

type AuthCompleteAction = {
    type: UserActionTypes.AUTH_COMPLETED
    payload: { user: User }
}

type AuthErrorAction = {
    type: UserActionTypes.AUTH_ERROR
    payload: { error: string }
}

type EditProfileAction = {
    type: UserActionTypes.EDIT_PROFILE
    payload: { user: User }
}

type LogoutAction = {
    type: UserActionTypes.LOGOUT
}

export type UserAction =
    AuthCompleteAction |
    AuthStartedAction |
    AuthErrorAction |
    EditProfileAction |
    LogoutAction
