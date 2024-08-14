// 13. Check if all elements in an array are positive.
function allPositive(arr) {
    return arr.every(num => num > 0);
}
console.log(allPositive([1, 2, 3, 4]));  
console.log(allPositive([-1, 2, 3, 4]));  