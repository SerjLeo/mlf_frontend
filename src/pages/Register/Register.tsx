import React from 'react';
import useFormInput from "../../hooks/useFormInput";
import {Button, TextField} from "@mui/material";
import { Link } from 'react-router-dom';

const Register = React.memo(() => {
    const {getFormFieldProps, onFormSubmit} = useFormInput({
        name: '',
        email: '',
        password: ''
    })

    console.log('render')

    const handleSubmit = (form: Record<string, unknown>) => {
        console.log(form)
    }

    return (
        <div>
            <h2>Registration</h2>
            <form onSubmit={onFormSubmit(handleSubmit)}>
                <TextField label='name' {...getFormFieldProps('name')}/>
                <TextField label='email' {...getFormFieldProps('email')}/>
                <TextField label='password' {...getFormFieldProps('password')}/>
                <Button type="submit">Submit</Button>
                <Link to="/login">Already registered? Login!</Link>
            </form>
        </div>
    );
});

export default Register;
