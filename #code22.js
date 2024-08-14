//Count the occurrences of a specific character in a string
function countCharacterOccurrences(str, char) {
    let count = 0;
    for (let c of str) {
        if (c === char) {
            count++;
        }
    }
    return count;
}

console.log(countCharacterOccurrences("hello world", "l"));  