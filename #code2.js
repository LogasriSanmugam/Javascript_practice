// 2. Count the number of even numbers in an array
let array2 = [1, 2, 3, 4, 5, 6];
let evenCount = 0;
for (let i = 0; i < array2.length; i++) {
    if (array2[i] % 2 === 0) {
        evenCount++;
    }
}
console.log("Even Count:", evenCount);