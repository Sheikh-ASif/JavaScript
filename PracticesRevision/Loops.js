// For Loop
for (let i =0; i<10; i++) {
    // console.log(i);
}

// While Loop
let j = 0;
while (j < 5) {
    // console.log(j);
    j++;
}

// Do-While Loop
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);


// for...in Loop
let person = {fname:"John", lname:"Doe", age:25};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

const obj = {a: 1, b: 2};
for (let key in obj) {
  console.log(key, obj[key]);
}

// for...of Loop
let arr = [10, 20, 30];
for (let value of arr) {
    console.log(value);
}


// Print even numbers between 1 and 20 using a while loop.
let num = 1;
while (num <= 20) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

//Print the Table of 3 like 3 * 1 = 3 up to 3 * 10 = 30 using a for loop.
for ( let i = 1; i <= 10; i++){
    console.log(`3 * ${i} = ${3 * i}`);
}


// Calculate the sum of the first 100 natural numbers using a for loop.
let sum = 0;
for ( let i = 1; i <= 100; i++){
   sum += i;
}
console.log("Sum of first 100 natural numbers is:", sum);



// Print all odd numbers between 1 and 50 using a while loop.
let num1 = 1;
while ( num1 <= 50) {
    if ( num1 % 2 !== 0){
        console.log(num1);
    }
    num1++;
}



// Print numbers from 10 to 1 in descending order using a for loop.
for ( let i = 10; i >= 1; --i ){
    console.log(i);
}



// Print the squares of numbers from 1 to 10 using a loop.
for ( let i = 1; i <= 10; i++ ) {
    console.log(`Square of ${i} is ${i * i}`);
}



// Calculate the factorial of a number (e.g., 5) using a for loop.
let factorial = 1;
let number = 5;
for ( let i = 1; i <= number; i++ ) {
    factorial *= i;
}
console.log(`Factorial of ${number} is ${factorial}`);


// Write a program that prints the first 10 natural numbers using a do...while loop.
let count = 1;
do {
    console.log(count);
    count++;
} while ( count <= 10 );
