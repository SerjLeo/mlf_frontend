import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import CreateTransactionForm from '../../components/CrateTransactionForm/CreateTransactionForm'
import useTypedSelector from '../../hooks/useTypedSelector'
import {CreateTransactionInputForm} from '../../redux/transaction/types'
import TransactionList from '../../components/TransactionList/TransactionList'
import useActions from '../../hooks/useActions'

const Dashboard: React.FC = () => {
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
			<h2>Dashboard</h2>
			<div>
				<Link to='/categories'>1232131</Link>
			</div>

			<div>
				<CreateTransactionForm loading={transactionLoading} onTransactionCreation={handleTransactionCreation}/>
				<TransactionList transactions={transactions} loading={transactionListLoading}/>
			</div>
		</div>
	)
}

export default Dashboard
