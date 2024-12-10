"use strict";
class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name, "woof");
    }
}
const dog = new Dog("Buddy");
dog.makeSound();
