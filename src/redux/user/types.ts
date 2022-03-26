export enum UserActionTypes {
    GET_PROFILE = 'GET_PROFILE',
    AUTH_STARTED = 'AUTH_STARTED',
    AUTH_COMPLETED = 'AUTH_COMPLETED',
    AUTH_ERROR = 'AUTH_ERROR',
    LOGOUT = 'LOGOUT'
}

export type UserState = {
    user: any
    isAuth: boolean
    loading: boolean
    error: string
}

type AuthStartedAction = {
    type: UserActionTypes.AUTH_STARTED
}

type AuthCompleteAction = {
    type: UserActionTypes.AUTH_COMPLETED
    payload: { user: any }
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
