import React from 'react';
import styles from './Header.module.scss'
import {Button} from "@mui/material";
import {Link} from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
    const authLinks = () => {
        return (
            <div className={styles.header__buttons}>
                <Link to="/register">
                    <Button endIcon={<LoginIcon />}>
                        Register
                    </Button>
                </Link>
                <Link to="/login">
                    <Button endIcon={<PersonIcon />}>
                        Login
                    </Button>
                </Link>
            </div>
        )
    }

    return (
        <div className={styles.header}>
            <div>MLF</div>
            {authLinks()}
        </div>
    );
};

export default Header;
