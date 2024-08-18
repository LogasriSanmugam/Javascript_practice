//Count the number of elements that are perfect cubes in an array
function countPerfectCubes(arr) {
    return arr.filter(num => Math.cbrt(num) % 1 === 0).length;
}

 
const array43 = [1, 8, 9, 27, 16];
console.log(countPerfectCubes(array43));  
