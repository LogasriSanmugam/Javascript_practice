// Find the first element in an array that is a perfect square.
function firstPerfectSquare(arr) {
    for (let element of arr) {
        if (Number.isInteger(Math.sqrt(element))) {
            return element;
        }
    }
    return null;
}

let arr5 = [3, 8, 16, 20];
console.log(firstPerfectSquare(arr5)); 
