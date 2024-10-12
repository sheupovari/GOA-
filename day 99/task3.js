function uniqueElements(arr) {
    return [...new Set(arr)];
}

const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueResult = uniqueElements(duplicatesArray);
console.log(uniqueResult);