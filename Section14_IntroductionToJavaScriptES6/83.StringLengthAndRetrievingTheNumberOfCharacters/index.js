// String Lengths
var name = "Conrad";
name.length;

// Retrieving the number of characters
var tweet = prompt("Compose your tweet:");
var tweetCount = tweet.length;
alert("You have written " + tweetCount +
      " characters, you have " + (140 - tweetCount) + " characters remaining");