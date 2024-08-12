// 1. Find the maximum element in an array
let array1 = [1, 5, 3, 9, 2];
let maxElement = array1[0];
for (let i = 1; i < array1.length; i++) {
    if (array1[i] > maxElement) {
        maxElement = array1[i];
    }
}
console.log("Max Element:", maxElement);