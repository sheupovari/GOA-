function calculateBMI() {
    let weight = parseFloat(prompt("გთხოვთ, შეიყვანეთ წონა (კილოგრამებში):"));
    
    while (isNaN(weight) || weight <= 0) {
        weight = parseFloat(prompt("გთხოვთ, შეიყვანეთ დადებითი რიცხვი წონისთვის (კილოგრამებში):"));
    }
    
    let height = parseFloat(prompt("გთხოვთ, შეიყვანეთ სიმაღლე (მეტრებში):"));
    
    while (isNaN(height) || height <= 0) {
        height = parseFloat(prompt("გთხოვთ, შეიყვანეთ დადებითი რიცხვი სიმაღლისთვის (მეტრებში):"));
    }
    
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2); 

    let message;
    
    if (bmi < 18.5) {
        message = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        message = "Overweight";
    } else {
        message = "Obesity";
    }
    
    console.log(`თქვენი BMI არის: ${bmi}. სტატუსი: ${message}`);
}

calculateBMI();