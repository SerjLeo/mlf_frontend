import React, {useCallback, useEffect, useState} from 'react'
import useTypedSelector from '@hooks/useTypedSelector'
import useActions from '@hooks/useActions'
import {CreateTransactionInputForm} from '@/redux/transaction/types'
import styles from '../styles/LastTransactions.module.scss'
import TransactionList from '@components/TransactionList/TransactionList'
import CreateTransactionForm from '@components/CrateTransactionForm/CreateTransactionForm'
import {Link} from 'react-router-dom'
import SearchField from '@components/SearchField/SearchField'
import debounce from '@utils/Debounce'

const LastTransactions: React.FC = () => {
	const {transactionLoading, transactionListLoading, transactions} = useTypedSelector(state => state.transaction)
	const {createTransaction, getInitialTransactionsList} = useActions()

	const [search, setSearch] = useState('')

	useEffect(() => {
		getInitialTransactionsList()
	}, [getInitialTransactionsList])

	useEffect(() => {
		console.log(search)
	}, [search])

	const onSearch = useCallback(debounce((searchString: string) => {
		setSearch(searchString)
	}, 500), [])

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
				<div className={styles.transactions__create_form}>
					<CreateTransactionForm loading={transactionLoading} onTransactionCreation={handleTransactionCreation}/>
				</div>
				<div className={styles.transactions__search}>
					<SearchField onChange={onSearch} inputProps={{size: 'small', fullWidth: true}}/>
				</div>
				<div className={styles.transactions__list}>
					<TransactionList transactions={transactions} loading={transactionListLoading}/>
				</div>
			</div>
		</div>
	)
}

export default LastTransactions
