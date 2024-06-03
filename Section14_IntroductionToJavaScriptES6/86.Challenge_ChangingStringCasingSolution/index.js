// Challenge: Name, but first character is upper case
var name = prompt("What is your name?");
var firstCharacter = name.slice(0, 1).toUpperCase();
var restOfCharacters = name.slice(1, name.length);
restOfCharacters = restOfCharacters.toLowerCase();
var capitalizedName = firstCharacter + restOfCharacters;
alert("Hello " + capitalizedName);