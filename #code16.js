// 16. Find the first palindrome in an array of strings.
function findFirstPalindrome(arr) {
    return arr.find(str => str === str.split('').reverse().join(''));
}
console.log(findFirstPalindrome(["abc", "level", "hello"]));  
console.log(findFirstPalindrome(["not", "a", "racecar", "palindrome"]));  