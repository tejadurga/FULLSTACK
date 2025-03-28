JavaScript File (7a.js) 
// Get the title of the document 
console.log("Document Title: " + document.title); 
// Get the URL of the document 
console.log("Document URL: " + document.URL); 
// Get the domain name of the document 
console.log("Document Domain: " + document.domain); 
// Get the last modified date of the document 
console.log("Document Last Modified: " + document.lastModified); 
// Function to change the text of the paragraph 
function changeText() { 
let paragraph = document.getElementById("paragraph"); 
paragraph.textContent = "This is the new text."; 
} 
// Function to change the color of the heading 
function changeColor() { 
let heading = document.getElementById("heading"); 
heading.style.color = "red"; 
} 
// Function to create a new element 
function createElement() { 
let newElement = document.createElement("p"); 
newElement.textContent = "This is a new paragraph."; 
document.body.appendChild(newElement); 
} 
// Function to remove an element 
function removeElement() { 
let paragraph = document.getElementById("paragraph"); 
paragraph.remove(); 
} 