export type InputConverter<T> = (value: unknown) => T

export const numberConverter: InputConverter<number> = (value) => {
	const convertedNumber = Number(value)
	return isNaN(convertedNumber) ? 0 : convertedNumber
}

export const stringConverter: InputConverter<string> = (value) => {
	return String(value)
}
