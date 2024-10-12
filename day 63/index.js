// სავარჯიშო 3:
let user = {
    სახელი: "ნიკა",
    ასაკი: 25,
    ქალაქი: "თბილისი"
};

// სავარჯიშო 4:
function calculateFamilyAges(family) {
    let totalAge = 0;
    for (let member in family) {
        totalAge += family[member];
    }
    return totalAge;
}

let familyAges = {
    მამა: 45,
    დედა: 42,
    შვილი1: 20,
    შვილი2: 18
};

let totalFamilyAge = calculateFamilyAges(familyAges);
console.log("ოჯახის სულ ასაკების ჯამი:", totalFamilyAge);

// სავარჯიშო 5:
user.ქალაქი = "ქუთაისი";
console.log("განახლებული ქალაქი:", user.ქალაქი);