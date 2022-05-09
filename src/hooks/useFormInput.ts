import {useState, ChangeEvent, FormEventHandler} from 'react'
import {InputValidator} from '../utils/Validators'
import {InputConverter,} from '../utils/Converters'

export default function useFormInput<T extends Record<string, unknown>, K extends keyof T>(initialValue: T) {
	const [form, setForm] = useState(initialValue)

	const getFormFieldProps = <U>(fieldName: K, converter?: InputConverter<U>, validators: InputValidator<U>[] = [], validationErrorCallback: (error: string) => void = () =>  {}) => {
		return {
			value: form[fieldName],
			onChange: (e: ChangeEvent<HTMLInputElement>) => {
				if (converter && validators?.length) {
					const convertedValue = converter(e.target.value)
					for (const validator of validators) {
						const result = validator(convertedValue)
						if(typeof result === 'string') return validationErrorCallback(result)
					}
				}
				const fieldValue = converter ? converter(e.target.value) : e.target.value
				setForm({
					...form,
					[fieldName]: fieldValue
				})
			}
		}
	}

	const onFormSubmit = (callback: (form: T) => void): FormEventHandler<HTMLFormElement> => {
		return function (e) {
			e.preventDefault()
			callback(form)
		}
	}

	return {getFormFieldProps, onFormSubmit, setForm, form}
}


