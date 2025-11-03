

function greet () {
    return "Hello world";
}
console.log(greet());

//Create a function that takes two numbers as arguments and returns their sum.
function sum (a, b) {
    return a + b;
}
console.log(sum(5, 10));


//Write a function that returns whether a number is even or odd.
function EvenOdd (num) {
    if(num % 2 === 0){
        return "even number";
    } else {
        return "odd number";
    }
}
console.log(EvenOdd(7));


//Create a function that takes a string as an argument and returns the string reversed.
function reverseString (str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("Hello"));


//Create a function to find the square of a given number.
function square (num) {
    return num * num ;
}
console.log(square(4));



//Create a function that converts a string to uppercase.
function abc ( str) {
    return str.toUpperCase();
}
console.log(abc("hello world"));


//Create a function that checks if a number is prime.
function isPrime (num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(11));



//Make a function that returns the area of a rectangle given its length and width.
function area (length, width ) {
    return length * width;
}
console.log('Area of rectangle:', area(5, 10));



//Create a function that returns the cube of a number.
function cube (num) {
    return num**3 ;
}
console.log(cube(3));


//Write a function that checks if a string is a palindrome.
function isPalindrome (str) {
    const reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("madam"));



//Create a function that finds the largest number in an array.
function LargestNumber () {
    let array = [10, 5, 8, 20, 3];
    let largest = array[0];
    for (let i = 1; i < array.length; i++){
        if(array[i] > largest){
            largest = array[i];
        }
    }
    return largest;
}
console.log("Largest number is:", LargestNumber());