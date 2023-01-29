import { BalanceState } from './types'

const BalanceStateFactory: () => BalanceState = () => ({
	totalBalances: []
})

export default BalanceStateFactory
