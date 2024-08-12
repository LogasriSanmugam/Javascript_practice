// 10. Determine if a string contains any uppercase letters
let string2 = "hello World";
let containsUppercase = false;
for (let i = 0; i < string2.length; i++) {
    if (string2[i] >= 'A' && string2[i] <= 'Z') {
        containsUppercase = true;
        break;
    }
}
console.log("Contains Uppercase:", containsUppercase);