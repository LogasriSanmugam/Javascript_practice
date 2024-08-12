// 8. Check if a number exists in an array
let array7 = [1, 2, 3, 4, 5];
let number = 3;
let exists = false;
for (let i = 0; i < array7.length; i++) {
    if (array7[i] === number) {
        exists = true;
        break;
    }
}
console.log("Number Exists:", exists);
