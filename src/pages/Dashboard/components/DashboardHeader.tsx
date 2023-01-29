import React, { useEffect } from 'react'
import styles from '../styles/DashboardHeader.module.scss'
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import ProfileMenu from '@components/ProfileMenu/ProfileMenu'
import { BalanceOfCurrency } from '@/redux/balance/types'
import { Skeleton } from '@mui/material'


type DashboardHeaderProps = {
	totalBalances: BalanceOfCurrency[]
	loading?: boolean
}
const DashboardHeader: React.FC<DashboardHeaderProps> = ({ totalBalances, loading= false }) => {

	if (loading) return (
		<div className={styles.headerWrap}>
			<div className={styles.headerBalanceItem}>
				<Skeleton className={styles.headerBalanceIcon} variant="circular" width={35} height={35} />
				<div>
					<Skeleton variant="rectangular" width={40} height={24} style={{ margin: '6px 0' }}/>
					<Skeleton variant="rectangular" width={80} height={21} />
				</div>
			</div>

			<div className={styles.headerBalanceItem}>
				<Skeleton className={styles.headerBalanceIcon} variant="circular" width={35} height={35} />
				<div>
					<Skeleton variant="rectangular" width={40} height={24} style={{ margin: '6px 0' }}/>
					<Skeleton variant="rectangular" width={80} height={21} />
				</div>
			</div>

			<div className={styles.headerProfileSkeleton}>
				<Skeleton variant="rectangular" width={35} height={35} />
				<Skeleton variant="circular" width={35} height={35} />
			</div>
		</div>
	)

	return (
		<div className={styles.headerWrap}>
			<div className={styles.headerBalanceItem}>
				<AccountBalanceWalletIcon fontSize="large" className={styles.headerBalanceIcon}/>
				{!!totalBalances && !!totalBalances.length &&
					<div>
						<div className={styles.headerBalanceInfo}>
							{
								totalBalances.map((balance, index) =>
									<div key={index} className={styles.headerBalanceValue}>
										{`${balance.total} ${balance.currency}`}
									</div>)
							}
						</div>
						<div className={styles.headerBalanceTitle}>Balance</div>
					</div>
				}
			</div>

			<div className={styles.headerBalanceItem}>
				<CurrencyExchangeIcon fontSize="large" className={styles.headerBalanceIcon}/>
				<div className={styles.headerBalanceInfo}>
					<div className={styles.headerBalanceValue}>-500 $</div>
					<div className={styles.headerBalanceTitle}>This month</div>
				</div>
			</div>

			<div className={styles.headerProfile}>
				<ProfileMenu/>
			</div>
		</div>
	)
}

export default DashboardHeader
