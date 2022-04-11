import React from 'react';
import useFormInput from "../../hooks/useFormInput";
import {Button, TextField} from "@mui/material";
import {Link} from 'react-router-dom';
import styles from '../../assets/styles/Pages/Form.module.scss'
import useTypedSelector from "../../hooks/useTypedSelector";
import useActions from "../../hooks/useActions";

const Login = () => {
    const {loading} = useTypedSelector(state => state.user)
    const {signIn} = useActions()

    const {getFormFieldProps, onFormSubmit} = useFormInput({
        email: '',
        password: ''
    })

    const handleSubmit = async (form: Record<string, unknown>) => {
        signIn(form)
    }

    return (
        <div className={styles.form_wrapper}>
            <div className={styles.form_container}>
                <h2 className={styles.form__title}>Login</h2>
                <form onSubmit={onFormSubmit(handleSubmit)} className={styles.form}>
                    <TextField label='email' {...getFormFieldProps('email')} required/>
                    <TextField label='password' type='password' {...getFormFieldProps('password')} required/>
                    <Button disabled={loading} type="submit">Login</Button>
                    <Link className={styles.form__redirect} to="/restore-password">Forgot password?</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
