import React from 'react'
import useFormInput from '../../hooks/useFormInput'
import styles from '../../assets/styles/Pages/Form.module.scss'
import {Button, TextField} from '@mui/material'

const RestorePassword: React.FC = () => {
	const {getFormFieldProps, onFormSubmit} = useFormInput({
		password: ''
	})

	const handleSubmit = (form: Record<string, unknown>) => {
		console.log(form)
	}

	return (
		<div className={styles.form_wrapper}>
			<div className={styles.form_container}>
				<h2 className={styles.form__title}>Restore Password</h2>
				<form onSubmit={onFormSubmit(handleSubmit)} className={styles.form}>
					<TextField label='email' {...getFormFieldProps('password')} required/>
					<Button type="submit">Restore</Button>
				</form>
			</div>
		</div>
	)
}

export default RestorePassword
