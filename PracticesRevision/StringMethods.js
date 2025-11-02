// length 
// charAt()	
// concat()	
// toUpperCase()
// trim()	
// slice()	
// replace()	
// replaceAll()
// split()	
// includes()	
// startsWith()
// endsWith()

let string = "Hey Asif how Are you doing Today?";
console.log("Length of string:", string.length);
console.log("Character at index 5:", string.charAt(5));
console.log("Concatenated string:", string.concat(" I hope you are well."));
console.log("Uppercase string:", string.toUpperCase());
console.log("Trimmed string:", "   Hello World!   ",string.trim());
console.log("Sliced string:", string.slice(4, 9));
console.log("Replaced string:", string.replace("Asif", "Friend"));
console.log("Replaced all occurrences:", "apple banana apple".replaceAll("apple", "orange"));
console.log("Split string:", string.split(" "));
console.log("Includes 'Are':", string.includes("Are"));
console.log("Starts with 'Hey':", string.startsWith("Hey"));
console.log("Ends with 'Today?':", string.endsWith("Today?"));



//Given a string "Hello World", use a method to extract only "World".
let text = "hello World";
console.log(text.slice(6));

// Convert the string "JavaScript is fun" to uppercase using a string method.
let text1 = "JavaScript is fun";
console.log(text1.toUpperCase());


//From the string "I love programming", extract "programming" using substring() or slice().
let text2 = "I Love Programming";
console.log(text2.slice(7));
console.log(text2.substring(7));



//Check if the string "Hello JavaScript" contains the word "Java".
let text3 = "Hello JavaScript";
console.log(text3.includes("Java"));


//Replace the word "bad" with "good" in the string "JavaScript is bad".
let text4 = "JavaScript is bad";
console.log(text4.replace("bad", "good"))


// Remove whitespace from both ends of the string " Hello JS ".
let text5 = " Hello JS ";
console.log(text5.trim());


//Split the string "apple, banana, cherry" into an array of individual fruits.
let text6 = "apple, banana, cherry";
console.log(text6.split(", "));


// Count the total number of characters (excluding spaces) in "JavaScript is awesome".
let text7 = "JavaScript is Awesome";
console.log(text7.replaceAll(" ", "").length);

//Convert the first letter of "hello" to uppercase using string methods.
let text8 = 'helllo';
console.log(text8.toUpperCase());


//Reverse the string "ChatGPT" using split(), reverse(), and join().
let text9 = "ChatGPT";
let reversed = text9.split("").reverse().join("");
console.log(reversed);


//From the sentence "I am learning JavaScript", find the index of the word "JavaScript".
let text10 = "I am learning JavaScript";
console.log(text10.indexOf("JavaScript"));


//Check if a string starts with "Hello" and ends with "World"
let text11 = "Hello World!";
console.log(text11.startsWith("Hello"), text11.endsWith("World!"));


//Check if a string starts with "Hello" and ends with "World".
let text12 = "one two three two one";
console.log(text12.replace("one" ,"four"));
console.log(text12.replaceAll("one","five"));



//Given "Hello@2025", separate letters and numbers into two strings.
let text13 = "Hello@2025";
console.log(text13.split("@")[0]);

//Use replaceAll() to replace all spaces in "I love coding" with - (hyphens).
let text14 = "I Love Coding";
console.log(text14.replaceAll(" ", "-"));



// Extract only the domain name from an email like "asif@gmail.com" → output: "gmail"
let email = "asif@gmail.com";
console.log(email.slice(5,10));

// let domain = email.slice(email.indexOf("@") + 1, email.indexOf(".com"));
// console.log(domain);