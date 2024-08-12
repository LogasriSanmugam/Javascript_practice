// 5. Find the smallest element in an array
let array4 = [1, 5, 3, 9, 2];
let minElement = array4[0];
for (let i = 1; i < array4.length; i++) {
    if (array4[i] < minElement) {
        minElement = array4[i];
    }
}
console.log("Min Element:", minElement);