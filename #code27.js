//Count the number of elements less than a given value in an array
function countLessThan(arr, value) {
    let count = 0;
    for (let element of arr) {
        if (element < value) {
            count++;
        }
    }
    return count;
}

console.log(countLessThan([1, 3, 5, 7, 9], 6)); 
