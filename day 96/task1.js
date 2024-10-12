const person = {
    firstName: "საბა",
    lastName: "წიქარიშვილი",
    age: 25,
    address: {
        city: "რუსთავი",
        country: "საქართველო"
    }
};
person.age = 14;
person.address.country = "საქართველო";


delete person.address.country;

console.log(person);
