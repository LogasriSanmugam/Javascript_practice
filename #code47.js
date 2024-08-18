//Count the number of unique characters in a string
function countUniqueCharacters(str) {
    const uniqueChars = new Set(str);
    return uniqueChars.size;
}

 
const string47 = "hello";
console.log(countUniqueCharacters(string47));  
