// document.querySelector("button").addEventListener("click", function () {
//     alert("I have been clicked!");

//     //What to do when click detected
// });

// Challenge: Add an eventListener to each button
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        alert("I have been clicked");
    })
}
