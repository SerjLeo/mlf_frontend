import React from 'react'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import {IconButton, Menu, MenuItem} from '@mui/material'
import useActions from '@hooks/useActions'
import {Link} from 'react-router-dom'
import styles from './ProfileMenu.module.scss'

const ProfileMenu: React.FC = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const {signOut} = useActions()

	const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleMenuClose = () => {
		setAnchorEl(null)
	}

	return (
		<div className={styles.profile_menu__wrap}>
			<IconButton size="small" onClick={handleMenuOpen}>
				<MoreHorizIcon />
			</IconButton>

			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleMenuClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem ><Link to="/profile">Profile</Link></MenuItem>
				<MenuItem onClick={signOut}>Logout</MenuItem>
			</Menu>
			<AccountCircleIcon fontSize="large"/>
		</div>
	)
}

export default ProfileMenu
