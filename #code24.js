//Calculate the product of all non-zero elements in an array
function productOfNonZeroElements(arr) {
    let product = 1;
    for (let element of arr) {
        if (element !== 0) {
            product *= element;
        }
    }
    return product;
}

console.log(productOfNonZeroElements([1, 2, 0, 4, 5])); 