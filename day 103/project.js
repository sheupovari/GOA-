const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const doubled = arr.map(num => num * 2);
console.log("Doubled:", doubled); 

const evenNumbers = arr.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); 


const firstGreaterThan5 = arr.find(num => num > 5);
console.log("First number greater than 5:", firstGreaterThan5);


const indexOfFirstGreaterThan5 = arr.findIndex(num => num > 5);
console.log("Index of first number greater than 5:", indexOfFirstGreaterThan5);


const joined = arr.join(", ");
console.log("Joined array:", joined); 

const indexOf3 = arr.indexOf(3);
console.log("Index of 3:", indexOf3); 


const str = "გამარჯობა";
console.log("Starts with 'გამ':", str.startsWith("გამ")); 
console.log("Ends with 'ობა':", str.endsWith("ობა")); 
console.log("Includes 'მარჯ':", str.includes("მარჯ")); 
