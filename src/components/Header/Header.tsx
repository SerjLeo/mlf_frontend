import React from 'react';
import styles from './Header.module.scss'
import {Button, IconButton} from "@mui/material";
import {Link} from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import useWindowWidth from "../../hooks/useWindowWidth";

const Header = () => {
    const windowWidth = useWindowWidth()

    const authLinks = () => {
        return (
            <div className={styles.header__buttons}>
                <Link to="/register">
                    {
                        windowWidth > 768
                            ? <Button endIcon={<PersonIcon />}>
                                <span className={styles.header__button_text}>Register</span>
                            </Button>
                            : <IconButton>
                                <PersonIcon />
                            </IconButton>
                    }
                </Link>
                <Link to="/login">
                    {
                        windowWidth > 768
                            ? <Button endIcon={<LoginIcon />}>
                                <span className={styles.header__button_text}>Login</span>
                            </Button>
                            : <IconButton>
                                <LoginIcon />
                            </IconButton>
                    }
                </Link>
            </div>
        )
    }

    return (
        <div className={styles.header}>
            <div className={styles.header__text}>{windowWidth > 768 ? 'My Local Financier' : 'MLF'}</div>
            {authLinks()}
        </div>
    );
};

export default Header;
