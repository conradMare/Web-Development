// Adding a while loop to the "FizzBuzz" Challenge:

var output = [];
var count = 1;

function fizzBuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        }
        else if (count % 3 === 0) {
            output.push("Fizz");
        }
        else if (count % 5 === 0) {
            output.push("Buzz");
        }
        else {
            output.push(count);
        }

        count++;
    }
    console.log(output);
}

fizzBuzz();

// 99 Bottles Challenge:

var numberOfBottles = 99;

while (numberOfBottles >= 0 && numberOfBottles <= 100) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of soda on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of soda,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of soda on the wall.");
}