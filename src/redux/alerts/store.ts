import { AlertsState } from './types'

const UserStateFactory: () => AlertsState = () => ({
	alerts: []
})

export default UserStateFactory
