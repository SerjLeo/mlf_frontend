export type ApiHTTPError = {
    error: string
    data: undefined
}

export type HTTPSuccessfulResponse<T> = {
    data: T
    error: undefined
}