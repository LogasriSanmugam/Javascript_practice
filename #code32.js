//Count the number of uppercase letters in a string.
function countUppercaseLetters(str) {
    let count = 0;
    for (let char of str) {
        if (char >= 'A' && char <= 'Z') {
            count++;
        }
    }
    return count;
}

let str1 = "Hello World!";
console.log(countUppercaseLetters(str1));  
