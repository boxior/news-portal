export const testRegex = (e, value, regex) => {
    return regex.test(value);
};

export const isObjectWithOwnProperty = (object, property) => {
    if(isArrayWithLength(property)) {
        let newProperty = property.filter( row => {
            return object.hasOwnProperty(row)
        } );
        return newProperty.length === property.length
    }
    return object instanceof Object && object.hasOwnProperty(property);
};

export const isArrayWithLength = (arr) => {
    return Array.isArray(arr) && arr.length;
};
