//Find the first element in an array that is greater than a given value
function firstGreaterThan(arr, value) {
    for (let element of arr) {
        if (element > value) {
            return element;
        }
    }
    return null;
}

console.log(firstGreaterThan([1, 3, 5, 7, 9], 4));  