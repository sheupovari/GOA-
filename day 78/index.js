const student = {
    name: "John Doe",
    age: 20,
    grade: "A"
};


function displayStudentInfo(student) {
    const { name, age, grade } = student;
    alert(`Name: ${name}\nAge: ${age}\nGrade: ${grade}`);
}


displayStudentInfo(student);


const employee = {
    name: "Jane Smith",
    position: "Software Engineer",
    salary: 80000
};

function displayEmployeeInfo(employee) {
    const { name, position, salary } = employee;
    alert(`Name: ${name}\nPosition: ${position}\nSalary: $${salary}`);
}


displayEmployeeInfo(employee);

function findMaxValue(arr) {
 
    let max = arr[0];
    
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
   
    alert(`Maximum Value: ${max}`);
    return max;
}

let numbers1 = [10, 3, 6, 8, 2, 5];
findMaxValue(numbers1);



function calculateAverageValue(arr) {

    let sum = 0;
    
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    

    let average = sum / arr.length;
    
    
    alert(`Average Value: ${average}`);
    return average;
}


let numbers2 = [10, 3, 6, 8, 2, 5];
calculateAverageValue(numbers2);



function reverseArray(arr) {

    let reversedArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }

    alert(`Reversed Array: ${reversedArray}`);
    return reversedArray;
}

let numbers = [1, 2, 3, 4, 5];
reverseArray(numbers);

