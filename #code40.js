//Determine if a string contains any numeric digits.
function containsNumericDigits(str) {
    for (let char of str) {
        if (!isNaN(char) && char !== ' ') {
            return true;
        }
    }
    return false;
}

let str4 = "Hello123";
console.log(containsNumericDigits(str4));  
