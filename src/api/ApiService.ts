import axios, { Method } from 'axios'
import { isErrorResponse } from '@utils/TypeGuards'

const apiInstance = axios.create({
	baseURL: 'http://localhost:9001/api'
})

apiInstance.interceptors.request.use ((config) => {
	const token = localStorage.getItem('token')
	if(token && config.headers) config.headers.Authorization = token
	return config
})

export default class ApiService {
	static async apiRequest<T>(url: string, method: Method = 'GET', params: Record<string, unknown> = {})
	: Promise<{ data?: T, error?: string }> {
		try {
			const response = await apiInstance({
				method,
				url,
				data: method.toUpperCase() !== 'GET' ? params : [],
				params: method.toUpperCase() === 'GET' ? params : []
			})
			return response.data
		} catch (e: any) {
			const errorMessage: string = e.response && e.response.data && isErrorResponse(e.response.data) && e.response.data.error || 'unknown error'
			return { error: errorMessage }
		}
	}
}
