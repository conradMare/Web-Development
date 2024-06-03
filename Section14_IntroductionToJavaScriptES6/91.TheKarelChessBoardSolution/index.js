// https://stanford.edu/~cpiech/karel/ide.html

// To Top Right of 5x5 board:
/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/

function main() {
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
    beepersRight();
}

function goUpTurnRight() {
    turnRight();
    move();
    turnRight();
}

function goUpTurnLeft() {
    turnLeft();
    move();
    turnLeft();
}

function beepersRight() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
}

function beepersLeft() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
}