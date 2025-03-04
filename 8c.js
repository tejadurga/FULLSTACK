JavaScript File (8c.js) 
let output = document.getElementById("output"); 
function printUsingFor() { 
output.textContent = "Using For Loop: "; 
for (let i = 1; i <= 10; i++) { 
output.textContent += i + " "; 
} 
} 
function printUsingWhile() { 
output.textContent = "Using While Loop: "; 
let i = 1; 
while (i <= 10) { 
output.textContent += i + " "; 
i++; 
} 
} 
function printUsingDoWhile() { 
output.textContent = "Using Do-While Loop: "; 
let i = 1; 
do { 
output.textContent += i + " "; 
i++; 
} while (i <= 10); 
} 