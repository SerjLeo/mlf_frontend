import {useState, ChangeEvent, FormEventHandler} from "react";

export default function useFormInput<T extends Record<string, unknown>, K extends keyof T>(initialValue: T) {
    const [form, setForm] = useState(initialValue)

    const getFormFieldProps = (fieldName: K) => {
        return {
            value: form[fieldName],
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
                setForm({
                    ...form,
                    [fieldName]: e.target.value
                })
            }
        }
    }

    const onFormSubmit = (callback: Function): FormEventHandler<HTMLFormElement> => {
        return function (e) {
            e.preventDefault()
            callback(form)
        }
    }

    return {getFormFieldProps, onFormSubmit, setForm, form}
}


