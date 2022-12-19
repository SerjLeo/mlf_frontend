import React from 'react'
import styles from './TransactionList.module.scss'
import {Transaction} from '@/redux/transaction/types'
import Spinner from '../Spinner/Spinner'
import TransactionCard from '../TransactionCard/TransactionCard'
import NoData from '../NoData/NoData'

type TransactionListProps = {
    transactions: Transaction[]
    loading: boolean
}

const TransactionList: React.FC<TransactionListProps> = ({ loading, transactions }) => {

	const transactionsListView = () => (
		transactions.length
			? transactions.map(transaction => <TransactionCard key={transaction.transaction_id} transaction={transaction}/>)
			: <NoData/>
	)

	return (
		<div className={styles.transaction_list__wrap}>
			{ loading ? <Spinner/> : transactionsListView() }
		</div>
	)
}

export default TransactionList
