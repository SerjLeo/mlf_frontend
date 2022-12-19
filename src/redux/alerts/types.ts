export enum AlertActionTypes {
    ERROR = 'ERROR',
    SUCCESS = 'SUCCESS',
    INFO = 'INFO',
    REMOVE_ERROR = 'REMOVE_ERROR'
}

export enum AlertTypes {
    Error= 'error', Success = 'success', Info = 'info'
}

export type ErrorAlert = {
    id: string
    type: AlertTypes.Error
    msg: string
}

export type SuccessAlert = {
    id: string
    type: AlertTypes.Success
    msg: string
}

export type InfoAlert = {
    id: string
    type: AlertTypes.Info
    msg: string
}

export type Alert = ErrorAlert | SuccessAlert | InfoAlert

export type AlertsState = {
    alerts: Alert[]
}

export type NewError = {
    type: AlertActionTypes.ERROR,
    payload: {
        msg: string
    }
}

export type NewSuccess = {
    type: AlertActionTypes.SUCCESS,
    payload: {
        msg: string
    }
}

export type NewInfo = {
    type: AlertActionTypes.INFO,
    payload: {
        msg: string
    }
}

export type RemoveAlert = {
    type: AlertActionTypes.REMOVE_ERROR,
    payload: {
        id: string
    }
}

export type AlertAction = NewInfo | NewError | NewSuccess | RemoveAlert