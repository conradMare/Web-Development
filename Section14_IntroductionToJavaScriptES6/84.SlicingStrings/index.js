// Slicing Strings
var name = "Conrad";
name.slice(0,1);

var name = "Angela";
name.slice(0, 3);

// String slicing at 140 characters + character count:
var tweet = prompt("Compose a tweet: " + "(max 140 characters)");
var tweetCount = tweet.length;

alert("You have written: " + tweet.slice(0,139) + " ,you have " + (140 - tweetCount) +
     " characters left");

// Approach 2:
var tweet = prompt("Compose a tweet:");
var tweetUnder140 = tweet.slice(0,139);
alert(tweetUnder140);

// Approach 3 (Shortest):
alert(prompt("Compose a tweet:").slice(0,139));