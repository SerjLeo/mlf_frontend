import React, {useEffect} from 'react'
import AppRouter from './router/AppRouter'
import './assets/styles/app.scss'
import CssBaseline from '@mui/material/CssBaseline'
import useActions from './hooks/useActions'

const App: React.FC = () => {
	const {checkoutAuthToken} = useActions()

	useEffect(() => {
		checkoutAuthToken()
	}, [checkoutAuthToken])

	return (
		<div className="App">
			<CssBaseline />
			<AppRouter/>
		</div>
	)
}

export default App
