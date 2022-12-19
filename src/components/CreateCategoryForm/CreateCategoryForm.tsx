import React from 'react'
import { Button, TextField } from '@mui/material'
import styles from './CreateCategoryForm.module.scss'
import useFormInput from '../../hooks/useFormInput'
import useTypedSelector from '../../hooks/useTypedSelector'
import useActions from '../../hooks/useActions'
import { CreateCategoryForm } from '../../redux/categoryPage/types'

const CreateCategoryFormComponent: React.FC= () => {
	const { loading } = useTypedSelector(state => state.user)
	const { createCategory } = useActions()
	const { getFormFieldProps, onFormSubmit } = useFormInput({
		name: '',
		color: ''
	})

	const handleSubmit = async (form: CreateCategoryForm) => {
		createCategory(form)
	}

	return (
		<div className={styles.form__wrap}>
			<form onSubmit={onFormSubmit(handleSubmit)} className={styles.form}>
				<TextField
					label='name'
					{...getFormFieldProps('name')}
					required
					className={styles.form__input}
				/>
				<TextField
					label='color'
					type='color'
					{...getFormFieldProps('color')}
					className={styles.form__color_input}/>
				<Button disabled={loading} type="submit">Create</Button>
			</form>
		</div>
	)
}

export default CreateCategoryFormComponent
