let age = 18;
let result = age >= 18 ? "Adult" : "minor";
console.log(result);



// Write a ternary expression to check if a number is positive or negative.
let number = -5;
let checkNumber = number >= 0 ? "positive" : "negative";
console.log(checkNumber)



// Write a ternary expression to check if a number is even or odd.
let num = 15;
let evenorodd = num % 2 == 0 ? "even " : "odd";
console.log(evenorodd);


// Write a ternary expression to check if a person is eligible to vote based on their age.
let age1 = 18;
let voteEligibility = age1 >= 18 ? "Eligbile to vote" : "Not eligible to vote";
console.log(voteEligibility);


// Write a ternary expression to check if a string is empty or not.
let str = "";
let isEmpty = str.length === 0 ? "String is empty" : "String is not empty";
console.log(isEmpty);


// write a ternary expression to check if a number is divisible by 3 or not.
let dividend = 13;
let divisor = 3;
let result1 = dividend % divisor === 0 ? "dvidible by the 3 " : "not divisible by 3";
console.log(result1);



// Write a nested ternary expression to assign a grade based on a score.
let score = 10;
let grade = score >= 90 ? "A" :score >= 70 ? "B" : "C";
console.log(grade); 


// Write a ternary expression to check if a string length is greater than 4 or not.


// if else method
let str1 = "Hey Asif";
console.log(str1.length);
if(str1.length <= 4) {
    console.log("Short String")
} else {
    console.log("Long String")
}

// ternary method
let str2 = "Hey Asif";
let ShortLong = str2.length <= 4 ? "short string" : "long string";
console.log(ShortLong);


// Write a nested ternary expression to check if a number is positive, negative, or zero.
let number2 = -2;
let check = number2 === 0 ? "zero" : number2 > 0 ? "positive" : "negative";
console.log(check);


// Write a ternary expression to check if a user is logged in or not and display an appropriate message.

// if else method
let user = "LoggedIn";
if (user === "LoggedIn"){
    console.log("Welcome back!");
} else {
    console.log("Please log in.");
}

// ternary method
let LoggedIn = false;
console.log(LoggedIn ? "Welcome back!" : "Please log in.");