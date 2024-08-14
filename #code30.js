//Find the first even number in an array
function firstEvenNumber(arr) {
    for (let element of arr) {
        if (element % 2 === 0) {
            return element;
        }
    }
    return null;
}

console.log(firstEvenNumber([1, 3, 7, 8, 10])); 
