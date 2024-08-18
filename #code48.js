//Find the first element in an array that is greater than its previous element
function firstGreaterThanPrevious(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) return arr[i];
    }
    return null;
}

 
const array48 = [5, 3, 6, 2, 8];
console.log(firstGreaterThanPrevious(array48));  
