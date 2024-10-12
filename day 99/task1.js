function processArray(arr, callback) {
    return arr.map(callback);
}

const numbers = [1, 2, 3, 4, 5];
const result = processArray(numbers, num => num * 2);
console.log(result); 
