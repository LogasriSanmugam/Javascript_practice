// 9. Find the first negative number in an array
let array8 = [1, 2, -3, 4, 5];
let firstNegative = null;
for (let i = 0; i < array8.length; i++) {
    if (array8[i] < 0) {
        firstNegative = array8[i];
        break;
    }
}
console.log("First Negative Number:", firstNegative);