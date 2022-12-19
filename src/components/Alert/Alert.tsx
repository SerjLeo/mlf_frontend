import React from 'react'
import useTypedSelector from '@hooks/useTypedSelector'
import { Alert as MUIAlert, Snackbar } from '@mui/material'
import { useDispatch } from 'react-redux'
import { AlertActionTypes } from '@/redux/alerts/types'

const Alert: React.FC = () => {
	const { alerts } = useTypedSelector(state => state.alert)
	const dispatch = useDispatch()

	const removeAlert = (id: string) => {
		dispatch({
			type: AlertActionTypes.REMOVE_ERROR,
			payload: { id }
		})
	}

	return (
		<div>
			{
				alerts.map(alert => <Snackbar
					key={alert.id} open autoHideDuration={6000}
					onClose={(event, reason) => reason !== 'clickaway' && removeAlert(alert.id)}
				>
					<MUIAlert severity={alert.type} sx={{ width: '100%' }}>
						{alert.msg}
					</MUIAlert>
				</Snackbar>)
			}
		</div>
	)
}

export default Alert