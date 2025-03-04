JavaScript File (8a.js) 
let output = document.getElementById("output"); 
function findLargerNumber() { 
let num1 = parseInt(document.getElementById("num1").value); 
let num2 = parseInt(document.getElementById("num2").value); 
let num3 = parseInt(document.getElementById("num3").value); 
if (num1 > num2 && num1 > num3) { 
output.textContent = num1 + " LARGER NUMBER"; 
} else if (num2 > num1 && num2 > num3) { 
output.textContent = num2 + " LARGER NUMBER"; 
} else if (num3 > num1 && num3 > num2) { 
output.textContent = num3 + " LARGER NUMBER"; 
} else { 
output.textContent = "EQUAL NUMBERS"; 
} 
}