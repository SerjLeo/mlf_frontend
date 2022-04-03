import React from 'react';
import useTypedSelector from "../../../hooks/useTypedSelector";
import useFormInput from "../../../hooks/useFormInput";
import {Button, TextField} from "@mui/material";
import styles from "../styles/CreateCategoryForm.module.scss"
import useCategoryActions from "../../../hooks/actions/useCategoryActions";

const CreateCategoryForm = () => {
    const {loading} = useTypedSelector(state => state.user)
    const {createCategory} = useCategoryActions()
    const {getFormFieldProps, onFormSubmit} = useFormInput({
        name: '',
        color: ''
    })

    const handleSubmit = async (form: Record<string, unknown>) => {
        createCategory(form)
    }

    return (
        <div className={styles.form__wrap}>
            <form onSubmit={onFormSubmit(handleSubmit)} className={styles.form}>
                <TextField label='name' {...getFormFieldProps('name')} required className={styles.form__input}/>
                <TextField label='color' type='color' {...getFormFieldProps('color')} className={styles.form__color_input}/>
                <Button disabled={loading} type="submit">Create</Button>
            </form>
        </div>
    );
};

export default CreateCategoryForm;
