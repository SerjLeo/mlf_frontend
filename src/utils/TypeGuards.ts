import { ApiHTTPError } from '@/api/types'

export function isErrorResponse(res: Record<string, unknown>): res is ApiHTTPError {
	return Object.hasOwn(res, 'error')
}
