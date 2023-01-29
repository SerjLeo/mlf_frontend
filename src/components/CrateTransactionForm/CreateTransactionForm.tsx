import React, { useState } from 'react'
import styles from './CreateTransactionForm.module.scss'
import { useForm } from 'react-hook-form'
import { Button, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { CreateTransactionInputForm } from '@/redux/transaction/types'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Currency } from '@/redux/currency/types'
import { Account } from '@/redux/account/types'
import AccountSelect from '@components/CrateTransactionForm/AccountSelect'

type CreateTransactionFormProps = {
    loading?: boolean
	currencies: Currency[]
	accounts: Account[]
    onTransactionCreation: (form: CreateTransactionInputForm) => void
}

type FormFields = {
	amount: number,
	description: string,
}

const CreateTransactionForm: React.FC<CreateTransactionFormProps> = ({
	onTransactionCreation,
	currencies,
	accounts,
	loading = false
}) => {
	if(loading) return null

	const { register, handleSubmit, watch, formState: { errors }  } = useForm<FormFields>({
		defaultValues: {
			amount: 0,
			description: ''
		}
	})
	const [ type, setType ] = useState(false)
	const [ currency, setCurrency ] = useState(currencies[0])
	const [ account, setAccount ] = useState<Account>(accounts[0])

	const onCurrencySelect = (e: SelectChangeEvent<number>) => {
		setCurrency(currencies.find(currency => currency.id === Number(e.target.value)) || currencies[0])
	}

	const onHandleSubmit = (form: FormFields) => {
		onTransactionCreation({
			...form,
			currency_id: currency.id,
			account_id: account.id,
			type
		})
	}

	return (
		<div className={styles.transaction__form__wrap}>
			<form onSubmit={handleSubmit(onHandleSubmit)} className={styles.transaction__form}>
				<div className={styles.controls}>
					<div className={styles.controlsLeft}>
						<div className={styles.switch}>
							<button
								className={`${styles.form__switch__btn} ${type && styles.active} ${styles.switch__btn__positive}`}
								onClick={() => setType(true)}
								type='button'
								data-testid="positive-type-btn"><AddIcon fontSize="small"/></button>
							<button
								className={`${styles.form__switch__btn} ${!type && styles.active} ${styles.switch__btn__negative}`}
								onClick={() => setType(false)}
								type='button'
								data-testid="negative-type-btn"><RemoveIcon fontSize="small"/></button>
						</div>
						<AccountSelect
							selectedCurrency={currency}
							accounts={accounts}
							account={account}
							onAccountSelect={(acc) => setAccount(acc)}
						/>
					</div>
					<div>
						<Button disabled={loading} size="small" type="submit">ADD</Button>
					</div>
				</div>
				<div className={styles.inputGroup}>
					<Select
						size="small"
						variant="standard"
						value={currency.id}
						onChange={onCurrencySelect}
					>
						{
							currencies.map(currency => <MenuItem key={currency.id} value={currency.id}>{currency.name}</MenuItem>)
						}
					</Select>
					<TextField
						size="small"
						label='amount'
						variant="outlined"
						{...register('amount', {
							min: 0,
							max: 1000000,
							valueAsNumber: true,
						})}
						type="number"
						inputProps={{ min: 0, max: 1000000 }}
						required className={styles.amountInput}
					/>
					<TextField
						size="small"
						variant="outlined"
						label='description'
						inputProps={{ maxLength: 75 }}
						{...register('description', {
							maxLength: 75
						})}
						className={styles.descriptionInput}
					/>
				</div>
			</form>
		</div>
	)
}

export default CreateTransactionForm
