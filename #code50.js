//Count the number of palindromes in an array of strings
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

function countPalindromes(arr) {
    return arr.filter(isPalindrome).length;
}


const array50 = ["madam", "racecar", "hello", "world"];
console.log(countPalindromes(array50));  
