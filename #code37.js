//Count the number of lowercase letters in a string.
function countLowercaseLetters(str) {
    let count = 0;
    for (let char of str) {
        if (char >= 'a' && char <= 'z') {
            count++;
        }
    }
    return count;
}

let str3 = "Hello World!";
console.log(countLowercaseLetters(str3)); 