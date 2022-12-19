import React from 'react'
import styles from '../styles/DashboardStatistics.module.scss'
import { Link } from 'react-router-dom'

const DashboardStatistics: React.FC = () => {
	return (
		<div>
			<div className={styles.statistic__header}>
				<h2>Statistics</h2>
				<Link to="/stats" className={styles.statistic__see_all}>See All</Link>
			</div>
			<div>
				Beautiful Graphics
			</div>
		</div>
	)
}

export default DashboardStatistics
