// 20. Count the number of digits in a string.
function countDigits(str) {
    return (str.match(/\d/g) || []).length;
}
console.log(countDigits("Hello 123, it's 2024!"));  
console.log(countDigits("No digits here!"));  