import React, { useEffect, useState } from 'react'
import AppRouter from './router/AppRouter'
import './assets/styles/app.scss'
import CssBaseline from '@mui/material/CssBaseline'
import useActions from './hooks/useActions'
import Alert from '@components/Alert/Alert'
import Spinner from '@components/Spinner/Spinner'

const App: React.FC = () => {
	const { checkoutAuthToken, getCurrenciesList } = useActions()

	const [ loading, setLoading ] = useState(true)

	useEffect(() => {
		uploadAppData()
	}, [])

	const uploadAppData = async () => {
		setLoading(true)
		await Promise.allSettled([
			checkoutAuthToken(),
			getCurrenciesList()
		])
		setLoading(false)
	}

	return (
		<div className="App">
			<CssBaseline />
			<Alert/>
			{
				loading ? <div className="appSpinnerWrap">
					<Spinner/>
				</div> : <AppRouter/>
			}
		</div>
	)
}

export default App
