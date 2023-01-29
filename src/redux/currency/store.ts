import { CurrencyState } from './types'

const CurrencyStateFactory: () => CurrencyState = () => ({
	currencies: [],
	loading: false
})

export default CurrencyStateFactory
