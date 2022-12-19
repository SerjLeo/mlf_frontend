import React from 'react'
import useFormInput from '../../hooks/useFormInput'
import styles from '../../assets/styles/Pages/Form.module.scss'
import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

const FastSignUp: React.FC = () => {
	const { getFormFieldProps, onFormSubmit } = useFormInput({
		email: ''
	})

	const handleSubmit = (form: Record<string, unknown>) => {
		console.log(form)
	}

	return (
		<div className={styles.form_wrapper}>
			<div className={styles.form_container}>
				<h2 className={styles.form__title}>Sign Up With Email</h2>
				<form onSubmit={onFormSubmit(handleSubmit)} className={styles.form}>
					<TextField label='email' {...getFormFieldProps('email')} required/>
					<Button type="submit">Register</Button>
					<Link className={styles.form__redirect} to="/login">Already registered? Login!</Link>
				</form>
			</div>
		</div>
	)
}

export default FastSignUp
