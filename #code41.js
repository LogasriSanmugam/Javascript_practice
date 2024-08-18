//Count the number of elements greater than the average of the array
function countGreaterThanAverage(arr) {
    const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    return arr.filter(num => num > average).length;
}

const array41 = [1, 3, 5, 7, 9];
console.log(countGreaterThanAverage(array41));  
