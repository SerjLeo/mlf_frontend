import { useState, useEffect } from 'react'
import Debounce from '../utils/Debounce'

const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth

export default function useWindowWidth() {
	const [width, setWidth] = useState(getWidth())

	useEffect(() => {
		const resizeListener = Debounce(() => {
			setWidth(getWidth())
		}, 100)
		window.addEventListener('resize', resizeListener)
		return () => {
			window.removeEventListener('resize', resizeListener)
		}
	}, [])

	return width
}
