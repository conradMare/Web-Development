// $("button").on("click", function() {
//     $("h1").toggle();
// });

// $("button").on("click", function () {
//     $("h1").fadeOut();
// });

// $("button").on("click", function () {
//     $("h1").fadeToggle();
// });

// $("button").on("click", function () {
//     $("h1").slideUp();
// });

// $("button").on("click", function () {
//     $("h1").slideDown();
// });

// $("button").on("click", function () {
//     $("h1").slideToggle();
// });

// $("button").on("click", function () {
//     $("h1").animate({margin: "20%"});
// });

// Chaining animations:
$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});