JavaScript File (8f.js) 
let output = document.getElementById("output"); 
function calculateDenomination() { 
let amount = parseInt(document.getElementById("amount").value); 
let denominations = [100, 50, 20, 10, 5, 2, 1]; 
let result = ""; 
for (let i = 0; i < denominations.length; i++) { 
let count = Math.floor(amount / denominations[i]); 
amount %= denominations[i]; 
if (count > 0) { 
result += `${count} - ${denominations[i]}s, `; 
} 
} 
output.textContent = "Denomination: " + result.slice(0, -2); 
} 