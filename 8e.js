JavaScript File (8e.js) 
let output = document.getElementById("output"); 
function checkArmstrong() { 
let num = parseInt(document.getElementById("num").value); 
let originalNum = num; 
let sum = 0; 
let digitCount = num.toString().length; 
while (num != 0) { 
let digit = num % 10; 
sum += Math.pow(digit, digitCount); 
num = Math.floor(num / 10); 
} 
if (sum == originalNum) { 
output.textContent = `${originalNum} is an Armstrong 
number`; 
} else { 
output.textContent = `${originalNum} is not an Armstrong 
number`; 
} 
}