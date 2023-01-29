import { CategoryState } from './types'

const CategoryStateFactory: () => CategoryState = () => ({
	id: null,
	name: '',
	color: '',
	created_at: null,
	loading: true,
	error: ''
})

export default CategoryStateFactory
