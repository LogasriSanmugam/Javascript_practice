//Find the first element in an array that is divisible by both 3 and 5
function firstDivisibleBy3And5(arr) {
    return arr.find(num => num % 3 === 0 && num % 5 === 0);
}

 
const array42 = [1, 2, 4, 15, 20];
console.log(firstDivisibleBy3And5(array42));  
