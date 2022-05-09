import React from 'react'
import styles from './CreateTransactionForm.module.scss'
import useFormInput from '../../hooks/useFormInput'
import {Button, TextField} from '@mui/material'
import {CreateTransactionInputForm} from '../../redux/transaction/types'
import {numberConverter} from '../../utils/Converters'
import {maxNumberValue, minNumberValue} from '../../utils/Validators'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

type CreateTransactionFormProps = {
    title?: string
    loading?: boolean
    onTransactionCreation: (form: CreateTransactionInputForm) => void
}

const CreateTransactionForm: React.FC<CreateTransactionFormProps> = ({
	title = '',
	onTransactionCreation,
	loading = false
}) => {
	const {getFormFieldProps, onFormSubmit, setForm, form} = useFormInput({
		amount: 0,
		type: false,
		description: ''
	})

	const setType = (type: boolean) => {
		setForm({
			...form,
			type
		})
	}

	const handleSubmit = (form: CreateTransactionInputForm) => {
		if(form.amount <= 0) return
		onTransactionCreation(form)
		setForm({
			...form,
			amount: 0,
			description: ''
		})
	}
	return (
		<div className={styles.transaction__form__wrap}>
			{title && <h3>{title}</h3>}
			<form onSubmit={onFormSubmit(handleSubmit)} className={styles.transaction__form}>
				<div className={styles.form__inputs_group}>
					<TextField
						size="small"
						label='amount'
						variant="standard"
						type="number"
						inputProps={{min: 0, max: 1000000}}
						{...getFormFieldProps('amount', numberConverter, [maxNumberValue(1000000), minNumberValue(0)])}
						required className={styles.form__input}
					/>
					<TextField
						size="small"
						variant="standard"
						label='description'
						inputProps={{maxLength: 75}}
						{...getFormFieldProps('description')}
						className={styles.form__input}
					/>
				</div>
				<div className={styles.form__inputs_controls}>
					<div className={styles.transaction__form__switch}>
						<button
							className={`${styles.form__switch__btn} ${form.type && styles.active} ${styles.switch__btn__positive}`}
							onClick={() => setType(true)}
							type='button'
							data-testid="positive-type-btn"><AddIcon/></button>
						<button
							className={`${styles.form__switch__btn} ${!form.type && styles.active} ${styles.switch__btn__negative}`}
							onClick={() => setType(false)}
							type='button'
							data-testid="negative-type-btn"><RemoveIcon/></button>
					</div>
					<Button disabled={loading} type="submit">ADD</Button>
				</div>
			</form>
		</div>
	)
}

export default CreateTransactionForm
