// 4. Count the number of vowels in a string
let string1 = "Hello World";
let vowelCount = 0;
let vowels = "aeiouAEIOU";
for (let i = 0; i < string1.length; i++) {
    if (vowels.indexOf(string1[i]) !== -1) {
        vowelCount++;
    }
}
console.log("Vowel Count:", vowelCount);