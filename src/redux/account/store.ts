import { AccountState } from './types'

const AccountStateFactory: () => AccountState = () => ({
	accounts: [],
	finishLoading: false,
	loading: false,
	page: 0,
	selectedAccount: null

})

export default AccountStateFactory
