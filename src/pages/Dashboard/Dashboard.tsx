import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/Dashboard.module.scss'
import LastTransactions from '@pages/Dashboard/components/LastTransactions'
import DashboardHeader from '@pages/Dashboard/components/DashboardHeader'

const Dashboard: React.FC = () => {

	return (
		<div>
			<DashboardHeader/>
			<div className={styles.dashboard__content}>
				<div className={styles.dashboard__main}>
					Cool graphics
				</div>
				<div className={styles.dashboard__aside}>
					<LastTransactions/>
				</div>
			</div>

		</div>
	)
}

export default Dashboard
