import React from 'react';
import styles from "./CreateTransactionForm.module.scss"
import useTypedSelector from "../../hooks/useTypedSelector";
import useFormInput from "../../hooks/useFormInput";
import useTransactionActions from "../../hooks/actions/useTransactionActions";
import {Button, TextField} from "@mui/material";

type CreateTransactionFormProps = {
    title?: string
    loading?: boolean
    onTransactionCreation: (form: unknown) => void
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

    const handleSubmit = (form: Record<string, unknown>) => {
        onTransactionCreation(form)
    }
    return (
        <div className={styles.transaction__form__wrap}>
            {title && <h3>{title}</h3>}
            <form onSubmit={onFormSubmit(handleSubmit)} className={styles.transaction__form}>
                <div className={styles.transaction__form__switch}>
                    <div className={`${styles.form__switch__btn} ${form.type && styles.active} ${styles.switch__btn__positive}`} onClick={() => setType(true)}>+</div>
                    <div className={`${styles.form__switch__btn} ${!form.type && styles.active} ${styles.switch__btn__negative}`} onClick={() => setType(false)}>-</div>
                </div>
                <div className={styles.form__row}>
                    <TextField label='amount' type="number" inputProps={{min: 0}} {...getFormFieldProps('amount')} required className={styles.form__input}/>
                    <TextField label='description' {...getFormFieldProps('description')} className={styles.form__input}/>
                    <Button disabled={loading} type="submit">ADD</Button>
                </div>
            </form>
        </div>
    );
};

export default CreateTransactionForm;
