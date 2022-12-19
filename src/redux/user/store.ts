import {UserState} from './types'

const UserStateFactory: () => UserState = () => ({
	user: null,
	isAuth: false,
	loading: false,
	initialLoading: true,
})

export default UserStateFactory
