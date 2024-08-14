//Determine if a string is a palindrome (ignoring spaces)
function isPalindrome(str) {
    let cleanStr = str.replace(/\s+/g, '').toLowerCase();
    let reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

console.log(isPalindrome("A man a plan a canal Panama")); 
