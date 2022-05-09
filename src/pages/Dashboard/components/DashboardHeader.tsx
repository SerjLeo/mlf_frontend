import React from 'react'
import styles from '../styles/DashboardHeader.module.scss'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import ProfileMenu from '@components/ProfileMenu/ProfileMenu'

const DashboardHeader: React.FC = () => {
	return (
		<div className={styles.header__wrap}>
			<div className={styles.header__balance_item}>
				<CreditCardIcon fontSize="large" className={styles.header__balance_icon}/>
				<div className={styles.header__balance_info}>
					<div className={styles.header__balance_value}>1000 $</div>
					<div className={styles.header__balance_title}>Balance</div>
				</div>
			</div>

			<div className={styles.header__balance_item}>
				<CurrencyExchangeIcon fontSize="large" className={styles.header__balance_icon}/>
				<div className={styles.header__balance_info}>
					<div className={styles.header__balance_value}>-500 $</div>
					<div className={styles.header__balance_title}>This month</div>
				</div>
			</div>

			<div className={styles.header__profile}>
				<ProfileMenu/>
			</div>
		</div>
	)
}

export default DashboardHeader
