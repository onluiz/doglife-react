export function checkValue(val) {
    if(val === undefined) {
        return ''
    }
    return val
}

export function checkDateValue(dateVal = null) {
    if(dateVal != null) {
        return new Date(dateVal)
    }
    return dateVal
}