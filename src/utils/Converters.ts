export type InputConverter<T> = <K>(value: K) => T

export const numberConverter: InputConverter<number> = (value) => {
	const convertedNumber = Number(value)
	return isNaN(convertedNumber) ? 0 : convertedNumber
}
