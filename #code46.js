//Find the first element in an array that is a multiple of 7
function firstMultipleOf7(arr) {
    return arr.find(num => num % 7 === 0);
}

 
const array46 = [1, 2, 4, 7, 14];
console.log(firstMultipleOf7(array46));  
