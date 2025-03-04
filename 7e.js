JavaScript File (7e.js) 
let output = document.getElementById("output"); 
// Function to demonstrate charCodeAt method 
function charCodeAtMethod() { 
let str = "Hello, World!"; 
let charCode = str.charCodeAt(0); 
output.textContent = "The character code of the first character is: " 
+ charCode; 
} 
// Function to demonstrate charAt method 
function charAtMethod() { 
let str = "Hello, World!"; 
let char = str.charAt(0); 
output.textContent = "The first character is: " + char; 
} 
// Function to demonstrate concat method 
function concatMethod() { 
let str1 = "Hello, "; 
let str2 = "World!"; 
let result = str1.concat(str2); 
output.textContent = "The concatenated string is: " + result; 
} 
// Function to demonstrate indexOf method 
function indexOfMethod() { 
let str = "Hello, World!"; 
let index = str.indexOf("World"); 
output.textContent = "The index of 'World' is: " + index; 
} 
// Function to demonstrate lastIndexOf method 
function lastIndexOfMethod() { 
let str = "Hello, World!"; 
} 
let index = str.lastIndexOf("World"); 
output.textContent = "The last index of 'World' is: " + index; 
// Function to demonstrate match method 
function matchMethod() { 
let str = "Hello, World!"; 
let regex = /World/; 
let result = str.match(regex); 
output.textContent = "The match is: " + result; 
} 
// Function to demonstrate replace method 
function replaceMethod() { 
let str = "Hello, World!"; 
let regex = /World/; 
let replacement = "Universe"; 
let result = str.replace(regex, replacement); 
output.textContent = "The replaced string is: " + result; 
} 
// Function to demonstrate search method 
function searchMethod() { 
let str = "Hello, World!"; 
let regex = /World/; 
let result = str.search(regex); 
output.textContent = "The index of the match is: " + result; 
} 
// Function to demonstrate slice method 
function sliceMethod() { 
let str = "Hello, World!"; 
let start = 7; 
let end = 12; 
} 
let result = str.slice(start, end); 
output.textContent = "The sliced string is: " + result; 
// Function to demonstrate split method 
function splitMethod() { 
let str = "apple,banana,cherry"; 
let separator = ","; 
let result = str.split(separator); 
output.textContent = "The split array is: " + result; 
} 
// Function to demonstrate substring method 
function substringMethod() { 
let str = "Hello, World!"; 
let start = 7; 
let end = 12; 
let result = str.substring(start, end); 
output.textContent = "The substring is: " + result; 
} 
// Function to demonstrate toLowerCase method 
function toLowerCaseMethod() { 
let str = "HELLO, WORLD!"; 
let result = str.toLowerCase(); 
output.textContent = "The string in lowercase is: " + result; 
} 
// Function to demonstrate toUpperCase method 
function toUpperCaseMethod() { 
let str = "hello, world!"; 
let result = str.toUpperCase(); 
output.textContent = "The string in uppercase is: " + result; 
} 
