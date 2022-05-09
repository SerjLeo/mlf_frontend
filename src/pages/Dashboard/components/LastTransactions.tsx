import React, {useEffect} from 'react'
import useTypedSelector from '@hooks/useTypedSelector'
import useActions from '@hooks/useActions'
import {CreateTransactionInputForm} from '@/redux/transaction/types'
import styles from '../styles/LastTransactions.module.scss'
import TransactionList from '@components/TransactionList/TransactionList'
import CreateTransactionForm from '@components/CrateTransactionForm/CreateTransactionForm'
import {Link} from 'react-router-dom'

const LastTransactions: React.FC = () => {
	const {transactionLoading, transactionListLoading, transactions} = useTypedSelector(state => state.transaction)
	const {createTransaction, getInitialTransactionsList} = useActions()

	useEffect(() => {
		getInitialTransactionsList()
	}, [getInitialTransactionsList])

	const handleTransactionCreation = (form: CreateTransactionInputForm) => {
		createTransaction(form)
	}

	return (
		<div>
			<div className={styles.transactions__header}>
				<h2>Transactions</h2>
				<Link to="/transactions" className={styles.transactions__see_all}>See All</Link>
			</div>
			<div className={styles.transactions__content}>
				<CreateTransactionForm loading={transactionLoading} onTransactionCreation={handleTransactionCreation}/>
				<TransactionList transactions={transactions} loading={transactionListLoading}/>
			</div>
		</div>
	)
}

export default LastTransactions
