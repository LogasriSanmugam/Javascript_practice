// Find the first non-zero element in an array.
function firstNonZeroElement(arr) {
    for (let element of arr) {
        if (element !== 0) {
            return element;
        }
    }
    return null;
}

let arr3 = [0, 0, 3, 0, 5];
console.log(firstNonZeroElement(arr3));  
