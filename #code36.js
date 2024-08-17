//Calculate the sum of the squares of the elements in an array.
function sumOfSquares(arr) {
    let sum = 0;
    for (let element of arr) {
        sum += element * element;
    }
    return sum;
}

let arr4 = [1, 2, 3];
console.log(sumOfSquares(arr4));  
