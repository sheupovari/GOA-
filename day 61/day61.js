console.log(10 / 2); 
console.log(5 * 4); 
console.log(6 + 8); 
console.log(50 + 30); 
console.log(100 * 4); 
console.log(1000 - 400); 
console.log(5 * 3); 
console.log((5 + 10 + 15 + 20 + 25) / 5); 
console.log(1000 - 750); 
console.log(120 - 15); 
console.log(17 - 8); 
console.log(85 + 10); 
console.log(15 * 40); 
console.log(3 > 2 ); 
console.log(31 - 30);
console.log((64 / 80) * 100); 
console.log(500 - 50); 
console.log(70 * 2); 

//task2
function compareNumbers(number1, number2) {
    if (number1 === number2) {
        console.log(`${number1} და ${number2}-ი ერთმანეთს ეკუთვნის.`);
    } else if (number1 > number2) {
        console.log(`${number1} მეტია ${number2}-ზე.`);
    } else {
        console.log(`${number1} ნაკლებია ${number2}-ზე.`);
    }
}

// ფუნქციის გამოძახება მაგალითად:
compareNumbers(5, 10);
compareNumbers(20, 5);
compareNumbers(7, 7);



//task3
function compareNumbersAndPrintResult(number1, number2) {
    if (number1 === number2) {
        console.log("შენ ხარ სწორი :))");
    } else {
        console.log("შენ ხარ არასწორი!!");
    }
}


compareNumbersAndPrintResult(5, 10); // შენ ხარ არასწორი
compareNumbersAndPrintResult(7, 7); // შენ ხარ სწორი 


