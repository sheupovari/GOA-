//task 1
var userFamily = {
    სახელი: "საბა",
    გვარი: "წიქარიშვილი",
    საცხოვრებელი_ადგილი: "რუსთავი"
  };

  
  var fullNameAndLocation = userFamily.სახელი + " " + userFamily.გვარი + ", " + userFamily.საცხოვრებელი_ადგილი;
  

  console.log(fullNameAndLocation);
  //task 2
  const ages = {
    father: 45,
    mother: 42,
    child1: 20,
    child2: 18
  };
  
  // Add desired travel time to each family member's age
  for (const member in ages) {
    ages[member] += 10;
  }
  
  console.log(ages);
  //task 3
  function square(number) {
    return number * number;
  }
  console.log(square(5))