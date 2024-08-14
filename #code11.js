// 11. Count the number of spaces in a string.
function countSpaces(str) {
    return (str.split(" ").length - 1);
}
console.log(countSpaces("Hello World"));  
console.log(countSpaces("This is a test string"));  