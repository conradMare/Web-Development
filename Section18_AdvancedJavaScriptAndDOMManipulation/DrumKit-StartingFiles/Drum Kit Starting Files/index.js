
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I have been clicked");
    })
}

// Lesson done in browser console:
// function add(num1, num2) {
//     return num1 + num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }

// calculator(4, 5, operator);

// To access the debugger in the browser console (Chrome):
// debugger; Shift + Enter
// calculator(4, 5, multiply); Call the function you want to debug

// Higher Order Functions:
//  "Higher order functions are functions that can take functions as an input."

// Challenge - Calculator with ALL operators
// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function calculator(num1, num2, operator) {
//     return operator(num1, num2);
// }