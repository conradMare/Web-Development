// Done in browser console:
function HouseKeeper(name, age, yearsOfExperience, languages) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.languages = languages;
    this.clean = function () {
        alert("Cleaning in progress!");
    }
}
