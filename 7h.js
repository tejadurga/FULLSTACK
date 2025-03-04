JavaScript File (7h.js) 
let output = document.getElementById("output"); 
// Constructor function 
function Person(name, age) { 
this.name = name; 
this.age = age; 
} 
// Method 
Person.prototype.sayHello = function() { 
return "Hello, my name is " + this.name + " and I am " + this.age + 
" years old."; 
} 
// Accessor (getter) 
Object.defineProperty(Person.prototype, "fullName", { 
get: function() { 
return this.name + " " + this.age; 
} 
}); 
// Create an object 
let person; 
function createObject() { 
person = new Person("Madhu Kumar", 35); 
output.textContent = "Object created successfully!"; 
} 
// Display object 
function displayObject() { 
if (person) { 
output.textContent = "Name: " + person.name + ", Age: " + 
person.age; 
} else { 
} 
} 
output.textContent = "Object not created yet!"; 
// Access properties 
function accessProperties() { 
if (person) { 
output.textContent = "Name: " + person.name + ", Age: " + 
person.age; 
} else { 
output.textContent = "Object not created yet!"; 
} 
} 
// Call method 
function callMethod() { 
if (person) { 
output.textContent = person.sayHello(); 
} else { 
output.textContent = "Object not created yet!"; 
} 
} 
// Use accessor 
function useAccessor() { 
if (person) { 
output.textContent = "Full Name: " + person.fullName; 
} else { 
output.textContent = "Object not created yet!"; 
} 
} 