//Find the first non-repeated character in a string.
function firstNonRepeatedCharacter(str) {
    let charCount = {};
    
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

let str2 = "swiss";
console.log(firstNonRepeatedCharacter(str2));  
