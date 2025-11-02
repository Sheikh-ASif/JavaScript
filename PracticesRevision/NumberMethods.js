// parseInt()	
// parseFloat()	
// isInteger()
// isFinite()	
// toFixed()	
// toExponential()	
// toPrecision()	
// toString()	
// valueOf()


let num = 123.456;
console.log("Parsed Integer:", parseInt(num));
console.log("Parsed Float:", parseFloat(num));
console.log(typeof num);
console.log("Is Integer:", Number.isInteger(num));
console.log("Is Finite:", Number.isFinite(num));
console.log("Fixed to 2 decimals:", num.toFixed(2));
console.log("Exponential form:", num.toExponential(2));
console.log("Precision to 4 digits:", num.toPrecision(4));
console.log("Number to String:", num.toString());
console.log("Value of number:", num.valueOf());



// Convert a string "42" into a number using two different methods.
let strNum = "42";
console.log(typeof strNum);
console.log(parseInt(strNum), typeof parseInt(strNum));


//Convert the number 123 into a string.
let strNum1 = 123;
console.log(typeof strNum1);
console.log(strNum1.toString(), typeof strNum1.toString());



//Round the number 4.5678 to the nearest integer.
let strNum2 = 4.5678;
console.log(Math.round(strNum2));


// Check if the value "123" is an integer.
let strNum3 = "123";
let num1 = Number(strNum3)
console.log(Number.isInteger(num1));