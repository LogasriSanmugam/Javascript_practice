//Count the number of elements that are powers of 2 in an array.
function countPowersOfTwo(arr) {
    let count = 0;
    for (let element of arr) {
        if (element > 0 && (element & (element - 1)) === 0) {
            count++;
        }
    }
    return count;
}

let arr6 = [1, 2, 4, 5, 16, 18];
console.log(countPowersOfTwo(arr6));  
