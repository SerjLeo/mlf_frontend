import React from 'react'
import { Category } from '../../../redux/categoriesList/types'
import styles from '../styles/CategoryLabel.module.scss'

type CategoryLabelProps = {
    category: Category
    selected: boolean
    onClick: (id: number) => void
}

const CategoryLabel: React.FC<CategoryLabelProps> = ({ category, selected, onClick }) => {
	return (
		<div onClick={() => onClick(category.id)} className={styles.category_label} style={{ backgroundColor: category.color, borderColor: selected ? 'black' : 'transparent' }}>
			{category.name}
		</div>
	)
}

export default CategoryLabel
