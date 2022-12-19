import React, { KeyboardEvent, useRef, useState } from 'react'
import styles from './EditTextInput.module.scss'
import { IconButton, TextField } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import useInput from '../../hooks/useInput'
import { flushSync } from 'react-dom'

type EditTextInputProps = {
    initialValue: string | number
    onValueChange: (value: string | number) => void
}

const EditTextInput: React.FC<EditTextInputProps> = ({ initialValue= '', onValueChange }) => {
	const [ editMode, setEditMode ] = useState(false)
	const inputProps = useInput(initialValue)
	const inputRef = useRef<HTMLInputElement>(null)

	const activateEditMode = () => {
		flushSync(() => {
			setEditMode(true)
		})
		inputRef.current?.focus()
	}

	const blurInput = () => {
		setEditMode(false)
		onValueChange(inputProps.value)
	}

	const onKeyDown = (e: KeyboardEvent) => {
		if(e.key === 'Enter') blurInput()
	}

	return (
		<div className={styles.edit_input__wrap}>
			{
				editMode
					? <TextField variant="standard" onKeyDown={onKeyDown} onBlur={blurInput} {...inputProps} inputRef={inputRef}/>
					: <div className={styles.edit_input}>
						{inputProps.value}
						<IconButton className={styles.edit_icon} onClick={activateEditMode} size="small">
							<EditIcon fontSize="small"/>
						</IconButton>
					</div>
			}
		</div>
	)
}

export default EditTextInput
