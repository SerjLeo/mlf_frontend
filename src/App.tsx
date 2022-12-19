import React, {useEffect} from 'react'
import AppRouter from './router/AppRouter'
import './assets/styles/app.scss'
import CssBaseline from '@mui/material/CssBaseline'
import useActions from './hooks/useActions'
import Alert from '@components/Alert/Alert'

const App: React.FC = () => {
	const {checkoutAuthToken} = useActions()

	useEffect(() => {
		checkoutAuthToken()
	}, [checkoutAuthToken])

	return (
		<div className="App">
			<CssBaseline />
			<Alert/>
			<AppRouter/>
		</div>
	)
}

export default App
