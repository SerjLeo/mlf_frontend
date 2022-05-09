import React from 'react'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const ProfileMenu: React.FC = () => {
	return (
		<div>
			<MoreHorizIcon/>
			<AccountCircleIcon fontSize="large"/>
		</div>
	)
}

export default ProfileMenu
