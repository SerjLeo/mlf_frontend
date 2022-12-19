import React from 'react'
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'
import styles from './styles/Landing.module.scss'

const Landing: React.FC = () => {

	return (
		<div className={styles.landing}>
			<div>
				Here is awesome picture
			</div>
			<div>
				<h1>Why should we use this</h1>
				<div>
					<Link to="/login">
						<Button>Login</Button>
					</Link>
					<Link to="/register">
						<Button>Register</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Landing
