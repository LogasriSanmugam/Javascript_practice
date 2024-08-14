//Count the number of prime numbers in an array
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function countPrimes(arr) {
    let count = 0;
    for (let element of arr) {
        if (isPrime(element)) {
            count++;
        }
    }
    return count;
}

console.log(countPrimes([2, 3, 4, 5, 6, 7])); 