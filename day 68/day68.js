//task 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
//task 2
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
  }
//task 3
let sum = 0;
for (let i = 1; i <= 50; i++) {
  sum += i;
}
console.log(sum);
//task 4
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
//task 5
let number = 29; // Example number
let isPrime = true;

if (number === 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(isPrime ? `${number} is a prime number.` : `${number} is not a prime number.`);
//task 6
for (let i = 100; i >= 0; i--) {
    console.log(i);
  }
//task 7
let text = "ILOVEGOA";
console.log(text.length);
//task 8

for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

//task 9
let count = 10;
while (count >= 0) {
  console.log(count);
  count--;
}
console.log("HAPPY NEW YEAR!");
//task 10
let number1 = 1;
while (number1 <= 20) {
  if (number1 % 2 !== 0) {
    console.log(number1);
  }
  number1++;
}
//task 11
let n = 5; // Example number
let factorial = 1;
let i = 1;
while (i <= n) {
  factorial *= i;
  i++;
}
console.log(factorial);
//task 12
let sum1 = 0;
let i1 = 1;
while (i1 <= 10) {
  sum1 += i1;
  i1++;
}
console.log(sum1);
//task 13
let a = parseInt(prompt("Enter the starting number (a): "));
let b = parseInt(prompt("Enter the ending number (b): "));

while (a <= b) {
  console.log(a);
  a++;
}
//task 14
let i2 = 100;
while (i2 >= 0) {
  console.log(i2);
  i2--;
}