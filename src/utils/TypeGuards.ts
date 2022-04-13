export const isAcceptableType = <U>(value: any, reference: U): value is U => {
    return typeof reference === typeof value
}
