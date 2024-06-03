// https://stanford.edu/~cpiech/karel/ide.html

// To Top Right of 5x5 board:
/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main() {
    //your code here
    toTopRight();
}

function toTopRight() {
    move();
    turnLeft();
    move();
    turnRight();
    move();
    turnLeft();
    move();
    turnRight();
    move();
    turnLeft();
    move();
    turnRight();
    move();
    turnLeft();
    move();
}

function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}

// Diagonal line of beepers from bottom left corner to top right corner:
/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main() {
    //your code here
    beeperTopRight();
}

function turnRight() {
    turnLeft();
    turnLeft();
    turnLeft();
}

function beeperTopRight() {
    putBeeper();
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
}