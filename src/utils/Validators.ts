export type InputValidator<K> = (value: K) => true | string

export const maxNumberValue: (value: number) => InputValidator<number> = (maxNumberValue: number) => (value) => {
    if (value > maxNumberValue) return `Value exceeded ${maxNumberValue}`
    return true
}

export const minNumberValue: (value: number) => InputValidator<number> = (minNumberValue: number) => (value) => {
    if (value < minNumberValue) return `Value under ${minNumberValue}`
    return true
}
