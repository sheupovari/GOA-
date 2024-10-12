
let numbers = [1, 2, 3, 4, 5, 6];


numbers.push(7);


numbers.shift();

const indexOfFour = numbers.indexOf(4);


const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(numbers);
console.log(indexOfFour);
console.log(evenNumbers);
