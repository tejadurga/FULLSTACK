JavaScript File (7g.js) 
let output = document.getElementById("output"); 
let date = new Date(); 
// Function to get the date 
function getDate() { 
output.textContent = "Date: " + date.getDate(); 
} 
// Function to get the day 
function getDay() { 
output.textContent = "Day: " + date.getDay(); 
} 
// Function to get the full year 
function getFullYear() { 
output.textContent = "Full Year: " + date.getFullYear(); 
} 
// Function to get the hours 
function getHours() { 
output.textContent = "Hours: " + date.getHours(); 
} 
// Function to get the milliseconds 
function getMilliseconds() { 
output.textContent = "Milliseconds: " + date.getMilliseconds(); 
} 
// Function to get the minutes 
function getMinutes() { 
output.textContent = "Minutes: " + date.getMinutes(); 
} 
// Function to get the month 
function getMonth() { 
} 
output.textContent = "Month: " + date.getMonth(); 
// Function to get the seconds 
f
unction getSeconds() { 
output.textContent = "Seconds: " + date.getSeconds(); 
} 
// Function to get the time 
function getTime() { 
output.textContent = "Time: " + date.getTime(); 
} 
// Function to get the timezone offset 
function getTimezoneOffset() { 
output.textContent = "Timezone Offset: " + 
date.getTimezoneOffset(); 
} 
// Function to set the date 
function setDate() { 
date.setDate(15); 
output.textContent = "Date set to: " + date; 
} 
// Function to set the full year 
function setFullYear() { 
date.setFullYear(2025); 
output.textContent = "Full Year set to: " + date; 
} 
// Function to set the hours 
function setHours() { 
date.setHours(10); 
output.textContent = "Hours set to: " + date; 
} 
// Function to set the milliseconds 
function setMilliseconds() { 
date.setMilliseconds(500); 
output.textContent = "Milliseconds set to: " + date; 
} 
// Function to set the minutes 
function setMinutes() { 
date.setMinutes(30); 
output.textContent = "Minutes set to: " + date; 
} 
// Function to set the month 
function setMonth() { 
date.setMonth(5); 
output.textContent = "Month set to: " + date; 
} 
// Function to set the seconds 
function setSeconds() { 
date.setSeconds(45); 
output.textContent = "Seconds set to: " + date; 
} 
// Function to set the time 
function setTime() { 
date.setTime(1643723400000); 
output.textContent = "Time set to: " + date; 
}