//Count the number of elements in an array that are prime numbers
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function countPrimes(arr) {
    return arr.filter(isPrime).length;
}

 
const array45 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(countPrimes(array45));  
