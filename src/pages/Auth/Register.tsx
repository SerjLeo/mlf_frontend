import React from 'react'
import useFormInput from '../../hooks/useFormInput'
import { Button, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from '../../assets/styles/Pages/Form.module.scss'
import useTypedSelector from '../../hooks/useTypedSelector'
import useActions from '../../hooks/useActions'
import { UserSignUpForm } from '../../redux/user/types'

const Register = React.memo(() => {
	const { loading } = useTypedSelector(state => state.user)
	const { signUp } = useActions()

	const { getFormFieldProps, onFormSubmit } = useFormInput({
		name: '',
		email: '',
		password: ''
	})

	const handleSubmit = (form: UserSignUpForm) => {
		signUp(form)
	}

	return (
		<div className={styles.form_wrapper}>
			<div className={styles.form_container}>
				<h2 className={styles.form__title}>Registration</h2>
				<form onSubmit={onFormSubmit(handleSubmit)} className={styles.form}>
					<TextField label='name' {...getFormFieldProps('name')} required/>
					<TextField label='email' {...getFormFieldProps('email')} required/>
					<TextField label='password' type="password" {...getFormFieldProps('password')} required/>
					<Button type="submit" disabled={loading}>Register</Button>
					<Link className={styles.form__redirect} to="/login">Already registered? Login!</Link>
				</form>
			</div>
		</div>
	)
})

export default Register
