JavaScript File (8d.js) 
let output = document.getElementById("output"); 
let person = { 
name: "Ramesh Kumar", 
age: 30, 
occupation: "Software Developer" 
}; 
function printUsingForIn() { 
output.textContent = "Using For-In Loop: "; 
for (let key in person) { 
output.textContent += `${key}: ${person[key]}, `; 
} 
} 
function printUsingForEach() { 
output.textContent = "Using For-Each Loop: "; 
Object.keys(person).forEach(key => { 
output.textContent += `${key}: ${person[key]}, `; 
}); 
} 
function printUsingForOf() { 
output.textContent = "Using For-Of Loop: "; 
for (let value of Object.values(person)) { 
output.textContent += `${value}, `; 
} 
}