let user = "Asif";
let greeting = `Hello ${user}! `;
console.log(greeting);



// Given price = 50 and item = "Book", use a template literal to print:
// "The price of Book is 50 rupees."
let price = 50;
let item = "Book";
let message = `The price of the ${item} is ${price} rupees.`
console.log(message);



//Combine firstName = "Sheikh" and lastName = "Asif" using template literals to form the full name.
let firstName = "Sheikh";
let lastName = "Asif";
let fullName = `Full Name : ${firstName} ${lastName}`;
console.log(fullName);

// Create a multi-line string (3 lines) using template literals to print:
// JavaScript is fun.
//  Template literals are awesome.
//  Let's learn more!
let FirstLine = "JavaScript is fun.";
let SecondLine = "Template literals are awesome.";
let multiline = ` Let practice more ${FirstLine} ${SecondLine}`;
console.log(multiline);


//Use a template literal to display the result of a calculation:
//  "The sum of 10 and 20 is 30."
let a = 10;
let b = 20;
let sum = `The sum of ${a} and ${b} is ${a + b}`;
console.log(sum);


//Given 
// let product = "Laptop";
// let price = 55000;
// let discount = 10;
// Use Template Literals to print : "The Laptop costs ₹55000, but after a 10% discount, it’s ₹49500."
let product = "Laptop";
let price1 = 55000;
let discount = 10;
let final = ` The ${product} cost ${price1} after ${discount}% , its ${price1 - (price1 * discount) / 100} only.`;
console.log(final);

