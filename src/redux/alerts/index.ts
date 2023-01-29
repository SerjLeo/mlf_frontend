import { AlertActions, AlertActionTypes, AlertsState, AlertTypes } from './types'
import AlertStateFactory from './store'
import { v4 as uuidv4 } from 'uuid'

const initialState: AlertsState = AlertStateFactory()

const alertReducer = (state = initialState, action: AlertActions): AlertsState => {
	switch (action.type) {
	case AlertActionTypes.ERROR:
		return {
			alerts: [
				...state.alerts,
				{
					id: uuidv4(),
					msg: action.payload.msg,
					type: AlertTypes.Error
				}
			]
		}
	case AlertActionTypes.SUCCESS:
		return {
			alerts: [
				...state.alerts,
				{
					id: uuidv4(),
					msg: action.payload.msg,
					type: AlertTypes.Success
				}
			]
		}
	case AlertActionTypes.INFO:
		return {
			alerts: [
				...state.alerts,
				{
					id: uuidv4(),
					msg: action.payload.msg,
					type: AlertTypes.Info
				}
			]
		}
	case AlertActionTypes.REMOVE_ERROR:
		return {
			alerts: state.alerts.filter(alert => alert.id !== action.payload.id)
		}
	default:
		return state
	}
}

export default alertReducer
