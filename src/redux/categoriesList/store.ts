import { CategoriesListState } from './types'

const CategoriesStateFactory: () => CategoriesListState = () => ({
	loading: true,
	finishLoading: false,
	categories: [],
	error: '',
	page: 1
})

export default CategoriesStateFactory
