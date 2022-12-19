import React from 'react'
import { Link } from 'react-router-dom'
import image from '@assets/images/404.png'

const NotFound: React.FC = () => {
	return (
		<div>
			<img src={image} alt=""/>
			<div>Page Not Found</div>
			<Link to="/">Home Page</Link>
		</div>
	)
}

export default NotFound
