function* generateEveNnumbers() {
    let count = 0;
    while (true) {
        yield count;
        count += 2;
    }
}

const evenNumbers = generateEveNnumbers();
console.log(evenNumbers.next().value); 
console.log(evenNumbers.next().value); 
console.log(evenNumbers.next().value); 
