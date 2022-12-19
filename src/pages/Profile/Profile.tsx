import React from 'react'
import styles from './styles/Profile.module.scss'
import ProfileMenu from '@components/ProfileMenu/ProfileMenu'
import useTypedSelector from '@hooks/useTypedSelector'
import {Avatar, Button, Switch} from '@mui/material'
import Spinner from '@components/Spinner/Spinner'
import LockIcon from '@mui/icons-material/Lock'
import NotificationsIcon from '@mui/icons-material/Notifications'
import {Currencies} from '@utils/constants/currencies'
import EditTextInput from '@components/EditTextInput/EditTextInput'
import useActions from '@hooks/useActions'

const Profile: React.FC = () => {
	const {user, loading} = useTypedSelector(state => state.user)

	const {editProfile} = useActions()

	const onNameChange = async (name: string | number) => {
		await editProfile({name: String(name)})
		console.log(name)
	}

	const profileSettings = () => (
		<div className={styles.settingsPanel}>
			<div className={styles.settings}>
				<div className={styles.settingsCard}>
					<div className={styles.cardTitle}>
						<LockIcon/>
						Security
					</div>
					<Button>Change password</Button>
				</div>

				<div className={styles.settingsCard}>
					<div className={styles.cardTitle}>
						<NotificationsIcon/>
						Notifications
					</div>
					<Switch/>
				</div>
			</div>
		</div>
	)

	const profileContent = () => user && (
		<div className={styles.content}>
			<div className={styles.contentInfo}>
				<Avatar
					alt="Remy Sharp"
					src="/static/images/avatar/1.jpg"
					sx={{width: 100, height: 100}}
				/>
				{user.name && <div className={styles.infoName}>{user.name}</div>}
				<EditTextInput initialValue={user.name} onValueChange={onNameChange}/>

				<div className={styles.infoFieldsList}>
					<div className={styles.infoField}>
						<div className={styles.infoFieldTitle}>Email</div>
						<div className={styles.infoFieldValue}>{user.email}</div>
					</div>

					<div className={styles.infoField}>
						<div className={styles.infoFieldTitle}>Currency</div>
						<div className={styles.infoFieldValue}>{Currencies[user.currency]} {user.currency}</div>
					</div>
				</div>
			</div>

			{profileSettings()}
		</div>
	)

	return (
		<div className={styles.profile}>
			<div className={styles.profileHeader}>
				<h2>{user && user.name ? `Hello ${user.name}` : 'Profile settings'}</h2>
				<ProfileMenu/>
			</div>
			{ loading ? <Spinner/> : profileContent() }
		</div>
	)
}

export default Profile
