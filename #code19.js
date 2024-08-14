// 19. Find the longest word in a string.
function findLongestWord(str) {
    let words = str.split(/\s+/);
    let longest = words[0];
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(findLongestWord("JavaScript is amazing")); 
console.log(findLongestWord("I love coding"));  
