import React from 'react'
import styles from './Header.module.scss'
import Menu from '../Menu/Menu'
import {Button, IconButton} from '@mui/material'
import {Link} from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import PersonIcon from '@mui/icons-material/Person'
import useWindowWidth from '../../hooks/useWindowWidth'
import useTypedSelector from '../../hooks/useTypedSelector'
import useActions from '../../hooks/useActions'

const Header: React.FC = () => {
	const {isAuth} = useTypedSelector(state => state.user)
	const {signOut} = useActions()
	const windowWidth = useWindowWidth()

	const nonAuthLinks = () => {
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

	const authLinks = () => {
		return (
			<div className={styles.header__buttons}>
				<Link to="/profile">
					{
						windowWidth > 768
							? <Button endIcon={<PersonIcon />}>
								<span className={styles.header__button_text}>Profile</span>
							</Button>
							: <IconButton>
								<PersonIcon />
							</IconButton>
					}
				</Link>
				<div>
					{
						windowWidth > 768
							? <Button endIcon={<LoginIcon />} onClick={signOut}>
								<span className={styles.header__button_text}>Logout</span>
							</Button>
							: <IconButton onClick={signOut}>
								<LogoutIcon />
							</IconButton>
					}
				</div>
			</div>
		)
	}

	return (
		<div className={styles.header}>
			<div className={styles.header__left_panel}>
				{isAuth && <Menu/>}
				<Link className={styles.header__text} to="/">{windowWidth > 768 ? 'My Local Financier' : 'MLF'}</Link>
			</div>
			{isAuth ? authLinks() : nonAuthLinks()}
		</div>
	)
}

export default Header
