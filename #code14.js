// 14. Calculate the sum of elements greater than a given value in an array.
function sumGreaterThan(arr, value) {
    return arr.filter(num => num > value).reduce((sum, num) => sum + num, 0);
}
console.log(sumGreaterThan([1, 2, 3, 4, 5], 3));  
console.log(sumGreaterThan([10, 20, 30, 40], 25));  