"use strict";
function identity(value) {
    return value; //this will return the same type as received
}
const num = identity(42);
const str = identity("Hello");
class Box {
    constructor(value) {
        this.contents = value;
    }
}
const numberBox = new Box(10);
console.log(numberBox.contents); // 10
