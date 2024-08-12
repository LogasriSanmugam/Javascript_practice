// 6. Count the occurrences of a specific element in an array
let array5 = [1, 2, 3, 2, 4, 2];
let specificElement = 2;
let occurrences = 0;
for (let i = 0; i < array5.length; i++) {
    if (array5[i] === specificElement) {
        occurrences++;
    }
}
console.log("Occurrences of", specificElement, ":", occurrences);
