import React, { useCallback, useEffect, useState } from 'react'
import useTypedSelector from '@hooks/useTypedSelector'
import useActions from '@hooks/useActions'
import { CreateTransactionInputForm, Transaction } from '@/redux/transaction/types'
import styles from '../styles/LastTransactions.module.scss'
import TransactionList from '@components/TransactionList/TransactionList'
import CreateTransactionForm from '@components/CrateTransactionForm/CreateTransactionForm'
import { Link } from 'react-router-dom'
import SearchField from '@components/SearchField/SearchField'
import debounce from '@utils/Debounce'
import { Account } from '@/redux/account/types'
import { Currency } from '@/redux/currency/types'

type LastTransactionsProps = {
	onTransactionCreation: (form: CreateTransactionInputForm) => void
	accounts: Account[]
	currencies: Currency[]
	transactions: Transaction[]
	loading?: boolean
	transactionListLoading: boolean
}
const LastTransactions: React.FC<LastTransactionsProps> = ({
	onTransactionCreation,
	loading = false,
	transactionListLoading,
	currencies,
	accounts,
	transactions
}) => {

	const [ search, setSearch ] = useState('')

	useEffect(() => {
		console.log(search)
	}, [ search ])

	const onSearch = useCallback(debounce((searchString: string) => {
		setSearch(searchString)
	}, 500), [])

	const handleTransactionCreation = (form: CreateTransactionInputForm) => {
		// createTransaction(form)
	}


	return (
		<div>
			<div className={styles.transactions__header}>
				<h2>Transactions</h2>
				<Link to="/transactions" className={styles.transactions__see_all}>See All</Link>
			</div>
			<div className={styles.transactions__content}>
				<div className={styles.transactions__create_form}>
					<CreateTransactionForm
						loading={loading}
						currencies={currencies}
						accounts={accounts}
						onTransactionCreation={onTransactionCreation}
					/>
				</div>
				<div className={styles.transactions__search}>
					<SearchField onChange={onSearch} inputProps={{ size: 'small', fullWidth: true }}/>
				</div>
				<div className={styles.transactions__list}>
					<TransactionList transactions={transactions} loading={transactionListLoading}/>
				</div>
			</div>
		</div>
	)
}

export default LastTransactions
