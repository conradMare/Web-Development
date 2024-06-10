// Done in browser console:

// Creating an Object:
var houseKeeper1 = {
    name: "Jane",
    age: 25,
    yearsOfExperience: 5,
    languages: ["English", "Afrikaans", "Zulu"]
}

// Creating a Constructor (Factory):
function HouseKeeper(name, age, yearsOfExperience, languages) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.languages = languages;
}

var houseKeeper1 = new HouseKeeper("Jane", 25, 5, ["English", "Afrikaans", "Zulu"]);

console.log(houseKeeper1.age);