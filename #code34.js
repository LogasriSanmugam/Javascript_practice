//Count the number of multiples of a specific number in an array.
function countMultiples(arr, num) {
    let count = 0;
    for (let element of arr) {
        if (element % num === 0) {
            count++;
        }
    }
    return count;
}

let arr2 = [2, 3, 4, 6, 8, 12];
console.log(countMultiples(arr2, 2));  
