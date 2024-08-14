//Count the number of consonants in a string
function countConsonants(str) {
    let consonantCount = 0;
    let vowels = "aeiouAEIOU";
    for (let char of str) {
        if (!vowels.includes(char) && /[a-zA-Z]/.test(char)) {
            consonantCount++;
        }
    }
    return consonantCount;
}

console.log(countConsonants("Hello World!")); 
