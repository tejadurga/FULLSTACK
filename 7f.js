JavaScript File (7f.js) 
let output = document.getElementById("output"); 
let regex = /hello/i; 
// Function to test the regex pattern 
function testMethod() { 
let result = regex.test("Hello, World!"); 
output.textContent = "Test result: " + result; 
} 
// Function to execute the regex pattern 
function execMethod() { 
let result = regex.exec("Hello, World!"); 
} 
output.textContent = "Exec result: " + result; 
// Function to get the source property of the regex object 
function getSource() { 
output.textContent = "Source property: " + regex.source; 
} 
// Function to get the flags property of the regex object 
function getFlags() { 
output.textContent = "Flags property: " + regex.flags; 
} 
// Function to get the lastIndex property of the regex object 
function getLastIndex() { 
output.textContent = "LastIndex property: " + regex.lastIndex; 
} 
// Function to set the lastIndex property of the regex object 
function setLastIndex() { 
regex.lastIndex = 10; 
output.textContent = "LastIndex property after setting: " + 
regex.lastIndex; 
} 