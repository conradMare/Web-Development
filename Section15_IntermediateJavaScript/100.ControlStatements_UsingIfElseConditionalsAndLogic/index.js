prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%." + "You love each other like Winnie the Pooh loves honey!");
} else {
    alert("Your love score is " + loveScore + "%");
}
