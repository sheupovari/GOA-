function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}


function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    
    if (b === 0) {
        return "Error: division by zero!";
    }
    return a / b;
}


console.log(add(5, 3));      
console.log(subtract(10, 7)); 
console.log(multiply(4, 6)); 
console.log(divide(8, 2));  

//task2
 calculate_rectangle_area(length, width)
    area = length * width
    return area


console.log(calculate_rectangle_area(5, 7))  

//task 3
function printGoaBest() {
    for (var i = 0; i < 10; i++) {
        console.log("Goa best");
    }
}


console.log()

//task 4
function calculateRectanglePerimeter(side1, side2, side3, side4) {
    return side1 + side2 + side3 + side4;
}


var perimeter = calculateRectanglePerimeter(4, 5, 4, 5);
console.log("Rectangle perimeter:", perimeter);

//task 5
function getUserInfo() {
    var firstName = prompt("შემოიტანეთ თქვენი სახელი:");
    var lastName = prompt("შემოიტანეთ თქვენი გვარი:");
    var birthYear = prompt("რომელ წელს დაბადეთ?");
    var city = prompt("სად ცხოვრობთ?");
    
    var userInfo = {
        firstName: firstName,
        lastName: lastName,
        birthYear: birthYear,
        city: city
    };
    
    return userInfo;
}


var user = getUserInfo();


console.log("მომხმარებლის ოჯახის სახელი:", user.firstName + " " + user.lastName);
console.log("წლოვანება:", user.birthYear);
console.log("ცხოვრობს:", user.city);

//task 6
