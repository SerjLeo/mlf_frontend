import React, { createRef, useEffect, useState } from 'react'
import {
	CSSTransition,
	TransitionGroup,
} from 'react-transition-group'
import { v4 as uuidv4 } from 'uuid'
import './PriceSliderAnimation.css'
import styles from './PriceSlider.module.scss'

type SliderProps = {
	itemClassName?: string
	height?: number
  slides: string[]
  timeout?: number
}
const PriceSlider: React.FC<SliderProps> = ({
	slides,

	itemClassName,
	height = 24,
	timeout = 8000
}) => {

	if (slides.length < 2) {
		return <div className={styles.sliderSkeleton} style={{ height: `${height}px` }}>
			{
				!!slides.length && <div className={itemClassName}>{ slides[0] }</div>
			}
		</div>
	}

	const [ items, setItems ] = useState<{
		id: string,
		text: string,
		nodeRef: React.RefObject<HTMLDivElement>
	}[]>([
		{
			id: uuidv4(),
			text: slides[0],
			nodeRef: createRef<HTMLDivElement>(),
		}
	])

	const [ currentPosition, setCurrentPosition ] = useState(1)

	useEffect(() => {
		const interval = startSlider()
		return () => clearInterval(interval)
	}, [])

	const startSlider = () => {
		return setInterval(() => {
			setItems([])
			setTimeout(() => {
				setItems([
					{
						id: uuidv4(),
						text: slides[currentPosition],
						nodeRef: createRef<HTMLDivElement>(),
					}
				])
				setCurrentPosition(position => {
					if(position === slides.length - 1) return 0
					return position+1
				})
			}, 1000)

		}, timeout)
	}

	return (
		<div className={styles.sliderSkeleton} style={{ height: `${height}px` }}>
			<TransitionGroup className="todo-list">
				{items.map(({ id, text, nodeRef }) => (
					<CSSTransition
						key={id}
						nodeRef={nodeRef}
						timeout={500}
						classNames="item"
					>
						<div ref={nodeRef} className={itemClassName}>
							{text}
						</div>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	)
}

export default PriceSlider