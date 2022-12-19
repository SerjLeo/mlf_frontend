import React, {useState} from 'react'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import {IconButton} from '@mui/material'
import menuItems from '@components/Menu/MenuItems'
import {Link} from 'react-router-dom'
import styles from './Menu.module.scss'
import PersonIcon from '@mui/icons-material/Person'
import DashboardIcon from '@mui/icons-material/Dashboard'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import PieChartIcon from '@mui/icons-material/PieChart'

const ICON_MAP = {
	dashboard: DashboardIcon,
	profile: PersonIcon,
	transactions: SwapHorizIcon,
	accounts: CreditCardIcon,
	categories: PieChartIcon
}

const Menu: React.FC = () => {
	const [isOpen, setOpen] = useState(false)

	const toggleMenu = (isOpen: boolean) => (event: React.KeyboardEvent) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return
		setOpen(isOpen)
	}

	const toggleMenuMouse = (isOpen: boolean) => () => {
		setOpen(isOpen)
	}

	const menuList = () => (
		menuItems.map(item => (
			<Link
				onClick={() => setOpen(false)}
				className={styles.item}
				key={item.link}
				to={item.link}
			>
				{React.createElement(ICON_MAP[item.icon as keyof typeof ICON_MAP])}
				{item.text}
			</Link>
		))
	)

	return (
		<div>
			<IconButton onClick={toggleMenuMouse(true)}>
				<ArrowForwardIosIcon />
			</IconButton>
			<SwipeableDrawer
				anchor="left"
				open={isOpen}
				onClose={toggleMenu(false)}
				onOpen={toggleMenu(true)}
			>
				{menuList()}
			</SwipeableDrawer>
		</div>
	)
}

export default Menu
