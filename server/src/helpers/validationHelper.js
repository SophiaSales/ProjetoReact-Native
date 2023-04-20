const isArrayNotEmpty = (array) => {
    return Array.isArray(array) && array.length > 0;
}

const isObjectNotEmpty = (object) => {
    if (typeof object !== "object" || Array.isArray(object) || object == null || Object.keys(object).length === 0) {
        return false
    }

    return true;
}

module.exports = {
    isArrayNotEmpty,
    isObjectNotEmpty
}