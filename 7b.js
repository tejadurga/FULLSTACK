JavaScript File (script.js) 
// Get the width and height of the window 
console.log("Window Width: " + window.innerWidth); 
console.log("Window Height: " + window.innerHeight); 
// Function to open a new window 
function openWindow() { 
let newWindow = window.open("", "newWindow", 
"width=400,height=200"); 
newWindow.document.write("<h1>Hello, World!</h1>"); 
} 
// Function to close the current window 
function closeWindow() { 
window.close(); 
} 
// Function to move the current window 
function moveWindow() { 
window.moveBy(100, 100); 
} 
// Function to resize the current window 
function resizeWindow() { 
window.resizeBy(100, 100); 
} 
// Function to display an alert message 
function alertMessage() { 
window.alert("Hello, World!"); 
} 
// Function to display a confirm message 
function confirmMessage() { 
let response = window.confirm("Are you sure?"); 
if (response) { 
console.log("You clicked OK!"); 
} else { 
console.log("You clicked Cancel!"); 
} 