// 7. Calculate the sum of all odd numbers in an array
let array6 = [1, 2, 3, 4, 5, 6];
let oddSum = 0;
for (let i = 0; i < array6.length; i++) {
    if (array6[i] % 2 !== 0) {
        oddSum += array6[i];
    }
}
console.log("Odd Sum:", oddSum);