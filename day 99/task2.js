function squareNumbers(arr) {
    return arr.map(num => num * num);
}

const nums = [1, 2, 3, 4, 5];
const squaredResult = squareNumbers(nums);
console.log(squaredResult); 
