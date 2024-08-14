// 17. Count the number of words in a string.
function countWords(str) {
    return str.trim().split(/\s+/).length;
}
console.log(countWords("Hello world, welcome to JavaScript!"));  
console.log(countWords("  This    is    a test   "));  