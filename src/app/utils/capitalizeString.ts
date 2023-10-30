export const capitalize = (str: string) => {
    return str
        .trim()
        .split(' ')
        .map(
            (_str) => _str.charAt(0).toUpperCase() + _str.slice(1).toLowerCase()
        )
        .join(' ')
}
