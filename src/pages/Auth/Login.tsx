import React from 'react';
import useFormInput from "../../hooks/useFormInput";
import {Button, TextField} from "@mui/material";
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/Pages/Form.module.scss'

const Login = () => {
    const {getFormFieldProps, onFormSubmit} = useFormInput({
        email: '',
        password: ''
    })

    const handleSubmit = (form: Record<string, unknown>) => {
        console.log(form)
    }

    return (
        <div className={styles.form_wrapper}>
            <div className={styles.form_container}>
                <h2 className={styles.form__title}>Login</h2>
                <form onSubmit={onFormSubmit(handleSubmit)} className={styles.form}>
                    <TextField label='email' {...getFormFieldProps('email')} required/>
                    <TextField label='password' {...getFormFieldProps('password')} required/>
                    <Button type="submit">Login</Button>
                    <Link className={styles.form__redirect} to="/register">Did not register yet? Register!</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
