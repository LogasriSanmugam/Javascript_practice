// Calculate the sum of elements at even indices in an array.
function sumEvenIndices(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i += 2) {
        sum += arr[i];
    }
    return sum;
}

let arr1 = [1, 2, 3, 4, 5, 6];
console.log(sumEvenIndices(arr1));