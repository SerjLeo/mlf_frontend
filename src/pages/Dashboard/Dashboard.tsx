import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/Dashboard.module.scss'
import LastTransactions from '@pages/Dashboard/components/LastTransactions'

const Dashboard: React.FC = () => {

	return (
		<div>
			<div>
				<Link to='/categories'>Categories</Link>
			</div>

			<LastTransactions/>
		</div>
	)
}

export default Dashboard
