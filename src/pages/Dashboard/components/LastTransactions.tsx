import React, {useEffect} from 'react'
import useTypedSelector from '@hooks/useTypedSelector'
import useActions from '@hooks/useActions'
import {CreateTransactionInputForm} from '@/redux/transaction/types'
import styles from '../styles/LastTransactions.module.scss'
import TransactionList from '@components/TransactionList/TransactionList'
import CreateTransactionForm from '@components/CrateTransactionForm/CreateTransactionForm'

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
			<h2>Transactions</h2>
			<div className={styles.transactions__content}>
				<TransactionList transactions={transactions} loading={transactionListLoading}/>
				<CreateTransactionForm loading={transactionLoading} onTransactionCreation={handleTransactionCreation}/>
			</div>
		</div>
	)
}

export default LastTransactions
