// Find the first character in a string that is not a letter
function firstNonLetterChar(str) {
    return [...str].find(char => !/[a-zA-Z]/.test(char));
}

 
const string44 = "Hello, World!";
console.log(firstNonLetterChar(string44));  
