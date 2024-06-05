// === Vs. ==
let a = 1;
let b = "1";

if (a === b) {
    console.log("yes");
} else {
    console.log("no");
}
// Output -> "no"

if (a == b) {
    console.log("yes");
} else {
    console.log("no");
}

// Output -> "yes"

// === -> Checks if data types are matching in addition to checking equality
// == -> Checks for equality, even if DATA TYPES ARE NOT MATCHING