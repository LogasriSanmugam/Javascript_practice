// 18. Determine if an array contains only even numbers.
function allEven(arr) {
    return arr.every(num => num % 2 === 0);
}
console.log(allEven([2, 4, 6, 8]));  
console.log(allEven([1, 2, 3, 4]));  