import React, { useEffect } from 'react'
import styles from '../styles/Accounts.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import AccountLabel from '@components/AccountLabel/AccountLabel'
import { Account } from '@/redux/account/types'
import AccountList from '@components/AccountList/AccountList'

type AccountsProps = {
	accounts: Account[]
	loading?: boolean
	finishLoading: boolean
	onLoadMore: () => void
}
const Accounts: React.FC<AccountsProps> = ({
	accounts,
	loading= false,
	finishLoading,
	onLoadMore
}) => {

	const navigate = useNavigate()

	const onAccountClick = (event: React.MouseEvent<HTMLElement>, acc: Account) => {
		navigate(`/account/${acc.id}`)
	}

	if (loading) return null

	return (
		<div className={styles.accountsWrap}>
			<div className={styles.header}>
				<h2>Accounts</h2>
				<Link to="/accounts" className={styles.all}>See All</Link>
			</div>
			<AccountList
				accounts={accounts}
				isMoreAvailable={finishLoading}
				isMoreLoading={loading}
				onLoadMore={onLoadMore}
				onAccountClick={onAccountClick}
			/>
		</div>
	)
}

export default Accounts