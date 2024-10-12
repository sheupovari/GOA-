function* generateInfinitenumbers() {
    let count = 0;
    while (true) {
        yield count++;
    }
}

const infiniteNumbers = generateInfinitenumbers();
console.log(infiniteNumbers.next().value); 
console.log(infiniteNumbers.next().value); 
console.log(infiniteNumbers.next().value); 
