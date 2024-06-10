// In browser console:
function anotherAddEventListener(typeOfEvent, callback) {
    //Detect Event Code
    var eventThatHappened = {
        eventType: "keydown",
        key: "p",
        durationKeyPress: 2
    }

    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
}

// anotherAddEventListener("keydown", function(event) {
//     console.log(event);
// })

// document.addEventListener("keydown", function(event) {
//     console,log(event);
// })

debugger;
anotherAddEventListener("keydown", function(event) {
    console.log(event);
})