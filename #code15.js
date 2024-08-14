// 15. Count the number of elements divisible by a specific number in an array.
function countDivisibleBy(arr, divisor) {
    return arr.filter(num => num % divisor === 0).length;
}
console.log(countDivisibleBy([1, 2, 3, 4, 5, 6], 2));  
console.log(countDivisibleBy([10, 15, 20, 25, 30], 5)); 