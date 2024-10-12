function calculateTotalCost() {
    let numberOfItems = parseInt(prompt("შეიყვანეთ ნივთების რაოდენობა, რომლის შეძენაც გსურთ:"));
    
    while (isNaN(numberOfItems) || numberOfItems <= 0) {
        numberOfItems = parseInt(prompt("გთხოვთ შეიყვანეთ დადებითი მთლიანი რიცხვი ნივთების რაოდენობისთვის:"));
    }
    
    let totalCost = 0;
    
    for (let i = 1; i <= numberOfItems; i++) {
        let itemPrice = parseFloat(prompt(`შეიყვანეთ ნივთის #${i} ფასი:`));
        
        while (isNaN(itemPrice) || itemPrice <= 0) {
            itemPrice = parseFloat(prompt(`გთხოვთ შეიყვანეთ დადებითი რიცხვი ნივთის #${i} ფასისთვის:`));
        }
        
        totalCost += itemPrice;
    }
    
    console.log(`ყველა ელემენტის მთლიანი ღირებულება არის: ${totalCost} ლარი`);
}

calculateTotalCost();