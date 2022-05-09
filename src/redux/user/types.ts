export enum UserActionTypes {
    GET_PROFILE = 'GET_PROFILE',
    AUTH_STARTED = 'AUTH_STARTED',
    AUTH_COMPLETED = 'AUTH_COMPLETED',
    AUTH_ERROR = 'AUTH_ERROR',
    LOGOUT = 'LOGOUT'
}

export type User = {
    name: string
    email: string
}

export type UserState = {
    user: User | null
    isAuth: boolean
    loading: boolean
    initialLoading: boolean
    error: string
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

type GetProfileAction = {
    type: UserActionTypes.GET_PROFILE
}

type LogoutAction = {
    type: UserActionTypes.LOGOUT
}

export type UserAction = AuthCompleteAction | AuthStartedAction | AuthErrorAction | GetProfileAction | LogoutAction
