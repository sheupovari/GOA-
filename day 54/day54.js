//დავალება N1
// სტრინგის ტიპი
const stringVariable = "Hello, world!";
console.log(typeof stringVariable);

// მთელი რიცხვის ტიპი
const integerVariable = 42;
console.log(typeof integerVariable);

// წილადი რიცხვის ტიპი
const floatVariable = 3.14;
console.log(typeof floatVariable);

//დავალება N2

const firstName = ("საბა");
const lastName = ("წიქარიშვილი");


const age = ("ასაკი:13 წლის")


const birthYear = ("2010 წელი");


const address = ("ლეონიძის 20");


console.log("სახელი:", firstName);
console.log("გვარი:", lastName);
console.log("ასაკი:", age);
console.log("დაბადების წელი:", birthYear);
console.log("მისამართი:", address);






//დავალება N3
// სტრინგიდან გადაყვანა ინტეჯერად
const stringNumber = "42";
const integerNumber = parseInt(stringNumber);
console.log(typeof integerNumber); // უნდა დააბრუნოს "number"

// ინტეჯერიდან გადაყვანა სტრინგად
const integer = 42;
const string = integer.toString();
console.log(typeof string); // უნდა დააბრუნოს "string"