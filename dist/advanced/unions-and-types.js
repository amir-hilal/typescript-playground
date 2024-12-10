"use strict";
function handleResult(result) {
    if (result === "success") {
        console.log("Operation successful!");
    }
    else {
        console.log("Operation failed.");
    }
}
handleResult("success");
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    return value;
}
