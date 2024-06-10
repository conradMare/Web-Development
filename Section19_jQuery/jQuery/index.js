
// Adding an eventListener with jQuery:
// $("h1").click(function() {
//     $("h1").css("color", "purple");
// })

// Adding an eventListener with a for loop to buttons that changes the h1 color using Vanilla JS:
// for(i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "green";
//     })
// }

// Using jQuery to change the h1 color when clicking a button:
$("button").click(function() {
    $("h1").css("color", "purple");
})

// Using jQuery to detect key strokes in the input of the html:
$("input").keydown(function(event) {
    console.log(event.key);
})

// Challenge -> Update the h1 whenever a key is pressed:
$(document).keydown(function(event) {
    $("h1").text(event.key);
})

// More flexible way of adding an eventListener (Note 2 parameters):
$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
})