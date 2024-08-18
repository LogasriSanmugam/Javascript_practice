//Determine if a string contains any special characters
function containsSpecialCharacters(str) {
    return /[^a-zA-Z0-9]/.test(str);
}


const string49 = "Hello@World!";
console.log(containsSpecialCharacters(string49));  
