import React, { useEffect, useState } from 'react'
import styles from './styles/Dashboard.module.scss'
import LastTransactions from '@pages/Dashboard/components/LastTransactions'
import DashboardHeader from '@pages/Dashboard/components/DashboardHeader'
import DashboardStatistics from '@pages/Dashboard/components/DashboardStatistics'
import Accounts from '@pages/Dashboard/components/Accounts'
import useActions from '@hooks/useActions'
import useTypedSelector from '@hooks/useTypedSelector'

const Dashboard: React.FC = () => {

	const [ loading, setLoading ] = useState(true)

	const { totalBalances } = useTypedSelector(state => state.balance)
	const { accounts, finishLoading: accFinishLoading } = useTypedSelector(state => state.account)
	const { currencies } = useTypedSelector(state => state.currency)
	const { transactionLoading, transactionListLoading, transactions } = useTypedSelector(state => state.transaction)

	const {
		getInitialAccounts,
		getTotalBalances,
		createTransaction,
		getInitialTransactionsList,
		uploadAccounts
	} = useActions()

	const getData = async () => {
		setLoading(true)
		await Promise.allSettled([
			getInitialAccounts(),
			getTotalBalances(),
			getInitialTransactionsList()
		])
		setLoading(false)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			<DashboardHeader loading={loading} totalBalances={totalBalances}/>
			<div className={styles.dashboard__content}>
				<div className={styles.dashboard__main}>
					<Accounts
						loading={loading}
						finishLoading={accFinishLoading}
						accounts={accounts}
						onLoadMore={uploadAccounts}
					/>
					<DashboardStatistics/>
				</div>
				<div className={styles.dashboard__aside}>
					<LastTransactions
						currencies={currencies}
						accounts={accounts}
						transactions={transactions}
						loading={loading||transactionLoading}
						transactionListLoading={transactionListLoading}
						onTransactionCreation={createTransaction}
					/>
				</div>
			</div>

		</div>
	)
}

export default Dashboard
