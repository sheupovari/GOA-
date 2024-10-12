const correctEmail = "example@example.com";
const correctPassword = "password123";


let userEmail = prompt("მიმდინარე მეილი:");
let userPassword = prompt("პაროლი:");


if (userEmail === correctEmail && userPassword === correctPassword) {
    console.log("You have permission");
} else {
    console.log("You don't have permission");
}