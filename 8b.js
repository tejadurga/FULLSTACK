JavaScript File (8b.js) 
let output = document.getElementById("output"); 
function displayDay() { 
 let dayNumber = parseInt(document.getElementById("day").value); 
 switch (dayNumber) { 
  case 1: 
   output.textContent = "Monday"; 
   break; 
  case 2: 
   output.textContent = "Tuesday"; 
   break; 
  case 3: 
   output.textContent = "Wednesday"; 
   break; 
  case 4: 
output.textContent = "Thursday"; 
break; 
case 5: 
output.textContent = "Friday"; 
break; 
case 6: 
output.textContent = "Saturday"; 
break; 
case 7: 
output.textContent = "Sunday"; 
break; 
default: 
output.textContent = "Invalid day number"; 
} 
} 