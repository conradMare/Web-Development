// Generating a random number:
let n = Math.random();
n = Math.floor(n * 6) + 1;
console.log(n);

// Random "Love Score" Generator:
prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
alert("Your love score is " + loveScore + "%");