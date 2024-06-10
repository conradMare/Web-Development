
// Add element css property (2 parameters):
//  $("h1").css("color", "green");

// Retrieve element css property (1 parameter):
// console.log($("h1").css("font-size"));

// BEST PRACTICE -> SEPARATE CONCERNS!!!

// Add class from "styles.css":
// $("h1").addClass("big-title");

// Remove class:
// $("h1").removeClass("big-title");

// Add multiple classes (Note the space in addClass):
$("h1").addClass("big-title margin-50");

// To see if a particular element has a class:
$("h1").hasClass("margin-50");

$("button");