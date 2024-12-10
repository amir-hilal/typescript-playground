"use strict";
//function with type annotations
function add(a, b) {
    return a + b;
}
//default parameters, if no value passed into name, it defaults to Guest
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
//optional parameters
function log(message, user) {
    console.log(`${user !== null && user !== void 0 ? user : "System"}: ${message}`);
} //user will default to System if it was null because this parameter is optional
