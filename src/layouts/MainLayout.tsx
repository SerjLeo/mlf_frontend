import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Spinner from '../components/Spinner/Spinner'
import LayoutsModule from './styles/Layouts.module.scss'
import Menu from '@components/Menu/Menu'

const MainLayout: React.FunctionComponent = () => {
	return (
		<div className={LayoutsModule.app__container}>
			<div className={LayoutsModule.menu_button}>
				<Menu/>
			</div>
			<div className={LayoutsModule.app__content}>
				<Suspense fallback={<Spinner/>}>
					<Outlet/>
				</Suspense>
			</div>
		</div>
	)
}

export default MainLayout
