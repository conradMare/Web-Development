// let guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
// console.log(guestList);
// console.log(guestList.length);
// console.log(guestList[0]);

// Exercise
let guestName = prompt("What is your name?");
let guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

if (guestList.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("Sorry you are not on the guest list.");
}
