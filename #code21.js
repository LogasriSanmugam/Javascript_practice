//Determine if a number is present in a 2D array (using a 1D approach)
function isNumberIn2DArray(arr, target) {
    for (let row of arr) {
        for (let element of row) {
            if (element === target) {
                return true;
            }
        }
    }
    return false;
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(isNumberIn2DArray(array2D, 5));  
console.log(isNumberIn2DArray(array2D, 10));  