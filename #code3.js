// 3. Find the sum of all positive numbers in an array
let array3 = [-1, 2, 3, -4, 5];
let positiveSum = 0;
for (let i = 0; i < array3.length; i++) {
    if (array3[i] > 0) {
        positiveSum += array3[i];
    }
}
console.log("Positive Sum:", positiveSum);