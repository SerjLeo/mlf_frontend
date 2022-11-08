import React from 'react'
import styles from './TransactionCard.module.scss'
import {Transaction} from '@/redux/transaction/types'
import DateBuilder from '@utils/DateBuilder'

type TransactionCardProps = {
    transaction: Transaction
}

const TransactionCard: React.FC<TransactionCardProps> = ({transaction}) => {
	return (
		<div className={styles.transaction_card__wrap}>
			<div
				className={
					`${styles.card__amount}
					${transaction.type ? styles.transaction__positive : styles.transaction__negative}
					`}
			>{transaction.amount + ' ' + transaction.currency}</div>
			<div className={styles.card__description}>{transaction.description}</div>
			<div className={styles.card__time}>{DateBuilder(transaction.created_at)}</div>
		</div>
	)
}

export default TransactionCard
